const http = require("http")
const app = require("./app")

// PORT
const port = 8000

const httpServer = http.createServer(app)

httpServer.listen(port , ()=>{
    console.log("Server Started")
})