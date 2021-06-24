const os = require("os");

console.log(os.arch());
console.log(os.hostname());
let freeMemory = os.freemem();
freeMemory = (freeMemory/1024/1024/1024);
console.log(freeMemory);
console.log(os.type());