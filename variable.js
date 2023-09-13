// 1. Use strict
// added in ES 5
// use this for Valina Javasctip.
'use strict';

// 2. Variable
// let (added in ES6)   > 변수 선언 시 사용 > mutable data type
// 대부분의 문법은 ES6를 따름
let globalName = 'global name';
{   // block scope > 블럭 밖에서는 name에 접근할 수 없다
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);  // > 출력되지 않음
console.log(globalName);    // > 출력됨

// var  > 이전에 사용하던 변수 선언 방법(더 이상 사용하지 않는다)
// var hoisting : 어디에 변수를 선언하든 가장 상위로 끌어올려주는 것
// var는 block scope가 없음 > 어디서나 호출이 됨 
age = 4;
var age;

// 3. Constants > 선언 후에 데이터를 변경할 수 없음 > immutable data type
// 사용 이유
// - security
// - thread safety
// - reduce human mistakes
const daysinWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive type > 더 이상 나눠질 수 없는 작은 단위 > single item : string, boolean, null, undefind, symbol
// object type > single item을 묶어서 한 박스 단위로 관리할 수 있게 해줌 >  box container  
// function > 자바스크립트에서는 function도 데이터타입 단위 중 하나 > first-class function이 지원된다 > function도 변수 선언이 가능하다 > 함수의 파라미터 인자로 전달 가능 > return type으로도 전달 가능

// data types for number in javasctip > 정수, 소수 등 값에 상관없이 number
let a = 12;
let b = 12.1;

const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -intinity, Nan
const infinity = 1/0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);  // Infinity
console.log(negativeInfinity);  // -Infinity
console.log(nAn);   // NaN
 
// bigInt가 최근에 추가되었으나 지원되는 브라우저가 많지 않고(크롬과 사파리에서만 지원됨),
// 그렇게까지 큰 수를 쓸 일이 없음

// string
