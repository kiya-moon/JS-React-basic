// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing > 하나의 함수는 한 가지의 일만 하도록 작성
// naming: doSomething, command, verb > 함수 이름은 동사로
// e.g. createCardAndPoint -> createCard, createPoint
// function is object★ in JS
function printHello() {
    console.log('Hello');
  }
  printHello();
  
  function log(message) {
    console.log(message);
  }
  log('Hello@');
  log(1234);
  
  // 2. Parameters
  // primitive parameters: passed by value
  // object parameters: passed by reference
  function changeName(obj) {
    obj.name = 'coder';
  }
  const ellie = { name: 'ellie' };
  changeName(ellie);    // 함수에서 바뀐 name이 레퍼런스에 그대로 저장됨
  console.log(ellie);   // coder
  
  // 3. Default parameters (added in ES6)
  function showMessage(message, from) {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');   // from이 정의되어 있지 않아서 undefined로 출력됨

  function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');   // from = 'unknow'으로 정의되어 있어서 Hi! by unknown으로 출력됨
  
  // 4. Rest parameters (added in ES6)
  function printAll(...args) {  // ... === Rest parameters === 배열
    // 배열 출력 방법 1
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }

    // 배열 출력 방법 2
    for (const arg of args) {
      console.log(arg);
    }
  
    // 배열 출력 방법 3
    args.forEach((arg) => console.log(arg));
  }
  printAll('dream', 'coding', 'ellie');
  
  // 5. Local scope
  let globalMessage = 'global'; // global variable
  function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {   // 자식 함수는 부모 함수에 정의된 값에 접근 가능
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage); //error
  }
//   console.log(message); // error
  printMessage();
  
  // 6. Return a value
  function sum(a, b) {
    return a + b;   // 모든 함수는 return 값이 들어가고, 선언되지 않을 경우 return undefined;가 생략되어 있음
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) {
      if (user.point > 10) {
          // long upgrade logic...
        }
    }
    
    // good
    function upgradeUser(user) {
        if (user.point <= 10) {
            return;
        }
        // long upgrade logic...
    }
    
    // First-class function
    // functions are treated like any other variable
    // can be assigned as a value to variable
    // can be passed as an argument to other functions.
    // can be returned by another function
    // 값이 안맞을 경우 빨리 리턴하도록 작성하고, 값이 맞는 경우를 이후에 작성
  
  // 1. Function expression
  // a function declaration can be called earlier than it is defined. (hoisted)
  // a function expression is created when the execution reaches it.
  const print = function () {
    // anonymous function : 이름 없는 함수
    // const print = function print() : named function
    console.log('print');
  };
  print();
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));
  
  // 2. Callback function using function expression
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
  // anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces
  // recursions : 함수 안에서 함수 자신을 부르는 경우 > 무한 반복 > call stack이 꽉 차서 에러 발생
  const printNo = function print() {
    console.log('no!');
    // print();
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);
  
  // Arrow function
  // always anonymous

  // const simplePrint = function () {
  //   console.log('simplePrint!');
  // };
  const simplePrint = () => console.log('simplePrint!');

//   const add = function (a, b) {
//     return a + b;
//   }
  const add = (a, b) => a + b;

  const simpleMultiply = (a, b) => {
    // do something more
    // block 사용 시에는 return 키워드를 꼭 사용해서 값을 리턴해주어야 함!
    return a * b;
  };
  
  // IIFE: Immediately Invoked Function Expression
  // 최근에는 잘 쓰이진 않음
  (function hello() {
    console.log('IIFE');
  })();
  
  // Fun quiz time❤️
  // function calculate(command, a, b)
  // command: add, substract, divide, multiply, remainder
  
  function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unknown command');
    }
  }
  console.log(calculate('add', 2, 3));