import mongoose, { Schema } from 'mongoose'
const productSchema = new Schema({
    product_image: { type: String },
    product_name: { type: String },
    description: { type: String },
    category: { type: String },
    size: {
        type: String,
        enum: ['XS', 'S','M','L','XL','XXL']
    },
    color: { type: [String] },
    price: { type: Number },
    rating: { type: Number },
    discount: { type: Number }

})

const Product = new mongoose.model("Product", productSchema)

<<<<<<< HEAD

export {Product}
=======
export {Product}
>>>>>>> 91fc26841342e160825dbaa0cef784a934c12a07
