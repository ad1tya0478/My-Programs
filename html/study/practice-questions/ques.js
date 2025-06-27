// const strs = "(){}";

// var isValid = function(s) {
//         let flag = false;
//     for(let i=0;i<s.length;i++){
//         if(s[i] === '('){
//                 if(s[i+1] === ')'){
//                 flag = true;
//             } else {
//                 flag = false;
//                 continue;
//             }
//         } else if(s[i] === '['){
//             if(s[i+1]===']'){
//                 flag = true;
//             } else {
//                     flag = false;
//                 continue;
//             }
//         } else if(s[i]==='{'){
//             if(s[i+1]==='}'){
//                     flag = true;
//                 } else {
//                         flag = false;
//                 continue;
//             }
//         } else if(s[i]===')' && flag!=true) {
//             flag = false;
//         } else if(s[i]===']' && flag!=true){
//                 flag = false;
//         } else if(s[i]==='}' && flag!=true){
//             flag = false;
//         }
//     }
//     return flag;
// };



// const stack = [];
//    const map = {
//     ')' : '(',
//     ']' : '[',
//     '}' : '{'
//    };

//    for(let i of s){
//     if(i==='(' || i==='[' || i==='{'){
//         stack.push(i);
//     } else {
//         if(stack.pop() !== map[i]) return false;
//     }
//    }
// return stack.length===0;

// var createHelloWorld = function () {
//     return function () {
//         return "Hello World"
//     }
// };



// let nums = [2,7,11,15];
// let target = 9;
// let twoSum = function(nums,target) {
//     for(let i = 0;i<nums.length;i++){
//         for(let j = i+1;j<nums.length;j++){
//             if (nums[i] + nums[j] == target){
//                 return [i,j];
//             }
//         }
//     }   
// };


// function isEven(num) {
//     if (num%2 == 0){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// isEven(7);

// let revstr = "";
// const string = "hi"; 
// function reverseString(str) {
//     for(let i = str.length - 1; i >= 0; i--){
//         revstr = revstr + str.charAt(i);
//     }
// }
// reverseString(string);
// console.log(revstr);


// let arr = [2,4,5,45,5]
// let max = arr[0];
// function findMax(arr) {
//     for(let i = 0;i<arr.length;i++){
//         if(max < arr[i]) max = arr[i];
//     }
// }
// findMax(arr);
// console.log(max);


// const student = {
//     name: "aditya",
//     age: 19,
//     marks: "34"
// }
// const greet = (object) => {
//     console.log("hi my name is "+ student.name);
// }
// greet(student);


// function countKeys(obj){
//     return Object.keys(student).length;
// }
// console.log(countKeys());

// delete student.marks;
// console.log(student);
// student.grades = 'A';
// console.log(student);

// let arr = [1,2,3,4,5]
// let sum = 0;
// function sumArray(arr) {
//     for(let i = 0;i<arr.length;i++){
//         sum += arr[i];
//     }
// }
// sumArray(arr);
// console.log(sum);

// let arr = [1,2,3,4,5,6]
// let evenArr = [];
// const filterEven = (arr) => {
//     for(let i = 0; i<arr.length;i++){
//         if (arr[i] % 2 == 0){
//             evenArr.push(arr[i]);
//         }
//     }
// }
// filterEven(arr);
// console.log(evenArr);


// let arr = [1,2,3,4,5,6,99];
// let target = 99;
// const isPresent = (arr, target) => {
//     for(let i of arr) {
//         if(i == target) return true; 
//     }
//     return false; 
// }
// console.log(isPresent(arr, target));

// const users = [
//     {name: "Aditya", age: 23},
//     {name: "Anirudh", age: 78},
//     {name: "abhi", age: 89}
// ];
// let arrName = [];
// const ArrayName = (name)  => {
//     for(let i of name){
//      arrName.push(i.name);
//     }
// }
// ArrayName(users);
// console.log(arrName);

// let nums = 1534236469;
// let rev = 0;
// var reverse = function(x) {
//     let num = x;
//     while(num!=0){
//         rev = rev * 10 + (num%10);
//         num = num/10 | 0;
//     }
// };
// reverse(nums);
// console.log(rev);

// const names = ["Walt", "Jesse", "Saul"];
// const doubled = names.map((num) => "Mr." + num);
// console.log(doubled);


// const nums = [5,7,56,78,23,10];
// const greater = nums.filter((num) => num >= 10);
// console.log(greater);

// const bills = [100,250,50,600];
// const total = bills.reduce((acc, val) => acc + val);
// console.log(total);

// const words = ["cook","meth","blue","heisenberg"];
// let uppercase = words.filter(word => word.length > 4)
// .map(word => word.toUpperCase());
// console.log(uppercase);

// const fruits = ["apple", "banana","cherry"];
// const number = fruits.map((num, index) => index +":" + num );
// console.log(number);

// const users = [
//     {name: "walt", isActive: true},
//     {name: "jesse", isActive: false},
//     {name: "skyler", isActive: true},
// ];
// const active = users.filter((users) => {
//     if (users.isActive) {
//         return users.name;
//     }
// });
// console.log(active);

// const words = ["blue", "meth","blue", "cook", "blue"];
// const rep = words.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
// }, {} );
// console.log(rep);

// Conatiner With most water problem 
// var maxArea = function(height) {
//     let maxWater = 0;
//     let lp = 0, rp =  height.length-1;

//     while(lp < rp ){
//         let width = rp - lp ;
//         let ht = Math.min(height[lp], height[rp]);
//         let curtWater = width * ht;

//         maxWater = Math.max(maxWater, curtWater);

//         height[lp] < height[rp] ? lp++ : rp--;
//     }
// };

// const prices = [100, 200, 300];
// const tax = prices.map((num) =>  num + (num * 0.18) );
// console.log(tax);


// const strings = ["cook", "meth", "", "blue",""];
// const out = strings.filter((num) => num !== "");
// console.log(out);

// const nums = [5, 12, 8, 130, 44];
// const W = nums.reduce((acc, curr) => {
//     return acc > curr ? acc : curr ;
// });
// console.log(W);

// const people = [
//     {name: "walt", age: 50},
//     {name: "jesse", age: 25},
//     {name: "mike", age: 60}
// ]
// const ret = people 
//      .filter(person => person.age > 40)
//      .map(person => person.name + " is " + person.age);
// console.log(ret);

