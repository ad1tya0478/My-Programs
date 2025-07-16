// Async Await:- 
// Async - Marks a function as asynchronous, always return a Promise
// Await - Waits for the Promise to settle(resolve, reject), and returns its result.


// Problems With the promise 
const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("I am a promise");
    }, 2000)
});
promise.then((x) => console.log(x)); 

// Syntax
// if we use async key word before a function and then run it, it will always return a promise
// so, here we are returning 101, so async will wrap this 101 into a promsie, like this - Promise { 101 }

// return Promise.resolve(101) - it will return Promise { <pending> }
// return 101 - in this it will return the 101 wrapped in promise 
async function fool(){
    return Promise.resolve(101);
}

// instead of doing this //
// fool().then(function(result) {
//     console.log(result);
// });

// you can do this - we can you use await because it will also print only the result that we were doing with .then, so intead of using 
// .then() all the time you can use await to get the result. so to use it just use the await, in front of the async funation, to get the result(resolve)

// const result = await fool();
// console.log(result);

// we cannot use await outside of a async function, so in the upper case you can put the await into another async function to execute 
// in simple words you cannot use await function globally 
// if we don't put it correctly, it will give a syntax error in the console

async function tackle() {
    const result = await fool();
    console.log(result);
}
console.log(tackle());  // now it will give you a promise with pending and undefined value, because you are logging a promise not the result of it 
//                         because tackle() is async, it reutnrs a promise not the result

