'use strict';
//Object-oriendted programming
//class: template
//object:instance of a class
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class seclarations
console.log('1. Class seclarations')
class Person{
    //constructor
    constructor(name,age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}

const huke = new Person('huke',20);
console.log(huke.name);
console.log(huke.age);
huke.speak();

// 2.Gerter and setters
console.log('2.Gerter and setters')
class user{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age= age;
    }

    get age() {
        return this._age;
    }

    set age(value){
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 1:value;
    }
}

const user1 = new user('Steve','Job',-2);
console.log(user1.age);

// 3.Fields (public,private)
//Too soon!
console.log('3.Fields (public,private)')
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//Too soon！
console.log('4. Static properties and methods')
class Article{
    static publisher = 'Coding114'; 
    constructor(articleNumber) {
        this.articleNumber = articleNumber; 
    }
    static printpublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printpublisher();

// 5. Inheritance
// a way for one class to extend another class.
console.log('5. Inheritance')
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log('🎅')
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6.class checking: instanceOf
console.log('6.class checking: instanceOf')
console.log(rectangle instanceof Rectangle); 
console.log(triangle instanceof Rectangle); 
console.log(triangle instanceof Triangle); 
console.log(triangle instanceof Shape); 
console.log(triangle instanceof Object); 
console.log(triangle.toString()); 

