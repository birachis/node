const timeout = 100;

function callback(){
    console.log("This is SetTimeOut");
    console.log("Testing...");
}


// SetTimeOut
setTimeout(callback, timeout);

setTimeout(() => {
    console.log("This is arrow function with setTimeout")
}, timeout);

console.log("This is without setTimeout")