const exp=require("express")
const productApp=exp.Router()


productApp.get("/get-products",(request,response)=>{
    response.send({message:"products data"})
})

productApp.post("/create-products",(request,response)=>{
    response.send({message:"products created"})
})

productApp.delete("/delete-products",(request,response)=>{
    response.send({message:"products deleted"})
})

module.exports=productApp;