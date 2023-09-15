'use strict';

// Promise is a JavaScript object for asynchronous operation
// State: pending(promise가 만들어져 우리가 지정한 operation을 수행중일 때) -> fulfilled(operation을 성공적으로 끝냈을 때) or rejected(문제가 생겼을 때)
// Producer(우리가 원하는 기능을 만들어내는 object) vs Consumer(우리가 만든 데이터를 소모하는 object)

// 1. Producer
// Promise는 class라서 new 키워드를 이용해 object 생성
// Promise의 생성자 확인 시 executor라는 콜백함수를 전달해 주어야 하는데, excutor는 두 가지 콜백함수를 받을 수 있음(resolve, reject)
// resolve : 기능을 정상적으로 수행해서 마지막에 데이터를 최종 전달하는 역할
// reject : 기능을 수행하다가 문제가 생기면 호출하게 됨
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});
// promise를 만드는 순간 우리가 전달한 executer 콜백함수가 실행된다.
// 즉, 만약 promise{} 안에 네트워크 통신을 하는 코드를 작성했다면
// promise가 만들어지는 그 순간 네트워크 통신을 실행하게 된다. 
// 만약 네트워크 통신을 사용자가 요청했을 때만 해야하는 경우라면,
// 사용자가 요청하지도 않았는데 불필요한 네트워크 통신이 일어날 수 있음
// 간과하지 말 것!
// when new Promise is created, the executor runs automatically★

// 2. Consumers: then, catch, finally
promise //
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch(error => {
    return '달걀'
  })  // getEgg에서 에러가 발생하여도 '달걀'을 cook으로 넘겨준다 
  .then(cook)
  .then(console.log)
  .catch(console.log);
  