'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration > 변수와 함수의 선언을 맨 위에서 실행하는 것
console.log('1');   // 동기
setTimeout(() => console.log('2'), 1000);   // 브라우저에 요청 > 비동기
console.log('3');   // 동기
// 1 , 3 , 2

// 1. Synchronous callback : 즉각적으로, 동기적으로 실행되는 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));   // 동기

// Asynchronous callback : 나중에, 언제 실행될 지 모르는 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);  // 비동기

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);