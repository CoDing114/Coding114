'use strict';

//JavaScript is synchronous
//Execute the code block by orger after hoisting
//hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'),1000);
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=> console.log('async callback'),2000);

// Callback example
class UserStorage{
    loginUser(id,password){
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                if(
                    (id === 'miki' && password ==='1234')||
                    (id === 'huke' && password === '1234')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            },200);
        });
        
    }

    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user === 'miki'){
                    resolve({name:'miki',role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name},you have a ${user.role}role`))
.catch(console.log);