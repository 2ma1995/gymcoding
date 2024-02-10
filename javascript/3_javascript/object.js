`use strict`;

//객체 리터럴 문법
// const person = {
//   name: `짐코딩`,
//   age: 25,
// };
//객체 생성자 문법
// const person = new Object();
// person.name = `gymcode`;
// person.age = 30;
// console.log(person);

//----------------------
// const person = {
//   name: [`Bob`, `Smith`],
//   age: 32,
//   gender: `male`,
//   interests: [`music`, `health`],
//   hello: function () {
//     alert(`Hello`);
//   },
//   greeting: function () {
//     alert(`hi`);
//   },
//   hobby: {
//     name: `programing`,
//     alert: function () {
//       this.alert(`prgraming`);
//     },
//   },
// };
// console.log(person.name[0])
// console.log(person.name[1])
// person.hello()
// console.log(person.hobby.name)
// console.log(person.hobby.alert())
// console.log(person[`name`][0]);
// console.log(person[`name`][1]);
// person[`hello`]();
// console.log(person[`hobby`][`name`]);
// person[`hobby`][`alert`]();
// delete person.name;
// delete person[`age`];
// console.log(person);

// function printPerson(person) {
//   console.log(
//     `제이름은 ${person.name}이며, 나이는${person.age}살 입니다. 그리고 취미는 ${person.hobby}입니다`
//   );
// }
// const person = {
//   name: `짐코딩`,
//   age: 10,
//   hobby: `coding`,
// };
// printPerson(person);

//구조분해할당
// const { hobby, name, age } = person;
// console.log(`name: `, name);
// console.log(`age: `, age);
// console.log(`hobby: `, hobby);

// const fruits = [`사과`, `포도`, `딸기`];
// const [a, b] = fruits;
// console.log(a);
// console.log(b);

//팩토리함수
function printPerson({ hobby, name, age }) {
  console.log(
    `제이름은 ${name}이며, 나이는${age}살 입니다. 그리고 취미는 ${hobby}입니다`
  );
}
function createPerson(name, age, hobby) {
  return {
    name: name,
    age: age,
    hobby: hobby,
    //es6문법은 변수명과 키값이 동일한경우 한번만 적어도 된다
    // ex)
    // name,
    // age,
    // hobby
  };
}
// //es5
// function Person(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }
// // es6
// class Person {
//   constructor(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
// }
// const person1 = createPerson(`sososo1`, 10, `anything`);
// const person2 = createPerson(`sososo2`, 10, `anything`);
// const person3 = createPerson(`sososo3`, 10, `anything`);
// const person4 = createPerson(`sososo4`, 10, `anything`);
// printPerson(person1);
// printPerson(person2);
// printPerson(person3);
// printPerson(person4);
