const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("data.txt");
  rstream.on("data", (data) => {
    res.write(data);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", (err) => {
    console.log(err);
    res.write("not found");
  });
});
server.listen(8000, "127.0.0.1");
