import express from "express";

import logRequest from "./middlewares/logger.js";
import validate from "./middlewares/validate.js";
import { createTodoSchema, updateTodoSchema } from "./schemas/todoSchema.js";
import todoController from "./controllers/todoController.js";

const app = express();

app.use(express.json());

app.use(logRequest);

app.get("/todos", todoController.getTodos);

app.get("/todos/:id", todoController.getTodoById);

app.post("/todos", validate(createTodoSchema), todoController.createTodo);

app.put("/todos/:id", validate(updateTodoSchema), todoController.updateTodo);

app.delete("/todos/:id", todoController.deleteTodo);

export default app;
