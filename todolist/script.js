document.addEventListener("DOMContentLoaded", function () {
    const formData = document.querySelector(".form-data");
    const inputData = document.querySelector(".input-text");
    const todoList = document.querySelector(".todo-list");
    const formSubmit = document.querySelector(".form-submit");
    let editMode = false;
    let editItem;
    formData.addEventListener("submit", function (event) {
        event.preventDefault();
        let inputValue = inputData.value.trim();
        if (inputValue !== "") {
            if (editMode) {
                editItem.firstChild.textContent = inputValue;
                formSubmit.innerText = "Add task";
                editItem = null;
                editMode = false;
            }
            else {
                addTask(inputValue);
                inputData.value = "";
            }

        }
        else {
            alert("Something went wrong");
        }

    })

    todoList.addEventListener("click", function (event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            const tagItem = target.parentNode;
            if (target.innerText === '✏️') {
                editMode = true;
                editItem = tagItem;
                formSubmit.innerText = "Edit task"
                inputData.value = tagItem.firstChild.innerText;
                inputData.focus();


            }
            else if (target.innerText === '❌') {
                tagItem.remove();
            }
        }
    })

    function addTask(value) {
        const li = document.createElement("li");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        li.innerHTML = `<span>${value}</span>`;
        editButton.innerText = '✏️';
        deleteButton.innerText = '❌';

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

    }



})