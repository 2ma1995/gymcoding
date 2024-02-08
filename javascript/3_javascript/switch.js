`use strict`;
// let subject = `cssadss`;
// switch (subject) {
//   case `javascript`:
//     console.log(`javascript 안녕`);
//     let result = 1 + 2;
//     console.log(`result: `, result);
//     break;
//   case `html`:
//     console.log(`html 안녕`);
//     break;
//   case `css`:
//     console.log(`css 안녕`);
//     break;
//   default:
//     console.log(`default수행문입니다.`);
// }
// console.log(`switch문 종료`);
let score = prompt(`수학점수를 입력해주세요!`);
let value = Math.floor(score / 10);
console.log(score);
switch (value) {
  case 10:
  case 9:
    console.log(`A학점입니다.`);
    break;
  case 8:
  case 7:
    console.log(`B학점입니다.`);
    break;

  case 6:
  case 5:
    console.log(`C학점입니다.`);
    break;

  default:
    console.log(`D학점입니다.`);
    break;
}
