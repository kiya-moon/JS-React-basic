'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

const name = 'ellie';
const age = 4;
print(name, age);
function pring(name, age) {
    console.log(name);
    console.log(age);
}
// primitive type은 변수 하나 당 하나의 값만 담을 수 있음
// 때문에 변수가 많아질 경우 출력 시, 혹은 함수를 사용할 때도 전달해야하는 파라미터가 많아지게 되어 관리가 힘들어짐 > 그래서 object 사용

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// object = { key : value }; > object는 key와 value의 집합체
const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties : 계산된 properties란 뜻
// key should be always string★
console.log(ellie.name);
console.log(ellie['name']);
console.log(ellie[name]);   // undefined
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 내가 출력할 것을 정확히 알고 있다면, 그리고 보통 코딩할 때는 '.'을 사용
// 실시간으로 원하는 키의 값을 받아올 때, 사용자가 어떤 것을 입력할 지 모를 때 Computed properties 사용
function printValue(obj, key) {
    // console.log(obj, key); > undefined
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// object를 필요할 때 일일이 만들경우, 불필요하게 key와 value를 반복하게 된다.
//const person4 = makePerson('elile', 30);
const person4 = new Person('elile', 30);    // Constructer Function 호출 시
console.log(person4);
// 이 때 값만 전달하면 object를 만들어주는 함수를 작성하면 간편하게 만들 수 있음
// function makePerson(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// 다른 계산을 하지 않고 순수하게 object만 만들어주는 함수들은 대문자로 시작하도록 만듦
// return을 생략
// > 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// key가 있는 지 없는 지 확인하는 방법
console.log('name' in ellie);   // true
console.log('age' in ellie);    // true 
console.log('random' in ellie); // 정의하지 않았으므로 false
console.log(ellie.random);      // 정의하지 않은 키에 접근 시 undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user; // user2에 user 레퍼런스 할당
user2.name = 'corder';
console.log(user);  // {name: "coder", age: "20"}

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object.assign() 
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);    // 동일한 property가 있다면 후에 들어오는 값으로 덮어씌워진다.