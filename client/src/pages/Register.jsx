import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";


function RegisterPage() {

    const { register ,handleSubmit} = useForm();
    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md my-2">
            <form 
            onSubmit={handleSubmit(async (values) =>{
                console.log(values)
                const res= await registerRequest(values)
                console.log(res);
            })}>
                <input type="text" 
                {...register("username", { required: true })}
                className="text-blue"
                placeholder="username"/>
                <input type="email" 
                {...register("email", { required: true })}
                 className="w-full bg-zinc-700 text-blue px-4 py-2 rounded-md" 
                 placeholder="email" />
                <input type="password" 
                {...register("password", { required: true })}
                 className="w-full bg-zinc-700 text-blue px-4 py-2 rounded-md"
                 placeholder="password"
                />
                <button type="submit" className="bg-zinc-600 text-yellow-400">
                    Registerr
                </button>
            </form>

        </div>
    )
}

export default RegisterPage;