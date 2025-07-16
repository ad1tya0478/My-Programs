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
fool().then(function(result) {
    console.log(result);
});
