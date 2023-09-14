'use strict';

// Array🎉
// 자바의 경우 같은 타입만 하나의 배열에 담을 수 있지만(ex. String Array)
// JavaScritp는 dynamically typed language이기 때문에 혼종배열 가능ㅇㅇ
// 하지만 이런 식의 코딩은 X

// 1. Declaration: 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막 배열에 접근할 때
console.clear();

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
// 앞에서부터 데이터 넣는 방법
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
// 앞에서부터 데이터 빼는 방법
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push > 배열의 특징 때문

// splice: remove an item by index position
// splice(시작 index num, 몇 개 지울 지 num)
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);    // ['🍎', '🍌','🍓', '🍑', '🍋']

fruits.splice(1);
console.log(fruits);    // ['🍎']

fruits.push('🍌', '🍓', '🍑', '🍋');
fruits.splice(1, 1);       
console.log(fruits);    // ['🍎', '🍓', '🍑', '🍋']

fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);    // ['🍎', '🍏', '🍉', '🍑', '🍋']

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['🍎', '🍏', '🍉', '🍑', '🍋', '🍐', '🥥']

// 5. Searching
// indexOf: find the index
// 배열 안에 해당하는 값이 있을 경우 해당 index 출력
// 값이 없다면 -1 출력
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

// includes
// True or False
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));