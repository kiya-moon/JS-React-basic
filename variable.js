// 1. Use strict
// added in ES 5
// use this for Valina Javasctip.
'use strict';

// 2. Variable, rw(read and write)
// let (added in ES6) > 변수 선언 시 사용 > mutable data type
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

// var > 이전에 사용하던 변수 선언 방법(더 이상 사용하지 않는다)
// 변경 가능한 변수 선언을 하고 싶다면 var가 아닌 let을 사용!
// var hoisting : 어디에 변수를 선언하든 가장 상위로 끌어올려주는 것
// var는 block scope가 없음 > 어디서나 호출이 됨 
age = 4;
var age;

// 3. Constant, r(read only) > 선언 후에 데이터를 변경할 수 없음 > immutable data type
// 가능하다면 const를 쓸 것!
const daysinWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : primitive types, frozen objects(i.e. object.freeze())
// Mutable data types: all objects by default are mutale in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive type > 더 이상 나눠질 수 없는 작은 단위 ex. single item : string, boolean, null, undefind, symbol > 값 자체가 메모리에 저장됨
// object type > single item을 묶어서 한 박스 단위로 관리할 수 있게 해줌 > box container > 오브젝트를 가리키는 레퍼런스가 메모리에 저장됨 > ex. ellie.name = ellie, ellie.age = 20
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
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);    // ${greeting} : greeting 변수의 값, ${typeof greeting} : greeting 변수의 타입
const helloBob = `hi ${brendan}!`; // template literals(string) : `문자 ${변수}`;의 형식    > hi brendan! 출력됨    > `` 안에 입력된 문자가 그대로 다 출력되어 편함!
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;   // true
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`); 
console.log(`value: ${test}, type: ${typeof test}`); 

// null > 너는 empty야!
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined > 선언은 했지만 값을 할당할지 할당하지 않을 지 명확하지 않은 상태
let x;  // let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects : 고유한 식별자를 만들 때 사용되어지는 오브젝트
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false
// 똑같은 symbol 만들 때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`);  > error 발생
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  // symbol을 찍어볼 때는 .description을 이용해야 함

// 5. Dynamic typing : dynamically typed language
// js는 선언할 때 타입이 정해져 있지 않고 런타임 중에 할당된 값에 따라서 타입이 변경될 수 있음 
// 내가 좋은 아이디어가 있어 프로토타입을 짤 때 유연하게 짤 수 있다.
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);    // string
console.log(text.charAt(0));    // h
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);    // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);    // 문자열에 더하기가 있기 때문에 뒤에도 문자열로 인식 > 75 (string)
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);    // 문자열과 문자열이 있지만 /(나누기) 연산자를 사용했고, '' 안에 숫자가 있기 때문에 연산 진행 > 4 (number)
console.log(text.charAt(0));    // 누군가 text의 타입을 변경한 것을 모르고 다시 charAt(0) 함수를 사용하면 에러가 발생
// 그런 타입 오류 때문에 나온 것이 TypeScript
// 하지만 브라우저가 이용할 수 있는 js로 변환시켜주어야 한다.

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20}; // const로 선언 시 ellie에 할당된 값은 변경할 수 없지만
ellie.age = 21; // ellie.age 이런 식으로 값을 변경해주는 것은 가능하다

