//E must be capital
const Eventlistener = require("events");
const event = new Eventlistener();
event.on("SayName", (fname, lname) => {
  console.log(`My first name is ${fname} and last name is ${lname}`);
});

event.emit("SayName", "Numan", "Anees");
