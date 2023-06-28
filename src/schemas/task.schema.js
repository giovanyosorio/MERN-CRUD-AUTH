import {z} from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
            required_error: "Invalid title, please try again.",
        }).min(3,{
            required_error: "Invalid title, please try again.",
        }).max(20),
    description: z.string({
            required_error: "Invalid description, please try again.",
        }).min(3,{
            required_error: "Invalid description, please try again.",
        }).max(20),
    date: z.string().datetime().optional()

})