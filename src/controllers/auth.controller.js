import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import {createAccesToken  } from "../libs/jwt.js";
export const register = async (req, res) => {
    const { email, password, username } = req.body
    try {
        const passwordHash = await bcryptjs.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        const userSave = await newUser.save()
        console.log(userSave);
        const token= await createAccesToken({id:userSave._id})
        res.cookie("token",token)
 /*        res.json({
            message:"usuario creado "
        }) */
         res.json({
            id: userSave._id,
            username: userSave.username,
            email: userSave.email,
            createdAt: userSave.createdAt,
            updatedAt: userSave.updatedAt
        }) 
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

}

export const login = (req, res) => {
    res.send("login")
    console.log("login");
}