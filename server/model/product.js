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


export {Product}
