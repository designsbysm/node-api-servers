const http = require("http");
const yargs = require("yargs");

// const port = process.argv.slice(2)[0];
const port = yargs.argv.port;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "Hello World!" }));
  res.end();
})
  .listen(port);

console.info("http server listening on %s", port);
