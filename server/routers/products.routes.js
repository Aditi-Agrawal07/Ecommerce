import  express from 'express'
import {productController} from './../controllers/product.controller.js'
const router = express.Router()

router.post("/addProducts", productController.addProducts)

export {router as productRoute}