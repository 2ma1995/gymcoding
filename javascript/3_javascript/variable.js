// 변수
// let teacher = `짐코딩`;
// console.log(teacher);
// teacher = `홍길동`;
// console.log(teacher);

// 상수
// const username = `짐코딩`;
// console.log(username);
// username = `kim`
//상수는 한번선언하면 변형이 불가능

// 스코프
{
  let a = `변수`;
  console.log(`a:`, a);
  {
    let c = `c변수`;
    console.log(`c:`, c);
  }
  console.log(`c:`, c);
}
console.log(`a:`, a);
