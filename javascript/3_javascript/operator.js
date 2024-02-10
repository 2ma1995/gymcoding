//연산자
//문자열 병합
// console.log(`Hello ` + `world!`);
// console.log(`3` + 3); // number -> string
// console.log(typeof (`3` + 3)); //number -> string
// console.log(`3` + 5 + 8); //문자열이 된다 `3`+5 는 `3`이 문자열이기 때문에 다음 상수도 문자열로바뀐다 그래서 결과가 358
// console.log(3 + 5 + `8`); //결과가 88임 3 + 5 -> 8 + `8`

// console.log(`-------------------------`);
// let x = 10;
// let y = 20;
// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);
// console.log(9 % 2);

// let number = prompt(`숫자를 입력해주세요`);
// if (number % 2 === 1) {
//   alert(`홀수입니다`);
// } else {
//   alert(`짝수입니다`);
// }

//증감연산자
// let result = ++x + y;
// console.log(`x: `, x);
// console.log(`y: `, y);
// console.log(`result: `, result);

// let a = 20;
// let b = 10;
//비교연산자
// console.log(a > b);

//할당연산자
// let x = 10;
// let y = 20;
// x = x + y;
// x += y;
// console.log(x);
// 1부터 10까지 더하는
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
// sum = sum + i;
//   sum += i;
//   console.log(`${i} 번째 sum=${sum}`);
// }

// 논리연산자
//and &&, or ||, not ! 연산자
// let x = false;
// let y = true;
// console.log(x && y); //&&연산자는 모두 true일때, true 그외 false
// console.log(x || y); //||연산자는 둘중 하나라도 true일때, true, 나머지는 false
// console.log(!x);

let btn = document.querySelector(`#btn`);
let emailEl = document.querySelector(`[name=email]`);
let passwordEl = document.querySelector(`[name=password]`);
btn.addEventListener(`click`, function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  // console.log(`email: `, email === ``);
  // console.log(`email: `, email);
  console.log(`password: `, !password);
  // password의 값은 `` 빈값임으로, ``은 => false 의 반대는 true
  if (email === `` || email.includes(`@`) === false) {
    console.log(`email이 유효하지 않습니다.`);
  } else if (!password) {
    console.log(`비밀번호를 입력해주세요.`);
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    `비밀번호는 8-16자 이내여야 합니다.`;
  } else {
    console.log(`로그인 성공 `);
  }
});

function validateEmail(email) {
  // ......
  // 5분이 걸린다
  return true;
}
let number = 10;
let message = number % 2 === 1 ? `홀수 입니다` : `찍수 입니다`;

// if (number % 2 === 1) {
//   message = `홀수 입니다`;
// } else {
//   message = `짝수 입니다`;
// }
console.log(message);
