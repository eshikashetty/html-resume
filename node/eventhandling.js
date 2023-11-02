const EventEmitter = require("events");

const myEmitter = new EventEmitter();

function onCustomEvent(data) {
  console.log("Custom event was triggered with data:", data);
}

myEmitter.on("customEvent", onCustomEvent);

myEmitter.emit("customEvent", { message: "Hello, world!" });

myEmitter.off("customEvent", onCustomEvent);

myEmitter.emit("customEvent", { message: "This won't be printed" });

/*const EventEmitter = require('events');

// Create a new event emitter instance
const myEmitter = new EventEmitter();

// Register an event listener for the "customEvent"
myEmitter.on('customEvent', (message) => {
  console.log('Received:', message);
});

// Emit the "customEvent" with a message
myEmitter.emit('customEvent', 'Hello, EventEmitter!');
*/