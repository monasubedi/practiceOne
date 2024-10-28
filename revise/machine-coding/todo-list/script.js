
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".todo-form");
    const input = document.querySelector(".todo-input");
    const list = document.querySelector(".todo-list");
    const formSubmit = document.querySelector(".todo-submit");
    let editMode = false;
    let editItem = null;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const inputValue = input.value.trim();
        if (inputValue !== "") {
            if (editMode) {
                editItem.firstChild.textContent = inputValue;
                editMode = false;
                editItem = null;
                formSubmit.innerText = "Add todo";

            }
            else {
                addNewTask(inputValue);
            }
            input.value = "";

        }
        else {
            alert("The input is empty");
        }
    })

    list.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            let todoItem = event.target.parentNode;
            if (event.target.innerText === "✏️") {
                editMode = true;
                editItem = todoItem;
                formSubmit.innerText = "Edit Item";
                input.value = todoItem.firstChild.innerText;
                input.focus();
            }
            else if (event.target.innerText === "❌") {
                todoItem.remove();
            }

        }

    })

    function addNewTask(inputText) {
        const todoItem = document.createElement("li");
        const editBtn = document.createElement("button");
        const removeBtn = document.createElement("button");
        todoItem.innerHTML = `<span> ${inputText} </span>`;
        editBtn.innerText = '✏️';
        removeBtn.innerText = '❌';
        todoItem.appendChild(editBtn);
        todoItem.appendChild(removeBtn);
        list.append(todoItem);

    }


})