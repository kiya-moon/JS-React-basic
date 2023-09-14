'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);  // 새로운 오브젝트를 만들 때는 new 키워드 사용
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

//   set age(value){    
//     this.age = value;
//   }  > 변수명이 같을 경우 call stack 발생. 아래와 같이 변수 앞에 보통 '_'를 붙여서 방지

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! 너무 최근에 추가되서 브라우저에서 지원이 안됨
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;    // 클래스 내부에서만 값을 읽고 쓸 수 있음
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
// 클래스 안에 있는 fields와 methods는 새로운 object를 만들 때마다 그대로 복사되어 값만 우리가 지정해주는 대로 변경됨
// 간혹 이런 오브젝트에 상관없이 클래스가 가지고 있는 고유의 값과 반복 사용되는 method가 있을 수 있음
// 이때 static 키워드만 붙이면 object와 상관없이 클래스에 연결될 수 있음 
// 공통적으로 사용되는 요소는 static을 붙여 메모리 사용을 줄일 수 있다
 
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // stactic을 사용하지 않았다면 값이 출력되었겠지만 여기서는 undefined 출력됨
console.log(Article.publisher); // static을 사용해 Article 클래스 자체에 연결되어 있기 때문에 Article.publisher로 호출해야 함
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
// 동그라미, 세모, 네모 등의 공통적 요소는 높이, 넓이, 색 등
// 이런 shape를 하나의 클래스로 만들어 상속 및 다양성을 통해 다양한 도형을 만들 수 있음
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {  // OverWriting
    super.draw();   // 부모 클래스의 draw()를 호출하면서 Triangle의 draw()도 출력됨
    console.log('🔺');
  }
  getArea() {   // OverWriting
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);// ture
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle);  // true
console.log(triangle instanceof Shape);     // ture
console.log(triangle instanceof Object);    // true > 자바와 동일하게 Object가 최상위 클래스인듯...
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);

// *** JavaScript Reference***
// js 내에 포함된 다양한 object들을 찾을 수 있음 