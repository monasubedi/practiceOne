// function miniMaxSum(arr) {
//     // Write your code here
//     let min = Number.POSITIVE_INFINITY;
//     let max = Number.NEGATIVE_INFINITY;
//     let i = 0;
//     while (i < arr.length) {
//         let sum = 0;
//         for (let j = 0; j < arr.length ; j++) {
//             if (j !== i) {
//                 sum += arr[j];
//             }

//         }
//         if (sum < min) {
//             min = sum;
//         }
//         if (sum > max) {
//             max = sum;
//         }
//         i++;
//         sum = 0;
//         console.log(min + " " + max);
//     }
//     console.log(min + " " + max);
// }
// miniMaxSum([7,69,2,221,8974]);


// function timeConversion(s) {
//     // // Write your code here
//     let [hour,min,secStr] = s.split(":");
//     let sec = secStr.substring(0,2);
//     let timeStr = secStr.substring(2,4);
//     let newHr = '';
//     if(timeStr == 'AM' && hour == '12'){
//         newHr = '00';
//     }
//     if(timeStr == 'PM' && hour < '12'){
//         newHr = Number(hour) + 12;
//     }
//     return `${newHr || hour}:${min}:${sec}`;

//     // let hourIn24Format = '';

//     // let [ hour, minute, second_meridiem ] = s.split(':');
//     // let [ second, meridiem] = second_meridiem.split(/(?=[AP]M)/);

//     // if (meridiem == 'AM' && hour == '12') hourIn24Format = '00';
//     // if (meridiem == 'PM' && hour < '12') hourIn24Format = 12 + parseInt(hour);

//     // return `${hourIn24Format || hour}:${minute}:${second}`;


// }
// console.log(timeConversion("12:40:03PM"));

// let a = [1, 2, 3, 4, 1, 2, 3];
// function lonelyInteger(arr) {
//     let result;
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]]++;
//         }
//         else {
//             obj[arr[i]] = 1;
//         }

//     }
//     console.log("arr is",obj);
//     for(let j in obj){
//         if(obj[j] === 1){
//             result = j;
//         }
//     }
//     console.log(result);
// }
// lonelyInteger(a);

// lonelyInteger([0,0,1,2,1]);


// function minimumNumber(n, password) {
//     // Return the minimum number of characters to make the password strong
//     let numbers = "0123456789"
//     let lower_case = "abcdefghijklmnopqrstuvwxyz"
//     let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let special_characters = "!@#$%^&*()-+"
//     let result = 5;
//     let isNumContained = false;
//     let isLowerCaseContained = false;
//     let isUpperCaseContained = false;
//     let isSpecialCharContained = false;
//     if (n >= 6) {
//         result--;
//     }

//     for (let i = 0; i < password.length; i++) {
//         let letter = password[i];
//         console.log("res is", result);
//         if (numbers.includes(letter) && !isNumContained) {
//             result--;
//             isNumContained = true;
//         }
//         if (lower_case.includes(letter) && !isLowerCaseContained) {
//             result--;
//             isLowerCaseContained = true;
//         }
//         if (upper_case.includes(letter) && !isUpperCaseContained) {
//             result--;
//             isUpperCaseContained = true;
//         }
//         if (special_characters.includes(letter) && !isSpecialCharContained) {
//             result--;
//             isSpecialCharContained = true;
//         }

//     }
//     return result;

// }
// let res = minimumNumber(3, 'Abl');
// console.log(res);


// function pickingNumbers(a) {
//     // Write your code here
//    let length = a.length;
//    let b = 1;
//    let max = 1;
//    a.sort((a,b) => a - b);

//    for(let i = 0; i < length - 1; i++){
//         let d = a[i];
//         for(let j = i + 1; j < length; j++){
//             if(Math.abs(d - a[j]) <= 1){
//                 b++;
//             }

//         }
//         if(b > max){
//            max =b;
//         }

//         b = 1;
//    }
//    return max;


// }

// console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]));



// function matchingStrings(strings, queries) {
//     // Write your code here
//     let arr = [];
//     for (let i = 0; i < queries.length; i++) {
//         let count = 0;
//         for (let j = 0; j < strings.length; j++) {
//             if (strings[j] === queries[i]) {
//                 count++;
//             }
//         }
//         arr.push(count);
//     }
//     return arr;

// }
// let strings = ['aba',
//     'baba',
//     'aba',
//     'xzxb'];
// let queries = ['aba',
//     'xzxb',
//     'ab'];
// console.log(matchingStrings(strings, queries));


// function flippingBits(n){
//     // let val = Math.pow(2,32) - 1;
//     // console.log(Math.pow(2,32));
//     // return val - n;
//     let val = Number(n).toString(2).padStart(32,'0');
//     let base10 = (~val).toString(10);
//     return val;
// }

// console.log(flippingBits(1));


// function countingSort(arr) {
//     // Write your code here

//     let newArr = new Array(arr.length-1).fill(0);
//     for(let j = 0; j < arr.length; j++){
//         newArr[arr[j]]++;
//     }
//     return newArr;

// }

// console.log(countingSort([1,1,3,2,1]));



// function pangrams(s) {
//     // Write your code here
//     let alphabets = 'abcdefghijklmnopqrstuvwxyz';
//     let arr = new Array(26).fill(0);

//     for (let i = 0; i < s.length; i++) {
//         let position = s.toLowerCase().charCodeAt(i) - 97;
//         if (alphabets.includes(s[i].toLowerCase())) {
//             arr[position]++;
//         }
//     }

//     for(let j = 0; j < arr.length; j++){
//         if(arr[j] === 0){
//             return false;
//         }
//     }
//     return true;

// }
// console.log(pangrams("We promptly judged antique ivory buckles for the prize"));


// function birthday(s, d, m) {
//     // Write your code here
//     let arr2 = [];
//     let count = 0;
//     let index = 0;
//     for (let i = 0; i < s.length; i++) {
//         let arr = s.slice(i,i+m);
//         console.log(arr);
//         let sum = 0;
//         for (let j = 0; j < arr.length; j++) {
//             sum += arr[j];
//         }
//         if(sum === d){
//             arr2.push(arr);
//             arr = [];


//         }

//     }
//     return arr2;

// }

// console.log(birthday([2,1,3,1,2], 3, 2));


// const xor = (s,t) => {
//     let output = '';
//     for(let i = 0; i < s.length; i++){
//         let first = s[i];
//         let second = t[i];
//         if(first == 1 && second == 0){
//             output += 1;
//         }
//         else if((first == 1 && second == 1) || (second == 1 && first == 1)){
//             output += 0;
//         }
//         else if(first == 0 && second == 1){
//             output += 1;
//         }
//         else
//             output += 0;

//     }
//     return output;
// }

// console.log(xor('10101','00101'));

// function diagonalDifference(arr) {
//     // Write your code here
//     let left = 0;
//     let right = 0;
//     for(let i = 0; i < arr.length; i++){
//         left += arr[i][i];
//         right += arr[i][arr.length-1-i];
//     }

//     return Math.abs(left - right);

// }
// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));

// function twoArrays(k, A, B) {
//     // Write your code here
//     let sortedA = A.sort((a,b) => a - b);
//     let sortedB = B.sort((a,b) => a-b).reverse();
//     let count = 0;
//     for(let i = 0; i < k; i++){
//         if(A[i]+B[i] >= k){
//             count++;
//         }
//     }
//     return count == k ? "YES" : "NO";

// }
// console.log(twoArrays(3,[2,1,3],[7,8,9]));



// function findMedian(arr){
//     arr.sort((a,b) => a - b);

//     let midIndex = Math.floor(arr.length/2);
//     return arr[midIndex];
// }

// console.log(findMedian([0,1,2,3,4,5,6]));


// function sockMerchant(n,ar){
//     let obj = {};
//     let count = 0;
//     for(let i = 0; i < ar.length; i++){
//         if(obj[ar[i]]){
//             obj[ar[i]]++;
//         }
//         else{
//             obj[ar[i]] = 1;
//         }
//     }
//     console.log(obj);
//     for(let j in obj){
//         count += Math.floor(obj[j]/2);

//     }
//     return count;
// }

// console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));



// console.log('start');

// function importantAction(username,cb){
//     setTimeout(() => {
//         cb('Subscribe to ' + username);
//     }, 1000);
// }

// function likeTheVideo(name,cb){
//     setTimeout(() => {
//         cb('Like this video ' + name)
//     }, 500);
// }

// const message = importantAction("Mona", function(message){
//     console.log(message);
//     likeTheVideo("myvideo", (message) => {
//         console.log(message);
//     });
// })

// console.log("stop");


// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) {
//             resolve("Yes success");
//         }
//         else {
//             reject(new Error("Failed"));
//         }
//     }, 2000);
// });

// // sub.then((res) => console.log(res)).catch(e => console.log(e));
// console.log(sub);


// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log(res);
// });
// console.log("end");

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log(res);
// });
// console.log("end");

// console.log("start");
// const fn = () => new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });

// fn().then((res) => {
//     console.log(res);
// });
// console.log("end");


// function job(state) {
//     return new Promise((resolve, reject) => {
//         if (state) {
//             resolve("Success");
//         }
//         else {
//             reject("error");
//         }
//     })
// }

// let promise = job(true);

// promise.then(function (data) {
//     console.log(data);
//     return job(false);
// })
//     .catch(function (error) {
//         console.log(error);
//         return "Error caught"
//     })
//     .then(function (data) {
//         console.log(data);
//         return job(true);
//     }).catch(function (error) {
//         console.log(error);
//     })


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
//     console.log(error);//Defeat
//     return job(false);
// }).then(function (data) {
//     console.log(data);
//     return job(true);
// })
//     .catch(function (error) {
//         console.log(error);//error
//         return "Error caught";
//     }).then(function (data) {
//         console.log(data);//Error caught
//         return new Error("test");
//     }).then(function (data) {
//         console.log("Success:", data.message);//Success:test
//     }).catch(function (data) {
//         console.log("Error:", data.message);
//     })



// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First!");
// });

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// });

// secondPromise.then((res) => {
//     return res;
// }).then((res) => console.log(res));


// function promRecurse(funPromises) {
//     if (funPromises.length === 0) return;

//     const currPromise = funPromises.shift();

//     currPromise.then((res) => console.log(res))
//         .catch((err) => console.log(err));

//     promRecurse(funPromises);
// }


// const myDebounce = (cb, d) => {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb(...args);
//         }, d);
//     }
// };

// const myThrottle = (cb, d) => {
//     let last = 0;
//     return function (...args) {
//         let now = new Date().getTime();
//         if (now - last < d) return;
//         return cb(...args);
//     }
// }

// myDebounce(() => {
//     let count = 0;
//     console.log(++count);
// }, 2000);



// let computeAmount = function () {
//     let totalAmount = 0;

//     function lacs(num) {
//         totalAmount += num * 100000;
//         return this;
//     }
//     function crore(num) {
//         totalAmount += num * 10000000;
//         return this;
//     }
//     function thousand(num) {
//         totalAmount += num * 1000;
//         return this;
//     }
//     function value() {
//         return totalAmount;
//     }
//     return {
//         lacs,
//         value,
//         crore,
//         thousand

//     }
// }

// let amount = computeAmount();
// console.log(amount.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());



// var obj = {
//     helloWorld: function () {
//         return "hello,world" + this.name
//     },
//     name: "Hello"
// }

// var obj2 = {
//     helloWorld: obj.helloWorld,
//     name: 'Bye'
// }

// console.log(obj2.helloWorld()); 


// const addFive = (num) => {
//     return num + 5;
// }
// const subscribeTwo = (num) => {
//     return num - 2;
// }
// const multiplyFour = (num) => {
//     return num * 4;
// }

// function compose(...funs) {
//     return function (init) {
//         // let result = init;
//         // for (let i = funs.length - 1; i >= 0; i--) {
//         //     result = funs[i](result);

//         // }
//         // return result;
//         return funs.reduceRight((acc, curr) => {
//             return curr(acc);
//         }, init)
//     }
// }

// const evaluate = compose(addFive, subscribeTwo, multiplyFour);

// console.log(evaluate(5));




// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.sayName = function () {
//     console.log("My name is " + this.name);
// }
// var animalOne = new Animal("Tiger");


// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// var dogOne = new Dog("Max", "breed");
// Dog.prototype.bark = function(){
//     console.log("woof!");
// }





// function Vehicle(){

// }

// Vehicle.prototype.drive = function(){
//     console.log("Driving a vehicle");
// }

// function Car(){

// }
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
// Car.prototype.drive = function(){
//     console.log("Driving a car");
// }

// var vehicle = new Vehicle();
// var car = new Car();
// vehicle.drive();
// car.drive();

// console.log(car instanceof(Vehicle));




// function A(){}
// A.prototype.foo = 10;

// function B(){

// }
// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;
// B.prototype.foo = 20;

// function C(){

// }
// C.prototype = Object.create(B.prototype);
// C.prototype.constructor = C;
// C.prototype.foo = 30;

// var obj1 = new A();
// var obj2 = new B();
// var obj3 = new C();

// console.log(obj1.foo);
// console.log(obj2.foo);
// console.log(obj3.foo);




// var obj2 = {
//     a: 1,
//     b: {
//         c: 2,
//         d: [3, 4]
//     }
// }

// function deepClone(obj) {
//     if (obj === null || typeof obj != 'object') {
//         return obj;
//     }
//     let clone = Array.isArray(obj) ? [] : {};

//     for (var key in obj) {

//         if (obj.hasOwnProperty(key)) {
//             console.log(key, obj[key]);
//             clone[key] = deepClone(obj[key]);
//         }
//     }
//     return clone;
// }
// console.log(deepClone(obj2));




// class Teacher {
//     constructor(name, channel) {
//         this.name = name;
//         this.channel = channel;
//     }
//     intro() {
//         return `Hey, it's ${this.name}! Welcome to my ${this.channel}`;
//     }
// }

// const roadsidecoder = new Teacher("Piyush", "Roadsidecoder");

// console.log(roadsidecoder);


// function Teacher(name,channel,likes = 0){
//   this.name = name;
//   this.channel = channel;
//   this.likes = likes;

// }

// Teacher.prototype.likeVideo = function(){
//     this.likes++;
//     return `Liked this video! current likes: ${this.likes}`
// }




// class YouTubeTeacher extends Teacher {
//     constructor(name, channel, likes, subscriber) {
//         super(name, channel, likes);
//         this.subscriber = subscriber;
//     }
//     subscribersCount() {
//         return `${this.channel} has ${this.subscriber} subscribers`;
//     }
// }

// const ytTeacher = new YouTubeTeacher("Piyush", "Roadsidecoder", 69, "90k");
// console.log(ytTeacher);

// class calc {
//     constructor() {
//         this.num = 0
//     }
//     add(number) {
//         this.num = this.num + number;
//         return this;
//     }
//     subtract(number) {
//         this.num = this.num - number;
//         return this;
//     }
//     multiply(number) {
//         this.num = this.num * number;
//         return this;
//     }
//     divide(number) {
//         this.num = this.num / number;
//         return this;
//     }
//     getResult() {
//         return this.num;
//     }
// }

// const calcu = new calc(10);
// const result = calcu.add(10).subtract(5).multiply(2).divide(4).getResult();
// console.log(result);


// class Shape{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }
//     area(){
//         return this.width * this.height;
//     }
// }

// class Circle extends Shape{
//     constructor(radius){
//         super();
//         this.radius = radius;
//     }
//     area(){
//         return Math.PI * this.radius ** 2;
//     }
// }

// class Square extends Shape{
//     constructor(side){
//         super();
//         this.side = side;
//     }
//     area(){
//         return this.side ** 2;
//     }
// }


// class Teacher {
//     constructor(name, channel) {
//         this.name = name;
//         this.channel = channel;
//         this._videoLikes = 0;
//     }
//     get videoLikes(){
//         return this._videoLikes;
//     }
//     set videoLikes(likes){
//         if(likes < 0){
//             throw new Error("error")
//         }
//         this.likes = likes;
//     }
//     intro() {
//         return `Hey, it's ${this.name}! Welcome to my ${this.channel}`;
//     }
// }

// let t = new Teacher("Piyush","roadsidecoder");


//event loop


// blockMainThread();

// console.log("Start");

// function blockMainThread() {
//     const start = Date.now();
//     while (Date.now() - start < 3000) {
//         console.log("running...");
//     }

// }
// console.log("End");
//running...
//Start
//End



function pause(millis) {
    return new Promise(function p(resolve) {
        setTimeout(function s() {
            resolve("resolved");
        }, millis);
    })
}

const start = Date.now();
console.log("Start");

pause(1000).then((res) => {
    const end = Date.now();
    const secs = (end - start) / 1000;
    console.log(res, ":", secs);
});

//call stack - start, pause(1000) 
//task queue - s
//microtask queue - p