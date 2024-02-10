`use strict`;

//함수 선언식
// function sayHello() {
//   console.log(`이름과 나이를 출력해주세여`);
//   console.log(`이름: 홍길동, 나이: 25살`);
// }
const sayHello = function (name, age) {
  console.log(`이름과 나이를 출력해주세여`);
  console.log(`이름: ${name}, 나이: ${age}`);
};
sayHello(`rla`, 25);
sayHello(`rjdd`, 47);

function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(5, 3);
console.log(result);

// //콜백함수
// let fruits = [`사과`, `바나나`, `딸기`];
// fruits.forEach(function (item, index) {
//   console.log(`item: `, item);
// });
//기본적인 콜백함수 정의
//---------------------
//다른 방법
// let fruits = [`사과`, `바나나`, `딸기`];
// fruits.forEach(printItem);
//아래처럼 다른곳에 선언을 해주고, 불러올수도 있음
function printItem(item, index) {
  console.log(`item: `, item);
}
//위에있는 구문을 애로우펑션으로
let fruits = [`사과`, `바나나`, `딸기`];
fruits.forEach((item, index) => {
  console.log(`item: `, item);
});
