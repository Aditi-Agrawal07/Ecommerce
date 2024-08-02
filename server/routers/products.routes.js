import  express from 'express'
import {productController} from './../controllers/product.controller.js'

const router = express.Router()

router.post("/addProducts", productController.addProducts)
router.get("/getProducts" ,  productController.getProducts)
// router.get("/getPoduct/:id" , productController.getProductID)
export {router as productRoute}