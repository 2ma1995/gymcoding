// `use strict`;

// // 1]배열생성
// const fruits = ["사과", "바나나", "딸기", "파인애플"];
// // const fruits = new Array(`apple`, `banana`, `strayberry`);
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// fruits[2] = `포도`;
// console.log(fruits[2]);

// // 2] 자주 사용하는 배열 API
// // length 값의 길이
// console.log(`fruits.length :`, fruits.length);
// console.log(`마지막 값 :`, fruits[fruits.length - 1]);
// //push() 값을 추가
// fruits.push(`귤`);
// console.log(`fruits :`, fruits);
// // forEach() 순차적으로 값출력
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });
// // pop() 제거
// // fruits.pop();
// // let removedItem = fruits.pop();
// // console.log(`removedItem: `, removedItem);
// // console.log(`remove complete: `, fruits);

// // shift() 할당된값을 앞에서 부터 제거
// // fruits.shift();
// // console.log(fruits);
// // unshift() 앞에서부터 값을추가
// fruits.unshift(`수박`);
// console.log(fruits);

// // indexOf() 원하는 인덱스를 가져오는방법
// const index = fruits.indexOf(`파인애플`);
// console.log(`index: `, index);
// // 없는 값을 출력시 -1로 출력이됨
// // const index = fruits.indexOf(`토마토`);
// // console.log(`index: `, index);

// // splice() 특정 순서에있는 값을 삭제하는방법
// // fruits.splice(1, 1);
// // 첫번째순서는 제거하고싶은 대상,두번째는 원하는 곳까지
// // fruits.splice(1, 1);
// // console.log(fruits);
// const findIndex = fruits.indexOf(`파인애플`);
// console.log(`findIndex: `, findIndex);
// fruits.splice(findIndex, 1);
// console.log(fruits);

// // 3]구조 분해 할당
// let fruits = [`사과`, `바나나`, `딸기`];
// // let apple = fruits[0];
// // let banana = fruits[1];
// // let strawberry = fruits[2];

// let [apple, banana, strawberry, ...others] = [
//   `사과`,
//   `바나나`,
//   `딸기`,
//   `a`,
//   `b`,
//   `c`,
//   `d`,
//   `e`,
//   `f`,
//   `g`,
// ];
// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log(others);

//4] 전개구문
// let fruits1 = [`사과`, `바나나`, `딸기`];
// let fruits2 = [`파인애플`, `수박`, `귤`];
// let items = [...fruits1, ...fruits2];
// console.log(items);

// 5] Rest parameter
//  Rest parameter
print(`a`, `b`, `c`, `d`, `e`, `f`);
function print(...values) {
  values.forEach(function (value, index) {
    console.log(`index:`, index, `value:`, value);
  });
}
// // 얕은복사 (shallow copy)
// let source = [`사과`, `바나나`, `딸기`];
// let target = source;
// target[0] = `파인애플`;
// console.log(`source:`, source);
// console.log(`target:`, target);

// 깊은복사 (deep copy)
let source = [`사과`, `바나나`, `딸기`];
let target = [...source];
target[0] = `파인애플`;
console.log(`source:`, source);
console.log(`target:`, target);
