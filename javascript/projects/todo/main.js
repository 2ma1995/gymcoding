/**
 * 1]추가하기
 * 2]삭제하기
 * 3]전체삭제
 * 3]리스트보여주기
 */

const $inputBox = document.querySelector(`#input-box`);
const $addBtn = document.querySelector(`#add-btn`);
const $todoList = document.querySelector(`#todo-list`);
const $todoCount = document.querySelector(`#todo-count`);
const $clearAll = document.querySelector(`#clear-all`);
let todoList = [];
$inputBox.addEventListener(`keyup`, function (e) {
  console.log(`e.target.value: `, e.target.value);
  if (e.target.value) {
    $addBtn.classList.add(`active`);
  } else {
    $addBtn.classList.remove(`active`);
  }
});
$addBtn.addEventListener(`click`, function () {
  const todoItem = {
    id: Date.now(),
    value: $inputBox.value,
  };
  todoList.push(todoItem);
  localStorage.setItem(`todoList`, JSON.stringify(todoList));
  appendTodoItem(todoItem);
  //카운트변경
  updateTodoCount();
  //  input box clear
  $inputBox.value = ``;
  // 전체삭제 버튼 활성화
  $clearAll.classList.add(`active`);
});

function appendTodoItem(todoItem) {
  const $li = document.createElement(`li`);
  const $span = document.createElement(`span`);
  const $i = document.createElement(`i`);
  $i.classList.add(`fas`, `fa-trash`);
  $span.classList.add(`icon`);
  $span.appendChild($i);
  $span.addEventListener(`click`, deleteTask);
  $li.textContent = todoItem.value;
  $li.dataset.id = todoItem.id;
  $li.appendChild($span);
  $todoList.appendChild($li);
}

function deleteTask(e) {
  const $li = e.currentTarget.parentNode;
  const deleteId = parseInt($li.dataset.id);
  // const deleteIndex = todoList.findIndex(function (item) {
  //   if (item.id === deleteId) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  //위에 구문을 화살표 함수로 표기한식
  const deleteIndex = todoList.findIndex((item) => item.id === deleteId);
  todoList.splice(deleteIndex, 1);
  localStorage.setItem(`todoList`, JSON.stringify(todoList));
  $li.remove();
  updateTodoCount();
}
// 전체삭제 버튼 비활성화
const $itemList = $todoList.querySelectorAll(`li`);
if ($itemList.length === 0) {
  $clearAll.classList.remove(`active`);
}

$clearAll.addEventListener(`click`, function () {
  $todoList.innerHTML = ``;
  $todoCount.textContent = 0;
  todoList = [];
  localStorage.removeItem(`todoList`);
});

function updateTodoCount() {
  $todoCount.textContent = todoList.length;
}

function showTask() {
  const todoItems = localStorage.getItem(`todoList`);
  if (todoItems) {
    todoList = JSON.parse(todoItems);
    for (let todoItem of todoList) {
      appendTodoItem(todoItem);
    }
    $clearAll.classList.add(`active`);
  }
  updateTodoCount();
}
showTask();
