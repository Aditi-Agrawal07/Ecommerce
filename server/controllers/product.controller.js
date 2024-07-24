export const productController = {
    addProducts : async(request, response, next)=>{
        try{
const requestBody = req.body
console.log(requestBody)
        }catch(err){
            console.log("Error while adding product", err)
        }

    }
}