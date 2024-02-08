`use strict`;

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// let fruits = [`apple`, `pear`, `banana`, `grape`, `strewberry`];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
let person = {
  name: `kim`,
  age: 24,
  job: `developer`,
};
// let key = prompt(`어떤값을 출력할까요? 키를 입력해주세요`);
// console.log(person[key]);
let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
  let key = keys[i];
  console.log(person[key]);
}
console.log(`------------`);
for (let key in person) {
  console.log(person[key]);
}
console.log(`------------`);
let fruits = [`apple`, `pear`, `banana`, `grape`, `strewberry`];
for (let fruit of fruits) console.log(fruit);
