import EventEmitter from "events";
//we can create an event and can run it any time we want
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("waterFull", ()=>{
    console.log("Turn off the motor");
    setTimeout(()=>{
        console.log("gentle reminder? please turn it off")
    }, 3000)
})

console.log("The script is running");
console.log("The script is still running");
myEmitter.emit("waterFull");