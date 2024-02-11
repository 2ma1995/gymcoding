`use strict`;
// let person = {
//   fullname: `짐코딩`,
//   age: 20,
//   printThis: function () {
//     console.log(this);
//     console.log(this === person);
//     // console.log(this.fullname);
//     // console.log(this.age);
//   },
// };
// // person.printThis();

// let printThis = person.printThis;
// printThis();

// function printThis() {
//   console.log(this);
// }
// printThis();

// let person1 = {
//   name: `홍길동`,
//   printThis: printThis,
// };
// person1.printThis();
// let person2 = {
//   name: `홍길동2`,
//   printThis: printThis,
// };
// person2.printThis();
// let person3 = {
//   name: `홍길동3`,
//   printThis: printThis,
// };
// person3.printThis();

let btn = document.querySelector(`button`);
btn.addEventListener(`click`, function () {
  console.log(this);
});

// ES5 bind - this 설정 #bind 는 한번ㅁ나 사용이 가능함
// function printThis() {
//   console.log(this); //default this -> window임
// }
// let person1 = {
//   name: `honghong`,
// };
// let printThis1 = printThis.bind(person1);
// printThis1();

let person = {
  name: `gym_man`,
  age: 25,
  hello: function () {
    setTimeout(() => {
      console.log(this.name);
      console.log(this.age);
    }, 2000);
  },
};
person.hello();
