const http = require("http");
const os = require("os");
const name = os.hostname();

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(`hello from the Home Page dear ${name}`);
  } else if (req.url == "/About") {
    res.end(`hello from the About Page dear ${name}`);
  } else if (req.url == "/Contact") {
    res.end(`hello from the Contact Page dear ${name}`);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1> Error 404 </h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port");
});
