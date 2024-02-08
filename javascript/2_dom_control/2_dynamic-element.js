let addBtn = document.getElementById(`button`);
let addBeforeBtn = document.getElementById(`before`);
let inputBox = document.querySelector(`input`);
let removeTargetBtn = document.querySelector(`#target-remove`);
let removeBtn = document.querySelector(`.remove-btn`);
console.log(inputBox.value);

addBtn.addEventListener(`click`, function () {
  let li = document.createElement(`li`);
  let ul = document.querySelector(`ul`);
  li.textContent = inputBox.value;
  //추가버튼
  let button = document.createElement(`button`);
  button.textContent = `X`;
  // button.setAttribute(`class`, `remove-btn`);
  button.classList.add(`remove-btn`);
  button.addEventListener(`click`, removeParenNode);
  li.appendChild(button);
  ul.appendChild(li);
});
//앞에추가버튼
addBeforeBtn.addEventListener(`click`, function () {
  let li = document.createElement("li");
  let ul = document.querySelector(`ul`);
  let targetLi = document.querySelector(`li#target`);
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
});
///타킥박스
removeTargetBtn.addEventListener(`click`, function () {
  let targetLi = document.querySelector(`li#target`);
  targetLi.remove();
  inputBox.focus();
});

removeBtn.addEventListener(`click`, removeParenNode);

function removeParenNode(event) {
  event.target.parentNode.remove();
  inputBox.focus();
  inputBox.valuev = ``;
}
