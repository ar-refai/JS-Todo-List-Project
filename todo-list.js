        // submit element
        const submitElement = document.querySelector(".todo-submit");

        const todoList = [];

        // main functionality
        function todoAction() {
            const inputNameElement = document.querySelector(".in-name");
            let nameVal = inputNameElement.value;
            const inputDateElement = document.querySelector(".in-date");
            let dateVal = inputDateElement.value;
            if (nameVal === "" || dateVal === "") {
                alert("Please enter valid data");
                return
            }
            todoList.push({
                name: nameVal,
                date: dateVal
            });

            inputNameElement.value = "";
            inputDateElement.value = "";
            renderTodoList(todoList);
        }

        // display the todo list
        function renderTodoList(list) {
            todoHTML = "";
            for (let i = 0; i < list.length; i++) {
                const todoObj = list[i];
                const name = list[i].name;
                const date = list[i].date;
                const html = `
                <tr>
                    <td>${name}</td>
                    <td>${date}</td> 
                    <td>
                    <button class"delete-item" onclick="deleteItem(${i})">
                        Delete
                    </button>
                    </td>
                </tr>
                `;
                todoHTML += html;
            }
            const todoBody = document.querySelector('.todo-body');
            todoBody.innerHTML = todoHTML;
            
        }

        // delete the todo list item
        function deleteItem(index) {
            todoList.splice(index, 1);
            renderTodoList(todoList);
        }
