const { response, request } = require("express");
const exp=require("express");
const app=exp();
app.listen(4000,()=>console.log("server listening on port 4000..."))

const path=require("path")
app.use(exp.static(path.join(__dirname,'./build')))


const mClient = require("mongodb").MongoClient;

mClient.connect('mongodb://0.0.0.0:27017')
.then(dbRef=>{
    let dbObj=dbRef.db('demodb')


    let userCollection=dbObj.collection("userCollection")

    let productsCollection=dbObj.collection("productsCollection")

    
    app.set("userCollection",userCollection);

    app.set("productsCollection",productsCollection);

    console.log("connected to database successfully");

})
.catch(err=>console.log("database error is",err))









const userApp=require("./Apis/userApi");
const productApp=require("./Apis/productApi");
const { DBRef } = require("mongodb");

app.use('/user-api',userApp);

app.use('/product-api',productApp)


const invalidPath=(request,response,next)=>{
    response.send({message:"Invalid path"})
}

app.use(invalidPath)

const errHandler=(error,request,response,next)=>{
response.send({"error-message":error.message})
}

app.use(errHandler) 