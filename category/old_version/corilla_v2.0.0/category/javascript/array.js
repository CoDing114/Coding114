'use strict';

// Array🎉

// 1. Declaration - 배열 선언
console.log('1. Declaration - 배열 선언')
const arr1 = new Array(); // 첫번째 방식
const arr2 = [1,2]; // 두번째 방식 - 현재까지 흔하게 쓰이는 방식이다.

// 2. Index position index를 활용한 배열 접근
console.log('2. Index position - index를 활용한 배열 접근')
const fruits = ['🍖','🥩'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); //맨 마지막에 잇는 아이템을 찾을 땐 "배열.length - 1"  배열에서 -1을 하면 맨 마지막 인덱스를 받아올수 잇기 때문이다

// 3.Looping over an array - 배열 출력
// print all fruits
// a. for   첫번째 방식
console.log('3.Looping over an array - 배열 출력')
console.log('a. for 첫번째 방식')
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of    두번째 방식
console.log('b. for of  두번째 방식')
for (let fruit_b of fruits){
    console.log(fruit_b);
}

// c. forEach 세번째 방식
console.log('c. forEach  세번째 방식')
fruits.forEach((fruit_c) => console.log(fruit_c));

//계산식:
// fruits.forEach(function(fruit_c,index_c,array_c){
//     console.log(fruit_c,index_c,array_c);
// });


// 4.Addtion, deletion, copy    데이터 삽입
console.log('4. Addtion, deletion, copy 데이터 삽입')
// push: add an item to the end
console.log('데이터 삽입 push: add an item to the end')
fruits.push('🍕','🍔');
console.log(fruits);
// pop:remove an item from the end
console.log('데이터 삭제 pop:remove an item from the end')
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
console.log('앞쪽 데이터 삽입 unshift: add an item to the benigging')
fruits.unshift('🍘','🍤');
console.log(fruits)
// shift: remove a n item from the benigging
console.log('앞쪽 데이터 삭제 shift: remove a n item from the benigging')
fruits.shift();
console.log(fruits)
// note!! shift, unshift are slower than pop, push

// splice: 배열중 원하는 구간 삭제
//remove an item by index position
console.log('배열중 원하는 구간 삭제 splice: remove an item by index position')
fruits.push('🍟','🌭');
console.log(fruits);
console.log('splice 지정위치 데이터 삭제')
fruits.splice(1,1);
console.log(fruits)
console.log('splice 지정위치 데이터 교체')
fruits.splice(1,1,'🍜','🦪');
console.log(fruits);

// combine two arrays
console.log('combine two arrays 배열 결합')
const fruits2 = ['🍡','🍭'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits)

// 5. Searching 겁색
console.log('겁색 Searching')
// indexOf: find the index
console.log('indexOf: find the index 값이 잇으면 순번을 없으면 -1을 반환 한다')
console.log(fruits.indexOf('🍜'))
console.log(fruits.indexOf('☕'))

// includes
console.log('includes 값의 유무에 따라 true/false')
console.log(fruits.includes('🍜'))
console.log(fruits.includes('☕'))

// lastIndexOf
console.log('lastIndexOf 맨 마지막에 잇는 값을 반환해준다.')
fruits.push('🍜');
console.log(fruits);
console.log(fruits.lastIndexOf('🍜'));

console.log('------------------------------------------------------------')

// array-api
// 1.join: array 배열을 문자 string으로 변환 (구분기호)
// make a string out of an array
{
console.log('1.join: array 배열을 문자 string으로 변환 (구분기호)')
const result = fruits.join(', and ');
console.log(result);
}

// 2 split: 문자 string을 array 배열로 변환 ('구분기호 필수',수량)
// make an array out of a string
{
console.log('2 split: 문자 string을 array 배열로 변환(구분기호 필수,수량)')
const fruits = '🍟,🌭,🥗,🥙';
const result2 = fruits.split(',',3);
console.log(result2);
}

// 3. reverse: 배연 순서 거꾸로
// make this array look like this: [5,4,3,2,1]
console.log('3. reverse: 배연 순서 거꾸로')
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);

}

// 4.slice: 배열에서 원하는 부분만 리턴해서 받아오고 싶을때 사용
// make new array without the first two elements
console.log('4.slice: 배열에서 원하는 부분만 리턴해서 받아오고 싶을때')
{
    const array = [1,2,3,4,5];
    const result = array.slice(2, 5)
    console.log(result);

}

// 아래 본문을 이용하여 문제 풀이
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

// 5. find: 배열애서 원하는 데이터를 가진 아이템을 리턴한다.
// 5. find a student with the score 90
console.log('5. find: 배열애서 원하는 데이터를 가진 아이템을 리턴한다.')
{
    const result = students.find((student)=>student.score === 90);
    console.log(result);
}

// 6. filter: 배열애서 원하는 데이터들을 찾아 리턴한다.
//make an array of enrolled students
console.log('6. filter: 배열애서 원하는 데이터들을 찾아 리턴한다.')
{
    const result = students.filter((student)=>student.enrolled);
    console.log(result);
}

// 7. map: 배열안에 담긴 데이터를 호출해 다른 데이터론 만들고 싶을때
//make an array containing only the students scores
// result should be:[77,80,90,66,,68,88]
console.log('7. map: 배열안에 담긴 데이터를 호출해 다른 데이터론 만들고 싶을때')
{
const result = students.map((student)=> student.score *10);
console.log(result);
}

// 8.some: 배열에서 하나라도 만족 하면 true
// check if there is a student with the score lower than 80
console.log('8.some: 배열에서 하나라도 만족 하는값잇는지 검사')
{
 const result = students.some((student) => student.score < 80);
 console.log(result);  

 // every: 배열에서 모든 데이터값이 만족할때 true를 리턴한다
 const result2 = students.every((student) => student.score < 80);
 console.log(result2);   
}

// 9.reduce: 값을 누적할때 사용된다
// compute students average score
console.log('9.reduce: 값을 누적할때 사용된다')
{
    const result = students.reduce((prev,curr)=> prev + curr.score,0);
    console.log(result);    
    console.log(result / students.length); 

    // 계산식:
    // const result = students.reduce((prev,curr)=>{
    //     console.log('------------');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // },0);
    //console.log(result);    // 총합
    //console.log(result / students.length); // 평균 점수
}

// 10.위에 배운 내용 조인하여 사용하기
// make a string containing all the scores
//result should be:[77,80,90,66,,68,88]
console.log('10.위에 배운 내용 조인하여 사용하기')
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 70)
    .join();
    console.log(result);
}

// 11.sort: 원하는대로 점수 정렬
// bonus! do Q10 sorted in ascending order
// result should be:[77,80,90,66,,68,88]
console.log('11.sort: 원하는대로 점수 정렬')
{
    const result = students
    .map((student) => student.score)
    .sort((a,b) => a - b)
    .join();
    console.log(result);
}
