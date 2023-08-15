const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
        bindDeleteButton(listItem);
    }
}

function bindDeleteButton(listItem) {
    const deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });
}
