export const validateSchema= (schema) => (req, res, next) =>{
    try {

        schema.parse(req.body)
        next()
    } catch (error) {
        console.log(error.errors.map((err)=>err.message));
        return res.status(400).json(errors.map((err)=>err.message))
    }
}