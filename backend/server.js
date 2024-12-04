const http = require("http")
const app = require("./app")

const port =process.env.serverPort || 5001;
const server = http.createServer(app)

server.listen(port,()=>{
    console.log("server is running on",port)
});