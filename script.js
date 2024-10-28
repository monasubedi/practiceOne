

// Array.prototype.myMap = function(cb){
//     let temp = [];
//     for(let i = 0; i < this.length; i++){
//         temp.push(cb(this[i],i,this));
//     }
//     return temp;
// }


Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[0];
    }
    return accumulator;
}

// let arr = [1,2,3,4];
// let result = arr.myReduce((acc,curr,i,ar) => acc + curr);
// console.log(result);


// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Jenny", rollNumber: 15, marks: 69 },
//     { name: "Kaushal", rollNumber: 16, marks: 35 },
//     { name: "Dilpreet", rollNumber: 7, marks: 55 },
// ];
// let res = students.reduce((acc, curr) => {
//     return acc + curr.marks
// },0);
// console.log(res);


// const createBase = function(m){
//     return function(n){
//         console.log(n+m);
//     }
// }

// var addSix = createBase(6);
// addSix(10);
// addSix(21);

// function a(){
//     for(var i = 0; i < 3; i++){
//         function inner(i){
//             setTimeout(() => {
//                 console.log(i);
//             }, i * 1000);
//         }
//         inner(i)

//     }
// }
// a();


//i=3
//i=3
//i=3

//Module Pattern
// var Module = function(){
//     function privateMethod(){

//     }

//     return {
//         publicMethod: function(){
//             console.log("public");
//         }
//     }
// }

// Module().publicMethod();

// let view;

// function likeTheVideo() {
//     let count = 0;
//     return function () {
//         if (count === 0) {
//             view = "the channel";
//             console.log("subscribe to the " + view);
//             count++;
//         }

//     }

// }
// let f = likeTheVideo();
// f();
// f();


//polyfill once
// function once(func,context){
//     let ran;
//     return function(){
//         if(func){
//             ran = func.apply(context || this,arguments);
//             func = null;
//         }
//         return ran;
//     }
// }

// let f = once(() => console.log("hello"));
// f();
// f();



// const clumsySquare = (num1, num2) => {
//     for (let i = 0; i < 10000000; i++) {

//     }
//     return num1 * num2;
// }


// function myMemoize(num1, num2) {
//     let obj = {};
//     return function () {
//         let str = JSON.stringify(num1, num2);
//         let result;

//         for (let i = 0; i < 10000000; i++) {

//         }
//         if (obj[str]) {
//             result = obj[str];
//         }
//         else {
//             result = num1 * num2;
//             obj[str] = result;
//         }

//         return result;
//     }

// }
// let m = myMemoize(111,222);
// console.log(m());
// console.log(m());


// function evaluate(operation){
//     return function(a){
//         return function(b){
//             if(operation === "sum"){
//                 return a + b;
//             }
//             else if(operation === "multiply"){
//                 return a * b;
//             }
//             else if(operation === "divide"){
//                 return a / b;
//             }
//             else {
//                 return a - b;
//             }
//         }
//     }
// }

//infinite currying
// function add(a){
//     return function(b){
//          if(b){
//             return add(a+b);
//          }
//          return a;
//     }
// }

// console.log(add(1)(2)());

//
// function curry(func){
//     return function curriedFunction(...args){
//         if(args.length >= func.length){
//             return func(...args);
//         }
//         else{
//             return function(...next){
//                 return curriedFunction(...args,...next);
//             }
//         }
//     }
// }
// let sum = (a,b,c,d) => a + b + c + d;

// console.log(curry(sum)(2)(3)(4)(5));



//objects

// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});

// let c = {greeting:"Hey!"};
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);//Hello


// let person = {name:"Lydia"};
// const members = [person];
// person = null;

// console.log(members);//{name:"Lyida"} if we do person.name = null then it will also effect the copyied variable i.e members

// const value = {number:10};
// const multiply = (x = {...value}) => {
//     console.log((x.number *= 2));
// }

// multiply();//20
// multiply();//20
// multiply(value);//20
// multiply(value);//40


let names = ["Alice","Bob","Alice","Charlie","Bob"];

let arr = names.filter((name,i) => {
    console.log(names.indexOf(name));
    return names.indexOf(name) === i
}).map((p) => p);
console.log(arr);


