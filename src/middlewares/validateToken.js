
import { TOKEN_KEYSECRET } from "../config.js";
import jwt from "jsonwebtoken";
export const authRequired=(req,res,next)=>{

    console.log("validating toke");

    const {token}=req.cookies
    if(!token){
        return res.status(401).json({
            message:"no token"
        })
    }

    jwt.verify(token,TOKEN_KEYSECRET,(err,user)=>{
        if(err) return res.status(403).json({message:"invalde token"})
        req.user=user
        console.log(user);
        next()
    })



}