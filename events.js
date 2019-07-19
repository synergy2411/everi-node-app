const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();
const Stream = require("stream").Stream;
const Readable = require("stream").Readable;

// console.log(new Stream() instanceof EventEmitter);
// console.log(new Readable() instanceof EventEmitter);


process.on("exit", (code) => {
    console.log("EXITING");
})

process.on("uncaughtException", (err) => {
    console.log("Caught : ", err);
})

nonExistFunc();

process.exit(1);



// on : handle the trigger event
// emit : produce the event

//Multiple subcription
// let handler = () => {
//     console.log("Handler executed.")
// }

// emitter.on("bar", handler);
// emitter.on("foo", handler);

// emitter.on("foo", ()=>{
//     console.log("Foo event triggered");
// })

// emitter.emit("foo");
// emitter.emit("bar");

// emitter.setMaxListeners(25);            // setting maximum limit for listeners

// emitter.on("removeListener", () => {            // fires on unsubscribing
//   console.log("Remove listener");
// });
// emitter.on("newListener", () => {               // fires on subscribing
//   console.log("Add listener");
// });

// let handler = req => {
//   console.log("Handler executed with " + req.id);
//   emitter.removeListener("foo", handler);           // Unsubscribing
// };

// for (let i = 0; i < 20; i++) {              // memory leak detection
//   emitter.on("foo", handler);
// }

// emitter.emit("foo", { id: 3 });
// emitter.emit("foo");


