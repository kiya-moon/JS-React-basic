// async & await
// clear style of using promise :)
// promise chaining이 늘어날 경우 복잡할 수 있는데,
// 그 위에 async/await api를 이용하면 동기식 작성법처럼 간단하게 작성할 수 있다.

const { reject } = require("async");

// 1. async
// 만약에 아래와 같은 코딩 아래 브라우저를 띄우는 로직이 짜여져 있다면,
// 사용자는 10초 동안 빈페이지만 보고 있게 된다.
function fetchUser(){
    // do network request in 10 secs...
    return 'ellie';
}
const user = fetchUser();
console.log(user);

// Promise 이용
function fetchUser(){
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        resolve('ellie');   
        // resolve 없이 return 시에는 console에 찍었을 때 pending으로 나타난다.(state: pending, result: undefined)
        // resolve를 적어주면, state: fulfilled, result: ellie
    });
}
user = fetchUser();
user.then(console.log);
console.log(user);

// async를 적용하면 조금 더 간단하게 작성할 수 있다.
async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'ellie';
}
  
user = fetchUser();
user.then(console.log);
console.log(user);
  
// 2. await ✨
// async가 붙은 함수 안에서만 사용 가능
function delay(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function getApple() {
   await delay(2000);
   return '🍎';
}
  
async function getBanana() {
   await delay(1000);
   return '🍌';
}
// 동일한 getBanana() 함수지만 promise를 사용하는 함수로 만들면,
function getBanana() {
    return delay(3000)
    .then(()=> '🍌');
}

// 사과와 바나나를 모두 가져오는 함수를 promise로 만든다면?
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
} 
pickFruits().then(console.log);
// 중첩된 promise chaining은 콜백지옥과 다를바가 없음
  
// 이 때 async와 await을 이용하여 동기식 작성법으로 작성 가능!
async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 다만 1초 기다려서 애플을 가져온 뒤 다시 1초를 기다려서 바나나를 가져오는 과정은,
// 두 과정이 서로 연관이 없는 과정이기 때문에 비효율적이다.

async function pickFruits() {
    const applePromise = getApple();    // Promise는 만드는 순간 실행됨
    const bananaPromise = getBanana();  // 따라서 Promise를 먼저 만들고
    const apple = await applePromise;   // < 이와 같이 작성함으로써
    const banana = await bananaPromise; // 병렬 실행이 가능해짐
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
  
// 3. useful APIs ✨
// Promise의 all() API
// Promise에 배열을 전달하게 되면 모든 Promise들이 병렬적으로 다 받을 때까지 모아준다
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);
  
// Promise의 race() API
// Promise에 배열을 전달하면, 그 중 가장 빨리 값을 전달하는 Promise 값만 전달 
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}  
pickOnlyOne().then(console.log);