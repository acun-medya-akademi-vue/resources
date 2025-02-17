const todoInput = document.querySelector("#todoInput")
const addBtn = document.querySelector("#addBtn")
const todoList = document.querySelector("#todoList")

addBtn.addEventListener('click', () => {
  const listItem = document.createElement("li")
  listItem.textContent = todoInput.value
  todoList.append(listItem)

  todoInput.value = '';
  todoInput.focus()
})


// Ödeviniz. Enter'a bastığımda todoValue'yu listeye eklesin.
// todoInput.addEventListener('keydown', () => {})
