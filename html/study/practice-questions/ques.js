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

let nums = 1534236469;
let rev = 0;
var reverse = function(x) {
    let num = x;
    while(num!=0){
        rev = rev * 10 + (num%10);
        num = num/10 | 0;
    }
};
reverse(nums);
console.log(rev);
