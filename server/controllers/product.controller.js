import { response } from "express"
import { Product } from "../model/product.js"

export const productController = {
    addProducts: async (request, response, next) => {
        try {
            const requestBody = req.body

            console.log(requestBody)
        } catch (err) {
            console.log("Error while adding product", err)
        }

    },

    getProducts: async (request, response) => {
        try {
            const product = await Product.find();
            if(!product){
                return response.status(404).json({message:"Product Not Found "})
            }
            response.json(product)
            const requestBody = req.body

            console.log(requestBody)
        } catch (err) {

            console.error("Error while geting product", err);
            response.status(500).json({message:'Server Error'});
        }

    },
      
}