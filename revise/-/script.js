//var or let or const
// var b = 10;
// function test(){
//     var a = "Hello";
//     let b = "Bye";


//     if(b === 10){
//         let a = "Hi";
//          var b = "Goodbye";
//         console.log(a);
//         console.log(b);
//     }
// }

// test();

// var b = "kk";
// var b = "lk";
// console.log(b);




//map,filter and reduce

//polyfill for map

// const myMap = (cb, arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = cb(arr[i], i, arr);
//     }
//     return newArr;
// }

// myMap((i) => console.log(i), [1, 2, 3, 4]);

// //polyfill for filter
// const myFilter = (cb, arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let rValue = cb(arr[i], i, arr);
//         if (rValue) {
//             newArr[i] = arr[i];
//         }
//     }
//     return newArr;
// }



//polyfill for reduce
// const myReduce = (cb, index, acc, cur, arr) => {
//     let initial = acc;
//     for (let i = 0; i < arr.length; i++) {
//         initial = initial ? cb(initial, arr[i], i, arr) : arr[i];
//     }
//     return initial;
// }


// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Jenny", rollNumber: 15, marks: 69 },
//     { name: "Kaushal", rollNumber: 16, marks: 35 },
//     { name: "Dilpreet", rollNumber: 7, marks: 55 },
// ]

// let arr = students.map((student) => {
//     return student.name.toUpperCase()
// });

// let arr2 = students.filter((stu) => stu.marks > 60);

// let totalMarks = students.map((student) => {
//     if (student.marks < 60) {
//         student.marks += 20;
//     }
//     return student;

// }).filter((s) => s.marks > 60).reduce((acc, cur) => {
//     return acc + cur.marks;
// }, 0);
// console.log(totalMarks);


//functions

//IIFE- Immediately invoked functional expressions
// (function(x){
//     return (function(y){
//         console.log(x);
//     })(2);
// })(1);


//function scope
// var num1 = 20, num2 = 3, name ="Roadside Coder";

// function multiply(){
//     return num1 * num2;
// }

// console.log(multiply());//60

// function getScore(){
//     var num1 = 2, num2 = 3;


//     function add(){
//         return name + " scored " + (num1 + num2); 
//     }

//     return add();

// }

// console.log(getScore());//Roadside Coder scored 5.


// var x = 21;

// var fun = function(){
//     console.log(x);
//     var x = 20;
//     // let x = 20;
// }

// fun();



// let count = 0;
// (function printCount() {
//     // var count =0;
//     if (count === 0) {
//         var count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })();


// function find() {
//     let a = [];
//     for (let i = 0; i < 10000000; i++) {
//         a[i] = i * i;

//     }
//     return function (index) {

//         return a[index];
//     }

// }


// function a() {
//     for (var i = 0; i < 3; i++) {
//         function inner(i) {
//             setTimeout(() => {
//                 console.log(i);
//             }, i * 1000);
//         }
//         inner(i);
//     }

// }
// a();

//module pattern

// function myFunc(){
//     function privateMethod(){

//     }
//     return {
//         publicMethod: function(){

//         }
//     }
// }


//once polyfill
// function once(func, context) {
//     let ran;
//     return function () {
//         if (func) {
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//         return ran;
//     }
// }

//memoized function
// const myMemoize = function (fn, context) {
//     let res = {};
//     return function (...args) {
//         let cached = JSON.stringify(args);
//         if (!res[cached]) {
//             res[cached] = fn.call(context || this, ...args);
//         }
//         return res[cached];
//     }
// }


//currying


// function sum(num) {
//     return function (num2) {
//         return function (num3) {
//             return num + num2 + num3;
//         }
//     }
// }

// console.log(sum(1)(2)(4));


// function evaluate(operator) {
//     return function (a) {
//         return function (b) {
//             let result = 0;
//             if (operator === "sum") {
//                 result = a + b;
//             }
//             else if (operator === "multiply") {
//                 result = a * b;
//             }
//             else if (operator === "divide") {
//                 result = a / b;
//             }
//             else {
//                 result = a - b;
//             }

//             return result;
//         }
//     }
// }



//infinite currying
// function sum(a) {
//     return function (b) {
//         if (b) {
//             return sum(a + b);
//         }
//         return a;
//     }
// }

// let a = sum(3)(4)(5);
// console.log(a());
// // console.log(a(5));


//Difference between currying vs partial application

//partial application
// function sum(a){
//     return function(b,c){
//         return a + b + c;
//     }
// }


// const x = sum(10)(5,6);

// //curry
// function sum(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
// const y = sum(2)(3)(4)();



//manipulating DOM
// function updateElementText(id) {
//     return function (content) {
//         document.querySelector("#" + id).textContent = content;
//     }
// }

// const updateHeader = updateElementText("heading");
// updateHeader("Subscribe to RoadsideCoder");



//curry() implementation
//converts f(a,b,c) into f(a)(b)(c)

// function curry(func) {
//     return function curriedFunc(...args) {
//         if (args.length >= func.length) {
//             return func(...args);
//         }
//         else {
//             return function (...next) {
//                 return curriedFunc(...args, ...next);
//             }
//         }
//     }
// }

// const sum = (a, b, c, d) => a + b + c + d;
// const totalSum = curry(sum);
// console.log(totalSum(1)(6)(5)(6));




// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// }
// console.log(obj);// {a:"three",b:"two"}



// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums"
// };

// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj[key] === "number"){
//             obj[key] *= 2
//         }
//     }
//     return obj;
// }
// console.log(multiplyNumeric(nums));


// const a = {};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);//456


// const settings = {
//     username: "Piyush",
//     level: 19,
//     health: 90
// }

// const data = JSON.stringify(settings,["level","health"]);

// console.log(data);


// let a ={
//     greeting: "hello"
// }
// let b;
// b = a;
// a = null;
// console.log(a,b);
// console.log(b === a);

// console.log({a:1} === {a:1});
// console.log({a:1} == {a:1});


// let person = { name: 'Lydia' };
// const members = [person];
// person = null;
// person.name = null;
// console.log(members);



// const value = { number: 10 };

// const multiply = (x = {...value}) => {
//     console.log((x.number *= 2));

// }

// multiply();//20
// multiply();//20
// multiply(value);//20
// multiply(value);//40
// console.log(value);


// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "John",
//         age: 50
//     }
//     return person;
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1);//{name:"Alex", age:25}
// console.log(personObj2);//{name:"John",age:50}


//how to deep copy / clone an object
// let user  = {
//     name: "Roadside Coder",
//     age: 24
// }

// const objClone = {...user};
// const objClone2 = Object.assign({},user);
// const objClone3 = JSON.parse(JSON.stringify(user));


// let user = {
//     name: "Piyush",
//     age: 24,
//     getDetails() {
//         const nestedArrow = () => console.log(this.name);
//         // function nestedArrow() {
//         //     console.log(this.name);
//         // }
//         nestedArrow();
//     }
// }
// user.getDetails();

// this.firstName = "Mona Subedi"
// const user = {
//     firstName: "Piyush",
//     // getName() {
//     //     const firstName = "Piyush something";
//     //     return this.firstName;
//     // }
//     getName: () => {
//         const firstName = "Piyush something";
//         return this.firstName;
//     }
// }

// console.log(user.getName());


// function makeUser(){

//     return{
//         name: "John",
//         ref: function(){
//             console.log(this.name);
//         },
//     }
// }

// let user = makeUser();
// console.log(user.ref());



// const user = {
//     name: "Piyush Agarwal",
//     logMessage(){
//         console.log(this.name);
//     }
// }

// setTimeout(user.logMessage,1000);// nothing or undefined


// const user = {
//     name: "Piyush",
//     greet(){
//         return `Hello , ${this.name}`
//     },
//     farewell:() => {
//         return `Goodbye, ${this.name}`
//     }
// }

// console.log(user.greet());//Piyush
// console.log(user.farewell());//undefined


//create an object calculator
// let calculator = {
//     read() {
//         this.a = +prompt("a = ", 0);
//         this.b = +prompt("b = ", 0);
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());



// var length = 4;

// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     // method(fn) {
//     //     fn(); // 4


//     // }
//     method(){//[callback,2,3]
//         arguments[0](); // 3
//     }
// }

// object.method(callback,2,3);



// const calc = {
//     num: 0,
//     add(n) {
//         this.num += n
//         return this;
//     },
//     multiply(n) {
//         this.num *= n
//         return this;
//     },
//     total() {
//         return this.num;
//     }
// }

// const result = calc.add(10).multiply(2).total();
// console.log(result);



//call, bind, apply
// var obj = { name: "Piyush" };
// function sayHello(age) {
//     return `Hello ${this.name} and ${age}`;
// }

// const bindFunc = sayHello.bind(obj);
// console.log(sayHello.call(obj, 26));
// console.log(sayHello.apply(obj, [26]));
//console.log(bindFunc(24));



// const person = {name:"Piyush"};

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,24));
// const bindFunc = sayHi.bind(person,24);
// console.log(bindFunc(24));



// const age = 10;

// var person = {
//     name: "Piyush",
//     age: 20,
//     getAge: function () {
//         return this.age;
//     }
// };

// var person2 = { age: 24 };
// console.log(person.getAge.call(person2)); // 24


// let status = "😎";

// setTimeout(function () {
//     const status = "😍";
//     const data = {
//         status: "🥑",
//         getStatus() {

//             return this.status;
//         }
//     }
//     console.log(data.getStatus());
//     console.log(data.getStatus.call(this));
// }, 0);


// const animals = [
//     { species: "Lion", name: "King" },
//     { species: "Whale", name: "Queen" }
// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ":" + this.name);
//     };
//     this.print();
// }
// animals.forEach((animal, i) => {
//     printAnimals.call(animal,i)
// })


// const array = ['a', 'b'];
// const elements = [0, 1, 2];

// array.push.apply(array,elements);
// console.log(array);


// let numbers = [1,2,3,3,5];
// console.log(Math.max.apply(null,numbers));



// function f() {
//     console.log(this);
// }

// let user = {
//     g: f.bind()
// }
// user.g();


// function f(){
//     console.log(this.name);
// }

// let fk = f.bind({name:"John"}).bind({name:"ann"});

// fk();//John


// function checkPassword(success,failed){
//     let password = prompt("Password","");
//     if(password == "Roadside Coder") success();
//     else failed();
// }

// let user = {
//     name: "Piyush Agarwal",
//     loginSuccessful(){
//         console.log(`${this.name} logged in`);
//     },
//     loginFailed(){
//         console.log(`${this.name} failed to login`);
//     }
// }
// checkPassword(user.loginSuccessful.bind(user),user.loginFailed.bind(user))


// function checkPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "Roadside Coder") ok();
//     else fail();
// }

// let user = {
//     name: "Piyush Agarwal",
//     login(result) {
//         console.log(this.name + (result ? " login success" : " login fail"));
//     }
// }

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));


// let car1 = {
//     color: "Red",
//     company: "Ferrari"
// }

// function purchaseCar(currency, price) {
//     console.log(`I have purchased ${this.color} - ${this.company} from this company,and it costs ${currency} ${price}`);
// }
// //polyfill for call
// Function.prototype.myCall = function (context, ...args) {
//     if (typeof this !== "function") throw new Error(`${this}, function is not callable`)
//     context.fn = this;
//     context.fn(...args);

// }

// //polyfill for apply
// Function.prototype.myApply = function (context, args = []) {
//     if (typeof this !== "function") throw new Error(`${this}, function is not callable`);

//     if (!Array.isArray(args)) throw new TypeError("it is not arrary");

//     context.fn = this;
//     context.fn(...args);
// }

// //polyfill for bind
// Function.prototype.myBind = function (context = {}, ...args) {
//     if (typeof this !== "function") throw new Error(`${this}, function is not callable`);

//     context.fn = this;
//     return function (...newArgs) {
//         context.fn(...args, ...newArgs);
//     }

// }

// purchaseCar.myCall(car1, "$", 909090)
// const fn = purchaseCar.myBind(car1);
// console.log(fn("$","8888"));

// var car = {
//     registrationNumber: "GA12345",
//     brand: "Toyota",
//     displayDetails: function () {
//         console.log(this.registrationNumber + " " + this.brand);
//     }
// }

// var dd = car.displayDetails;
// dd.call(car);


// promise
// console.log("Start");
// function importantAction(username,cb){
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`)
//     }, 1000);
// }



// function likeTheVideo(video,cb) {
//     setTimeout(() => {
//         cb(`like the ${video} video`)
//     }, 1000);
// }

// function shareTheVideo(video,cb){
//     setTimeout(() => {
//         cb(`share the ${video} video`);
//     }, 500);
// }

// const message = importantAction("Roadside Coder", function(message){
//     console.log(message);
//     likeTheVideo("Javascript interview questions", (action) => {
//         console.log(action);
//     })
// });

// console.log(message);

// console.log("stop");

// console.log("start");

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) resolve("Subscribed to Roadside Coder");
//         else reject(new Error("Why aren't you subscribed to Roadside Coder yet?"));
//     }, 2000);
// });

// sub.then((res) => console.log(res)).catch((error) => console.log(error));



// console.log("stop");


//promises chaining
// console.log("start");

// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Subscribe to ${username}`)
//         }, 1200);
//     })

// }

// function likeTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`like the ${video} video`)
//         }, 1000);
//     })

// }

// function shareTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`share the ${video} video`);
//         }, 1500);
//     })
// }

// importantAction("Mona Subedi").then((res) => {
//     console.log(res);
//     return likeTheVideo("some eg");
// }).then((res) => {
//     console.log(res);
//     return shareTheVideo("some eg");
// }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// console.log("stop");


//promise combinators
// Promise.all([
//     importantAction("Roadside Coder"),
//     likeTheVideo("some eg"),
//     shareTheVideo("some eg")
// ]);
// Promise.race([
//     importantAction("Roadside Coder"),
//     likeTheVideo("some eg"),
//     shareTheVideo("some eg")
// ]).then((res) => console.log(res)).catch((err) =>
//     console.log(err));
// Promise.allSettled([
//     importantAction("Roadside Coder"),
//     likeTheVideo("some eg"),
//     shareTheVideo("some eg")
// ]).then((res) => console.log(res)).catch((err) =>
//     console.log(err));

// Promise.any([
//     importantAction("Roadside Coder"),
//     likeTheVideo("some eg"),
//     shareTheVideo("some eg")
// ]).then((res) => console.log(res)).catch((err) =>
//     console.log(err));

//what's the output?
// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// });
// promise1.then((res) => {
//     console.log(res);
// })

// console.log("end");
//start 1 end 2


// console.log("start");

// const promise1 = new Promise((resolve,reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log(res);
// });

// console.log("end");
//start 1 3 end 2

// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
//     console.log(1);
//     console.log(3);
// })
// promise1.then((res) => {
//     console.log("Result: " + res);
// });
// console.log("end");
//start 1 3 end

// console.log("start");

// const fn = () => {
//     new Promise((resolve,reject) => {
//         console.log(1);
//         resolve("success");
//     })
// }

// console.log("middle");

// fn().then((res) => {
//     console.log(res);
// })

// console.log("end");
//start middle 1 end success


// function job(){
//     return new Promise(function (resolve,reject){
//         //reject();
//         resolve()
//     })
// }

// let promise = job();
// promise.then(function(){
//     console.log("Success 1");
// }).then(function(){
//     console.log("Success 2");
// }).then(function(){
//     console.log("Success 3");
// }).catch(function(){
//     console.log("Error 1");
// }).then(function(){
//     console.log(".then");
// })


// function job(state){
//     return new Promise(function(resolve,reject){
//         if(state){
//             resolve("success");
//         }
//         else{
//             reject("error");
//         }
//     })
// }

// let promise = job(true);
// promise.then(function(data) {
//     console.log(data);
//     return job(true);
// }).then(function(data){
//     console.log(data);
//     return "Error caught"
// }).then(function(data){
//     console.log(data);
//     return job(false);
// }).catch(function(err){
//     console.log(err);   
// }).then(function(data){
//     console.log(data);
// })



// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve("success");
//         }
//         else {
//             reject("error");
//         }
//     })
// }
// let promise = job(true);
// promise.then(function (data) {
//     console.log(data);//success
//     return job(true);
// }).then(function (data) {
//     if (data !== "victory") {
//         throw "Defeat";
//     }
//     return job(true);
// }).then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
//     return job(false);
// }).then(function (data) {
//     console.log(data);
//     return job(true);
// }).catch(function (error) {
//     console.log(error);
//     return "Error caught";
// }).then(function (data) {
//     console.log(data);
//     return new Error("test");
// })
//     .then(function (data) {
//         console.log("Success:", data.message);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


// function firstPromise() {
//     return new Promise((resolve, reject) => {
//         resolve("First");
//     })
// }

// function secondPromise() {
//     return new Promise((resolve, reject) => {
//         resolve(firstPromise);
//     })
// }
// secondPromise().then((res) => {
//     return res();
// }).then((res) => console.log(res));

// let firstPromise = new Promise((resolve, reject) => {
//     resolve("First!");
// })
// let secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// })

// secondPromise.then((res) => res).then((res) => console.log(res));



//rewrite the example code using async/await instead of .then/catch

// function loadJson(url) {
//     return fetch(url).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         }
//         else {
//             throw new Error(response.satus);
//         }
//     })
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => console.log(err));


// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status === 200) {
//         let json = await response.json();
//         return json;
//     }
//     throw new Error(response.status);

// }
// let res = loadJson("https://fakeurl.com/no-such-user.json").catch((err) => console.log(err));
// console.log(res);

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1200);
    })

}

function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`like the ${video} video`)
        }, 1300);
    })

}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`share the ${video} video`);
        }, 1500);
    })
}

function promRecursion(promises) {
    if (promises.length === 0) return;

    let promise = promises.shift();
    promise.then((res) => console.log(res)).catch((err) => console.log(err));
    promRecursion(promises);
}
promRecursion([importantAction("Mona Subedi"), likeTheVideo("this"), shareTheVideo("this")]);