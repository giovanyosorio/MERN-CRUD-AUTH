import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.id }).populate("user")
    res.json(tasks)
}

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate("user")
    if(!task) return res.status(404).json({message:"task not found"})
    res.json(task)
}
export const deleteTask = async (req, res) => {
    const taskDelete = await Task.findByIdAndDelete(req.params.id)
    if(!taskDelete) return res.status(404).json({message:"task not found"})
    console.log(taskDelete);
    return res.status(204)
}

export const createTask =async(req,res)=>{
    const {title,description,date}=req.body
    console.log(req.user)
        const newTask=new Task({
        title,
        description,
        date,
        user:req.user.id
    })
    const taskSave=await newTask.save()
    res.json(taskSave)
}

export const updateTask = async (req, res) => { 
    const { title, description } = req.body
    const taskUpdate = await Task.findByIdAndUpdate(req.params.id, {
        title,
        description,
        new:true
    })
    if(!taskUpdate) return res.status(404).json({message:"task not found"})
    res.json(taskUpdate)
    //console.log(taskUpdate.description);
}

