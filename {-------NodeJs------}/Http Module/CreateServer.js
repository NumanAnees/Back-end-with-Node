const http = require("http");
const os = require("os");
const name= os.hostname();

const server = http.createServer((req,res)=>{
   res.end(`hello from the server dear ${name}`);
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port")
})
