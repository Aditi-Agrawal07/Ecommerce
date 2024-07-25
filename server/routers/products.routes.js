import  express from 'express'
import {productController} from './../controllers/index.js'
// import {multer} from './../middleware/multer.middleware.js'
const router = express.Router()

router.post("/addProducts", productController.addProducts)


export {router as productRoute}