const fs = require("fs");
// fs.writeFileSync("write.txt", "Hello");
// You have to append otherwise it will overwrie
// fs.appendFileSync("write.txt", "World");
//an additional datatype  called buffer, store binary data when read  from file

// const buf_data = fs.readFileSync("write.txt");
// newData = buf_data.toString();
// console.log(newData);
// For renaming a file:

fs.renameSync("write.txt", "ReadWrite.txt");
