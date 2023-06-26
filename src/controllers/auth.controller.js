import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";



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
        const token = await createAccesToken({ id: userSave._id })
        res.cookie("token", token)
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
            message: error.message
        })
    }

}

export const login = async (req, res) => {

    console.log("login");
    const { email, password } = req.body
    try {

        const userFound = await User.findOne({ email })

        if (!userFound) {
            return res.status(400).json({ message: "user not found" })
        }
        const isMatch = await bcryptjs.compare(password, userFound.password)

        if (!isMatch) {
            return res.status(400).json({ message: "incorrect password" })
        }

        const token = await createAccesToken({ id: userFound._id })
        res.cookie("token", token)
        /*        res.json({
                   message:"usuario creado "
               }) */
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    //console.log(req.user);
    
    const userFound=await User.findById(req.user.id)
    
    if(!userFound) return res.status(400).json({
        message:"user not found"
    })

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
    
}