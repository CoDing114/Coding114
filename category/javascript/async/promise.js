'use strict';

// Promise is a JavaScript object for Asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer 

// 1. Producer
// when new Promise is created, the executor runs automaticlly.
const promise = new Promise((resolve,reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=> {
        //resolve('HUKE');
        reject(new Error('no network'));
    },10);
});

// 2.Consumers: then, catch, finally
promise.then((value)=>{
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(()=>{
    console.log('finally');
})

// 3. Prommise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),50);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> resolve(num - 1),100);
    });
})
.then(num => console.log(num));

// 4.Error Handling - 오류 처리
const getHen = () =>
new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('🐓'),100);
});
const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(()=> reject(new Error(`error! ${hen} => 🥚`)),100);
});
const cook = egg =>
new Promise((resolve,reject) => {
    setTimeout(()=>resolve(`${egg} => 🥘`),100);
});

getHen() //
    .then(getEgg)
    .catch(error => {
        return '🥩';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
  // .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
