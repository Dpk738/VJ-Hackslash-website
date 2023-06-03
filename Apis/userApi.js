const exp=require("express")
const { Db } = require("mongodb")
const userApp=exp.Router();

const expressAsync=require('express-async-handler');
const { request, response } = require("express");
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
userApp.use(exp.json())
const verifyToken=require("./middlewares/VerifyToken")



userApp.post("/register-user",expressAsync(async(request,response)=>{

    const userCollectionObj=request.app.get("userCollection");

    const newUser=request.body;

    const userOfDB= await userCollectionObj.findOne({username:newUser.username})


    if(userOfDB!=null){
        response.status(200).send({message:"user already exists"})
    }

    else{

        let hashpwd=await bcryptjs.hash(newUser.password,6)
        newUser.password=hashpwd;

        await userCollectionObj.insertOne(newUser) 
        response.status(200).send({message:"user registerd"})
    }


   

}))




userApp.get("/get-user/:username",verifyToken,expressAsync(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollection");
    let usernameOfUrl=request.params.username;


    let user=await userCollectionObj.findOne({username:usernameOfUrl})

    response.status(200).send({message:"User is",payload:user})
}))


userApp.delete("/delete-user/:username",verifyToken,expressAsync(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollection");
    let usernameOfUrl=request.params.username;

    await userCollectionObj.deleteOne({username:usernameOfUrl})

    response.status(200).send({message:"User is deleted"})
}))


userApp.post('/login-user',expressAsync(async(request,response)=>{

    const userCollectionObj=request.app.get("userCollection");

    const userCredentialObj=request.body;

    let userOfDB=await userCollectionObj.findOne({username:userCredentialObj.username});

    if(userOfDB===null){
        response.status(200).send({message:"invalid username"})
    }

    else{
        let isEqual= await bcryptjs.compare(userCredentialObj.password,userOfDB.password);

        if(isEqual===false){
            response.status(200).send({message:"invalid password"})
        }
        else{
           let signedJWTtoken= jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:30})
           response.status(200).send({message:"success",token:signedJWTtoken,user:userOfDB})
    }
}
   

   

}))

userApp.get('/test',verifyToken,(request,response)=>{
    response.send({message:"reply from protected route"})
})




module.exports=userApp;


