
import {TOKEN_KEYSECRET} from "../config.js";

import jwt from "jsonwebtoken"; 
export function createAccesToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_KEYSECRET, {
            expiresIn:"1d"
    },
        (error,token)=>{
            if (error) {
                reject()
            }
            resolve(token)
            // res.json({token})
        }
    ) 
    })
 
}
