const http = require("http");
const reportData = require("./data/reportData");

const PORT = 5000;

const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/api/speaking-report") {
        res.writeHead(200);
        res.end(JSON.stringify(reportData));
    } 
    else if (req.method === "GET" && req.url === "/") {
        res.writeHead(200);
        res.end(
            JSON.stringify({ message: "Speaking Assessment API is running" })
        );
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
