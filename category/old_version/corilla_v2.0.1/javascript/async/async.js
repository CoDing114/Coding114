'use strict';

// async & await
// clear style of using promise :)

// 1. async 사용 하여 바로 Promise로 만들수잇다
async function fetchUser(){
    return 'huke'
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(200);
    return '🍎';
}

async function getBanana(){
    await delay(100);
    return '🍌';
}

async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
// function pickFruits(){
//     return getApple().then(apple =>{
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()]).then(fruits =>
        fruits.join('+'))
};
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);