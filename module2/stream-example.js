import http from "http";
import fs from "fs";
import path from "path";

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.resolve("huge-file.txt");

    const stream = fs.createReadStream(filePath);

    res.writeHead(200, {
      "Content-Type": "text/plain",
    });

    stream.pipe(res);

    stream.on("error", (err) => {
      res.writeHead(500);
      res.end("Error reading file");
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

