import express from 'express'
import { productController } from '../controllers/product.controller'
const router = express.Router()

router.post("/addProducts", productController)

export {router as productRoute}