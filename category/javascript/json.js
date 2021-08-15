// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
console.log('1. Object to JSON')
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

// 
const rabbit = {
    name:'miki',
    color:'white',
    size:null,
    birthDate: new Date(),
    jump:() => {
        console.log(`${name} can jump!`);
    },
};
// Object to JSON
json = JSON.stringify(rabbit);
console.log(json);
// 원하는 데이터만 json으로 바꾼다
json = JSON.stringify(rabbit, ['name','color','size']);
console.log(json);
// 세밀하고 싶을때 콜백함수를 이용할수잇다
json = JSON.stringify(rabbit,(key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'huke' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.log('2. JSON to Object')
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());