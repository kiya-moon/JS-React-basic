// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);   // 문자열 + 숫자는 문자열로 인식 > 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// template literals의 좋은 > 아래 처럼 개행을 해도 그대로 출력해준다.
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}`);
// template literals를 사용하지 않을 때는 \n\t 같은 이스케이프 시퀀스를 사용해야 함
console.log("ellie's \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
// 값을 먼저 1 증가시키고 preIncrement에 할당
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
// 값을 먼저 postIncrement에 할당하고 1증가
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
// 값을 먼저 1 감소 시키고 preDecrement에 할당
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
// 값을 먼저 postDecrement에 할당하고 1 감소
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// ★6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// true를 찾으면 더 이상 찾지 않는다
console.log(`or: ${value1 || value2 || check()}`);  // 연산이 필요한 함수 같은 것은 맨 마지막에 배치한다

// && (and), finds the first falsy value
// false를 찾으면 더 이상 찾지 않는다.
console.log(`and: ${value1 && value2 && check()}`);

// &&는 null 체크할 때도 많이 쓰인다.
// often used to compress long if-statement
// nullableObject && nullableObject.something(↓)
if (nullableObject != null){nullableobject.something;}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // ture
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
// 웬만하면 strict equality를 사용한다.
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // 메모리에 담긴 레퍼런스가 다르기 때문에 false
console.log(ellie1 === ellie2); // 위와동일 false
console.log(ellie1 === ellie3); // ellie3에 ellie1의 레퍼런스를 할당했으므로 true

// equality - puzzler
console.log(0 == false);  // true
console.log(0 === false); // false boolean type이 아니기 때문에
console.log('' == false); // true
console.log('' === false);  // false boolean type이 아니기 때문에
console.log(null == undefined); // ture
console.log(null === undefined);  // false
// loose equality는 값이 같은 지를 신경쓰고
// strict equality는 타입이 같은 지를 신경쓰면 될 것 같음

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
// cpu에 좋지 않아 되도록 피하는 게 좋음
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}