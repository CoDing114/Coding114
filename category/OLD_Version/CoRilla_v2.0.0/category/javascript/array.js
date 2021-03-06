'use strict';

// Array๐

// 1. Declaration - ๋ฐฐ์ด ์ ์ธ
console.log('1. Declaration - ๋ฐฐ์ด ์ ์ธ')
const arr1 = new Array(); // ์ฒซ๋ฒ์งธ ๋ฐฉ์
const arr2 = [1,2]; // ๋๋ฒ์งธ ๋ฐฉ์ - ํ์ฌ๊น์ง ํํ๊ฒ ์ฐ์ด๋ ๋ฐฉ์์ด๋ค.

// 2. Index position index๋ฅผ ํ์ฉํ ๋ฐฐ์ด ์ ๊ทผ
console.log('2. Index position - index๋ฅผ ํ์ฉํ ๋ฐฐ์ด ์ ๊ทผ')
const fruits = ['๐','๐ฅฉ'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); //๋งจ ๋ง์ง๋ง์ ์๋ ์์ดํ์ ์ฐพ์ ๋ "๋ฐฐ์ด.length - 1"  ๋ฐฐ์ด์์ -1์ ํ๋ฉด ๋งจ ๋ง์ง๋ง ์ธ๋ฑ์ค๋ฅผ ๋ฐ์์ฌ์ ์๊ธฐ ๋๋ฌธ์ด๋ค

// 3.Looping over an array - ๋ฐฐ์ด ์ถ๋ ฅ
// print all fruits
// a. for   ์ฒซ๋ฒ์งธ ๋ฐฉ์
console.log('3.Looping over an array - ๋ฐฐ์ด ์ถ๋ ฅ')
console.log('a. for ์ฒซ๋ฒ์งธ ๋ฐฉ์')
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of    ๋๋ฒ์งธ ๋ฐฉ์
console.log('b. for of  ๋๋ฒ์งธ ๋ฐฉ์')
for (let fruit_b of fruits){
    console.log(fruit_b);
}

// c. forEach ์ธ๋ฒ์งธ ๋ฐฉ์
console.log('c. forEach  ์ธ๋ฒ์งธ ๋ฐฉ์')
fruits.forEach((fruit_c) => console.log(fruit_c));

//๊ณ์ฐ์:
// fruits.forEach(function(fruit_c,index_c,array_c){
//     console.log(fruit_c,index_c,array_c);
// });


// 4.Addtion, deletion, copy    ๋ฐ์ดํฐ ์ฝ์
console.log('4. Addtion, deletion, copy ๋ฐ์ดํฐ ์ฝ์')
// push: add an item to the end
console.log('๋ฐ์ดํฐ ์ฝ์ push: add an item to the end')
fruits.push('๐','๐');
console.log(fruits);
// pop:remove an item from the end
console.log('๋ฐ์ดํฐ ์ญ์  pop:remove an item from the end')
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
console.log('์์ชฝ ๋ฐ์ดํฐ ์ฝ์ unshift: add an item to the benigging')
fruits.unshift('๐','๐ค');
console.log(fruits)
// shift: remove a n item from the benigging
console.log('์์ชฝ ๋ฐ์ดํฐ ์ญ์  shift: remove a n item from the benigging')
fruits.shift();
console.log(fruits)
// note!! shift, unshift are slower than pop, push

// splice: ๋ฐฐ์ด์ค ์ํ๋ ๊ตฌ๊ฐ ์ญ์ 
//remove an item by index position
console.log('๋ฐฐ์ด์ค ์ํ๋ ๊ตฌ๊ฐ ์ญ์  splice: remove an item by index position')
fruits.push('๐','๐ญ');
console.log(fruits);
console.log('splice ์ง์ ์์น ๋ฐ์ดํฐ ์ญ์ ')
fruits.splice(1,1);
console.log(fruits)
console.log('splice ์ง์ ์์น ๋ฐ์ดํฐ ๊ต์ฒด')
fruits.splice(1,1,'๐','๐ฆช');
console.log(fruits);

// combine two arrays
console.log('combine two arrays ๋ฐฐ์ด ๊ฒฐํฉ')
const fruits2 = ['๐ก','๐ญ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits)

// 5. Searching ๊ฒ์
console.log('๊ฒ์ Searching')
// indexOf: find the index
console.log('indexOf: find the index ๊ฐ์ด ์์ผ๋ฉด ์๋ฒ์ ์์ผ๋ฉด -1์ ๋ฐํ ํ๋ค')
console.log(fruits.indexOf('๐'))
console.log(fruits.indexOf('โ'))

// includes
console.log('includes ๊ฐ์ ์ ๋ฌด์ ๋ฐ๋ผ true/false')
console.log(fruits.includes('๐'))
console.log(fruits.includes('โ'))

// lastIndexOf
console.log('lastIndexOf ๋งจ ๋ง์ง๋ง์ ์๋ ๊ฐ์ ๋ฐํํด์ค๋ค.')
fruits.push('๐');
console.log(fruits);
console.log(fruits.lastIndexOf('๐'));

console.log('------------------------------------------------------------')

// array-api
// 1.join: array ๋ฐฐ์ด์ ๋ฌธ์ string์ผ๋ก ๋ณํ (๊ตฌ๋ถ๊ธฐํธ)
// make a string out of an array
{
console.log('1.join: array ๋ฐฐ์ด์ ๋ฌธ์ string์ผ๋ก ๋ณํ (๊ตฌ๋ถ๊ธฐํธ)')
const result = fruits.join(', and ');
console.log(result);
}

// 2 split: ๋ฌธ์ string์ array ๋ฐฐ์ด๋ก ๋ณํ ('๊ตฌ๋ถ๊ธฐํธ ํ์',์๋)
// make an array out of a string
{
console.log('2 split: ๋ฌธ์ string์ array ๋ฐฐ์ด๋ก ๋ณํ(๊ตฌ๋ถ๊ธฐํธ ํ์,์๋)')
const fruits = '๐,๐ญ,๐ฅ,๐ฅ';
const result2 = fruits.split(',',3);
console.log(result2);
}

// 3. reverse: ๋ฐฐ์ฐ ์์ ๊ฑฐ๊พธ๋ก
// make this array look like this: [5,4,3,2,1]
console.log('3. reverse: ๋ฐฐ์ฐ ์์ ๊ฑฐ๊พธ๋ก')
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);

}

// 4.slice: ๋ฐฐ์ด์์ ์ํ๋ ๋ถ๋ถ๋ง ๋ฆฌํดํด์ ๋ฐ์์ค๊ณ  ์ถ์๋ ์ฌ์ฉ
// make new array without the first two elements
console.log('4.slice: ๋ฐฐ์ด์์ ์ํ๋ ๋ถ๋ถ๋ง ๋ฆฌํดํด์ ๋ฐ์์ค๊ณ  ์ถ์๋')
{
    const array = [1,2,3,4,5];
    const result = array.slice(2, 5)
    console.log(result);

}

// ์๋ ๋ณธ๋ฌธ์ ์ด์ฉํ์ฌ ๋ฌธ์  ํ์ด
class Student {
    constructor( name,age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A',20,true,77),
    new Student('B',21,false,80),
    new Student('C',22,true,90),
    new Student('D',23,true,66),
    new Student('E',24,false,68),
    new Student('F',25,true,88),

];

// 5. find: ๋ฐฐ์ด์ ์ ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง ์์ดํ์ ๋ฆฌํดํ๋ค.
// 5. find a student with the score 90
console.log('5. find: ๋ฐฐ์ด์ ์ ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง ์์ดํ์ ๋ฆฌํดํ๋ค.')
{
    const result = students.find((student)=>student.score === 90);
    console.log(result);
}

// 6. filter: ๋ฐฐ์ด์ ์ ์ํ๋ ๋ฐ์ดํฐ๋ค์ ์ฐพ์ ๋ฆฌํดํ๋ค.
//make an array of enrolled students
console.log('6. filter: ๋ฐฐ์ด์ ์ ์ํ๋ ๋ฐ์ดํฐ๋ค์ ์ฐพ์ ๋ฆฌํดํ๋ค.')
{
    const result = students.filter((student)=>student.enrolled);
    console.log(result);
}

// 7. map: ๋ฐฐ์ด์์ ๋ด๊ธด ๋ฐ์ดํฐ๋ฅผ ํธ์ถํด ๋ค๋ฅธ ๋ฐ์ดํฐ๋ก  ๋ง๋ค๊ณ  ์ถ์๋
//make an array containing only the students scores
// result should be:[77,80,90,66,,68,88]
console.log('7. map: ๋ฐฐ์ด์์ ๋ด๊ธด ๋ฐ์ดํฐ๋ฅผ ํธ์ถํด ๋ค๋ฅธ ๋ฐ์ดํฐ๋ก  ๋ง๋ค๊ณ  ์ถ์๋')
{
const result = students.map((student)=> student.score *10);
console.log(result);
}

// 8.some: ๋ฐฐ์ด์์ ํ๋๋ผ๋ ๋ง์กฑ ํ๋ฉด true
// check if there is a student with the score lower than 80
console.log('8.some: ๋ฐฐ์ด์์ ํ๋๋ผ๋ ๋ง์กฑ ํ๋๊ฐ์๋์ง ๊ฒ์ฌ')
{
 const result = students.some((student) => student.score < 80);
 console.log(result);  

 // every: ๋ฐฐ์ด์์ ๋ชจ๋  ๋ฐ์ดํฐ๊ฐ์ด ๋ง์กฑํ ๋ true๋ฅผ ๋ฆฌํดํ๋ค
 const result2 = students.every((student) => student.score < 80);
 console.log(result2);   
}

// 9.reduce: ๊ฐ์ ๋์ ํ ๋ ์ฌ์ฉ๋๋ค
// compute students average score
console.log('9.reduce: ๊ฐ์ ๋์ ํ ๋ ์ฌ์ฉ๋๋ค')
{
    const result = students.reduce((prev,curr)=> prev + curr.score,0);
    console.log(result);    
    console.log(result / students.length); 

    // ๊ณ์ฐ์:
    // const result = students.reduce((prev,curr)=>{
    //     console.log('------------');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // },0);
    //console.log(result);    // ์ดํฉ
    //console.log(result / students.length); // ํ๊ท  ์ ์
}

// 10.์์ ๋ฐฐ์ด ๋ด์ฉ ์กฐ์ธํ์ฌ ์ฌ์ฉํ๊ธฐ
// make a string containing all the scores
//result should be:[77,80,90,66,,68,88]
console.log('10.์์ ๋ฐฐ์ด ๋ด์ฉ ์กฐ์ธํ์ฌ ์ฌ์ฉํ๊ธฐ')
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 70)
    .join();
    console.log(result);
}

// 11.sort: ์ํ๋๋๋ก ์ ์ ์ ๋ ฌ
// bonus! do Q10 sorted in ascending order
// result should be:[77,80,90,66,,68,88]
console.log('11.sort: ์ํ๋๋๋ก ์ ์ ์ ๋ ฌ')
{
    const result = students
    .map((student) => student.score)
    .sort((a,b) => a - b)
    .join();
    console.log(result);
}
