//Objects
// one of the Javascripts data types
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of object
// object = { key : value };

// 1. Literals and properties
console.log('1. Literals and properties')
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const huke = { name: 'huke', age: 4};
print(huke)

huke.hasJob = true;
console.log(huke.hasJob);

delete huke.hasJob;
console.log(huke.hasJob);

// 2. Computed properties
// key should be always string
console.log('2. Computed properties')
console.log(huke.name);
console.log(huke['name']);
huke['hasJob'] = true;
console.log(huke.hasJob);

function printValue(obj,key){
    console.log(obj,[key]);
}
printValue(huke,'name');
printValue(huke,'age');

// 3.Property value shorthand
console.log('3.Property value shorthand')
const person1 = {name:'bob', age:2};
const person2 = {name:'steve', age:3};
const person3 = {name:'dave', age:4};
const person4 = new Person('huke', 30);
console.log(person4);

// 4.Constructor Function
function Person(name,age){
    this.name = name;
    this.age = age;
}

// 5.in operator: property existence check (key in obj)
//해당 key가 object안에 잇는지 확인한다
console.log('5.in operator: property existence check (key in obj)')
console.log('name' in huke);
console.log('age' in huke);
console.log('random' in huke);
console.log(huke.random);

// 6.for .. in vs for .. of
// for (key in obj)
//모든 key들을 받아와서 처리하고 싶을때 사용
console.log('6.for .. in vs for .. of')
// console.clear();
for (key in huke){
    console.log(key);
}

// for (value of iterable)
// 배열에 들어 잇는 값을 순차적으로 출력하거나 계산할수잇다
const array = [1,2,4,5];
for (value of array){
    console.log(value);
}

//old way
// const array = [1,2,4,5];
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }


// 7. Fun cloning
// object 복사
//object.assign(dest,[obj1,obj2,boj3...])
const user1 = {name:'huke',age:'20'};
const user2 = user1;
// console.log(user1);
user2.name = 'coder';
console.log(user2);

//old way
const user3 = {};
for (key in user1){
    user3[key] = user1[key];
}
console.log(user3);
user3.name = 'miki';
console.log(user3);

// object.assign
const user4 = {};
Object.assign(user4,user1)
user4.name = 'Job';
console.log(user4);

const user5 = Object.assign({},user4);
console.log(user5);

