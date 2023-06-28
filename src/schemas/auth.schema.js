import {z} from 'zod';

export const registerSchema = z.object({
    email: z.string({
         required_error: "Invalid email address, please try again.",
    }).email({
        required_error: "Invalid email address, please try again.",
    }),
    password: z.string({
        required_error: "Invalid password, please try again.",
    }).min(6,{
        required_error: "Invalid password, please try again.",
    }).max(20),
    username: z.string({
        required_error: "Invalid username, please try again.",
    }).min(3).max(20)


})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Invalid email address, please try again.",
    }).email({
        required_error: "Invalid email address, please try again.",
    }),
    password: z.string({
        required_error: "Invalid password, please try again.",
    }).min(6,{
        required_error: "Invalid password, please try again.",
    }).max(20),
})
