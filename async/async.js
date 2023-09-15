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


async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
  
// 3. useful APIs ✨
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);
  
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}  
pickOnlyOne().then(console.log);