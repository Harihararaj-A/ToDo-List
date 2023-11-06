function addTask() {
    var taskText = document.getElementById("newTask").value;
    if (taskText.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button onclick="completeTask(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        document.getElementById("pendingList").appendChild(listItem);
        document.getElementById("newTask").value = "";
    }
}

function completeTask(button) {
    var listItem = button.parentElement.parentElement;
    listItem.classList.add("completed");
    document.getElementById("completedList").appendChild(listItem);
}

function deleteTask(button) {
    var listItem = button.parentElement.parentElement;
    listItem.remove();
}
