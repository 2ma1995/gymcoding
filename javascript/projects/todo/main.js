/**
 * 1]추가하기
 * 2]삭제학기
 * 3]전체삭제
 * 3]리스트보여주기
 */

const $inputBox = document.querySelector(`#input-box`);
const $addBtn = document.querySelector(`#add-btn`);
const $todoList = document.querySelector(`#todo-list`);
const $todoCount = document.querySelector(`#todo-count`);
const $clearAll = document.querySelector(`#clear-all`);
$inputBox.addEventListener(`keyup`, function (e) {
  console.log(`e.target.value: `, e.target.value);
  if (e.target.value) {
    $addBtn.classList.add(`active`);
  } else {
    $addBtn.classList.remove(`active`);
  }
});
$addBtn.addEventListener(`click`, function () {
  const $li = document.createElement(`li`);
  const $span = document.createElement(`span`);
  const $i = document.createElement(`i`);
  $i.classList.add(`fas`, `fa-trash`);
  $span.classList.add(`icon`);
  $span.appendChild($i);
  $span.addEventListener(`click`, deleteTask);
  $li.textContent = $inputBox.value;
  $li.appendChild($span);
  $todoList.appendChild($li);
  //카운트변경
  const $itemList = $todoList.querySelectorAll(`li`);
  $todoCount.textContent = $itemList.length;
  //  input box clear
  $inputBox.value = ``;
  // 전체삭제 버튼 활성화
  $clearAll.classList.add(`active`);
});

function deleteTask(e) {
  e.currentTarget.parentNode.remove();
  let value = $todoCount.textContent;
  let count = parseInt(value);
  count--;
  $todoCount.textContent = count;
}
// 전체삭제 버튼 비활성화
const $itemList = $todoList.querySelectorAll(`li`);
if ($itemList.length === 0) {
  $clearAll.classList.remove(`active`);
}

$clearAll.addEventListener(`click`, function () {
  $todoList.innerHTML = ``;
  $todoCount.textContent = 0;
});
