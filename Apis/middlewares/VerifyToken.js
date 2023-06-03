const jwt =require("jsonwebtoken");


const verifyToken =(request,response,next)=>{
    const bearerToken = request.headers.authorization;
    if(bearerToken===undefined){
        response.send({message:"unauthorized user"});
       }

       else{
        const token=bearerToken.split(" ")[1];

        try{
            jwt.verify(token,"abcdef");
            next();

        }
        catch(err){
                response.send({message:err});
        }
       }
}

module.exports=verifyToken;