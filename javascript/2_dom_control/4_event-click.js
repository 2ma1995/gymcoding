let btn1 = document.querySelector(`.btn1`);
let btn2 = document.querySelector(`.btn2`);

console.log(btn1);
console.log(btn2);

btn1.onclick = function () {
  alert(`hello property`);
};

btn2.addEventListener(`click`, helloEvent1);

function helloEvent1() {
  alert(`hello addevent1`);
}
btn2.addEventListener(`click`, function () {
  alert(`hello addevent2`);
});

btn2.removeEventListener(`click`, helloEvent1);
