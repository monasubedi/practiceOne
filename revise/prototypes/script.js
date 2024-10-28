// let person = {
//     name:"Mona",
//     address:"Connecticut"
// }
// let additional = {
//     username: "Hsu Hlaing Hnin",
//     alias: function(){
//         console.log(`${this.name} is also known as ${this.username}`);
//     }
// }
// person.__proto__ = additional;// this is kind of inheritance.
// person.alias();


// //Protytype Inheritance


// //function constructor

// //parent
// function Animal(name){
//     this.name = name;
// }

// //add a method to the prototype
// Animal.prototype.sayHello = function(){
//     console.log("Hi " + this.name);
// }

// let animal1 = new Animal("tiger");


// //child
// function Dog(name,breed){
//     Animal.call(this,name);//inherit from (Animal) parent.
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);//this will replace the Animal constructor, so dog should has its own constructor by adding below..
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function(){
//     console.log("Woof!");
// }

// let dog1 = new Dog("puffy","none");

// Array.prototype.myArr = function(){
//     console.log("this is my array ", this);
// }

// const arr = [1,2,3];
// console.log(arr.myArr());

//Ques 1: What will be the output of the followin code?
// function Vehicle(){}
// Vehicle.prototype.drive = function(){
//     console.log("Driving a vehicle");
// }

// function Car(){}
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
// Car.prototype.drive = function(){
//     console.log("Driving a car");
// }

// var vehicle = new Vehicle();
// var car = new Car();
// vehicle.drive();//Driving a vehicle
// car.drive();//Driving a car


//Ques 2: Explain the difference between __proto__ and prototype in JavaScript.
//__proto__ - It is an object property that points to the prototype of the object. 
//It is used for inheritance and allows accessing the prototype chain.
//prototype - It is a property that exists on constructor functions and is used to set up
//inheritance for objects created by that constructor function.
//It defines properties and methods shared by all instances created by that constructor function.


//Ques 3: How can you create an object without a prototype in Javascript?
//var obj1 = Object.create(null);


//Ques 4: what's the output?
// function A(){}
// A.prototype.foo = 10;

// function B(){}
// A.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;
// B.prototype.foo = 20;

// function C(){}
// C.prototype = Object.create(B.prototype);
// C.prototype.constructor = C;
// C.prototype.foo = 30;

// var obj1 = new A();
// var obj2 = new B();
// var obj3 = new C();

// console.log(obj1.foo);
// console.log(obj2.foo);
// console.log(obj3.foo);


//Ques 7: Deep Clone an object in JS
// var obj2 = {
//     a:1,
//     b:{
//         c:2,
//         d:[3,4]
//     }
// }
// var clonedObj = obj2;
// var deepCloned = {...obj2};

// function deepClone(obj){
//     if(obj === null || typeof obj != "object"){
//         return obj;
//     }
//     var clone = Array.isArray(obj) ? [] : {};
//     for(var key in obj){
//         if(obj.hasOwnProperty(key)){
//             clone[key] = deepClone(obj[key]);
//         }
//     }
//     return clone;
// }
