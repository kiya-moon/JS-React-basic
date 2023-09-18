'user strict';

// 함수 선언
function doSomething() {
    console.log('hello');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething();

const result = add(1, 2);
console.log(result);


// 함수 선언
function doSomething(add) {
    console.log(add);   // add() 함수 그 자체의 로직이 console 창에 출력됨
    const result = add(2, 3);
    console.log(result);    // 5
}

// 함수 호출
doSomething(add);   // 함수를 전달할 때는 함수의 이름만 전달. () 사용 x

const addFun = add;
console.log(addFun);   // 함수 자체를 전달했기 때문에 add() 함수 로직이 console 창에 출력됨

console.log(addFun(1,2));   // 3

// ----------------------------------------------------

// primitive type일 때 변수 선언
let a = 1;
let b = a;  // a의 값 1이 복사되어 b의 메모리에 담긴다.

console.log(a); // 1
console.log(b); // 1

b = 2;

console.log(a); // 1
console.log(b); // 2
// a의 값을 복사했지만 서로 다른 값이기 때문에
// b의 값은 바뀌지만 a에는 영향을 주지 않는다.

// const로 선언 시에는 값 변경이 불가능


// object일 때 변수 선언
let obj = {
    name: 'ellie',
    age: test,
};

let obj2 = obj; // obj의 레퍼런스(주소값)가 obj2 메모리에 담긴다.

console.log(obj.name);  // 'ellie'
console.log(obj2.name); // 'ellie'

obj2.name = 'james';

console.log(obj.name);  // 'james'
console.log(obj2.name); // 'james'
// 별개의 값이 아닌 동일한 주소를 가리키고 있기 때문에,
// obj2에서 name을 바꾸면 obj도 바뀐 name을 출력한다. 

// const로 선언할 경우,
// const로 선언된 메모리 공간에 할당된 reference는 변경할 수 없지만,
// referece가 가리키는 name, age 등은 변경이 가능하다

// ----------------------------------------------------

function add(num1, num2){
    return num1 + num2;
}

const doSomething = add;    // doSomething이라는 변수에 add 함수를 가리키는 ref가 저장된다.

const resultSomething = doSomething(2, 3);
console.log(resultSomething);   // 5

const resultSomething2 = add(2, 3);
console.log(resultSomething2);  // 5

// 함수가 받는 인자는 의미있는 이름을 사용한다.

// 재밌는 거~(?)
function surprise(operator) {
    // const result = operator();  
    // operator() === add() > 때문에 num1, num2에 해당하는 인자를 넘겨주어야 한다.
    const result = operator(2, 3);  // 5
    console.log(result);
}

surprise(add);  // add 함수를 surprise에 전달

// 재밌는 거~(?)2
function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(2, 3);  // 0.66666666666... 
    console.log(result);
}

surprise(divide);