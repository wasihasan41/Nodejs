import http from "http";
const port = process.env.PORT || 3000;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader = ("Content-Type", "text/html")
    res.end("<h1>hey</h1><p>for creating http servers</p>");
})
server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})