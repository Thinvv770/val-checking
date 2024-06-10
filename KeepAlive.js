import http from "http";

function createServer() {
  return http.createServer((req, res) => {
    res.write("I'm alive");
    res.end();
  });
}

export default createServer;
