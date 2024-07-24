const express = require("express")
const { productRoute } = require("./routers/products.routes")

const app = express()

app.use("/product", productRoute)
module.exports ={app}