import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "..", "data", "todos.json");
const readData = async () => {
    try {
        const data = await fs.readFile(DATA_FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }
        throw error;
    }
};

const writeData = async (data) => {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
};

const generateId = () =>
    Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

const getTodos = async (req, res) => {
    try {
        let todos = await readData();

        const { completed } = req.query;
        if (completed !== undefined) {
            const isCompleted = completed === "true";
            todos = todos.filter((t) => t.completed === isCompleted);
        }

        const { sortBy, order } = req.query;
        if (sortBy) {
            todos.sort((a, b) => {
                if (a[sortBy] < b[sortBy]) return order === "desc" ? 1 : -1;
                if (a[sortBy] > b[sortBy]) return order === "desc" ? -1 : 1;
                return 0;
            });
        } else {
            todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const paginatedTodos = todos.slice(startIndex, endIndex);

        res.json({
            total: todos.length,
            page,
            limit,
            totalPages: Math.ceil(todos.length / limit),
            data: paginatedTodos,
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve todos" });
    }
};

const getTodoById = async (req, res) => {
    try {
        const todos = await readData();
        const todo = todos.find((t) => t.id === req.params.id);

        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }

        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve todo" });
    }
};

const createTodo = async (req, res) => {
    try {
        const todos = await readData();
        const newTodo = {
            id: generateId(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        todos.push(newTodo);
        await writeData(todos);

        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: "Failed to create todo" });
    }
};

const updateTodo = async (req, res) => {
    try {
        const todos = await readData();
        const index = todos.findIndex((t) => t.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: "Todo not found" });
        }

        const updatedTodo = {
            ...todos[index],
            ...req.body,
            updatedAt: new Date().toISOString(),
        };

        todos[index] = updatedTodo;
        await writeData(todos);

        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: "Failed to update todo" });
    }
};

const deleteTodo = async (req, res) => {
    try {
        let todos = await readData();
        const index = todos.findIndex((t) => t.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ error: "Todo not found" });
        }

        todos = todos.filter((t) => t.id !== req.params.id);
        await writeData(todos);

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete todo" });
    }
};

const todoController = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};

export default todoController;
