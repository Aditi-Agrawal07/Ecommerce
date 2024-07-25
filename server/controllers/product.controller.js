import { Product } from "../model/product.js"
// import {Cloudinary} from './../utility/index.js'


export const productController = {
    addProducts: async(req, res) => {
      try{
        const requestBody = req.body

        //    const productImage = await Cloudinary.fileUpload(req.file.path)
    
           const product = await Product.create(requestBody)
    
           if(!product){
            return res.status(400).json({message: "Something went wrong"})
           }
           return res.status(200).json(product) 
      }catch(err){
        console.log(err)
      }

    },
    getProducts: (req, res)=>{
console.log("product get called")
    }
}