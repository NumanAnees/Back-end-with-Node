const fs = require("fs");
//-------------------------------- write in a file ------------------------------
// fs.writeFile("MyfileASync.txt","Writing in a file using async",(err)=>{
//     console.log("File has been created :)")
//     console.log(err);
// });
//--------------------------------- append in a file-----------------------------

// fs.appendFile("MyfileASync.txt","Appending new datat ",(err)=>{
//     console.log(" Appended sucessfully");
//     console.log(err)
// });

//------------------------------------Reading from file----------------------------
fs.readFile("MyfileASync.txt","UTF-8",(err,data)=>{
    console.log(data);
    console.log(err)
})