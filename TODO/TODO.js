const taskInput = document.getElementById("taskInput"); // input field at top
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList"); //the empty li html in index

let tasks = [];

const getTasks = () => {
    // clear everything inside taskList
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");

        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editTask(task.id);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeTask(task.id);

        // adding everything inside li then li into taskList
        li.appendChild(textSpan);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);

        taskList.appendChild(li);
    });
};

const addTask = () => {
    const text = taskInput.value;

    tasks.push({
        id: crypto.randomUUID(),
        text: text,
    });

    taskInput.value = "";
    addBtn.textContent = "Add";
    getTasks();
};

function editTask(id) {
    const taskToEdit = tasks.find((t) => t.id === id);
    taskInput.value = taskToEdit.text;

    tasks = tasks.filter((t) => t.id !== id);

    addBtn.textContent = "Edit";
    taskInput.focus();
    getTasks();
}

const removeTask = (id) => {
    tasks = tasks.filter((t) => t.id !== id);

    getTasks();
};

// Logic to add task when presing Enter
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

getTasks();
