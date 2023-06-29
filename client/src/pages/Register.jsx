import { appendErrors, useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";


function RegisterPage() {

    const { register ,handleSubmit,formState} = useForm();
    const {signup,user,isAuthenticated,errors:registerErrors} = useAuthContext();
    const navigate = useNavigate();
console.log(user);

useEffect(() => {
    if(isAuthenticated){
        navigate("/tasks");
        console.log("redirect to home page");
    }
}, [isAuthenticated])

    const onSubmit= handleSubmit(async (values) =>{
        await signup(values);
        console.log(values)

    })
    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md my-2">
            {
                registerErrors.map((error,index) => <span key={index} className="text-red-500">{error.msg}</span>
                )
            }
            <form 
            onSubmit={onSubmit}>
                <input type="text" 
                {...register("username", { required: true })}
                className="text-blue"
                placeholder="username"/>
                {
                    formState.errors.username && <span className="text-red-500">username is required</span>
                }
                <input type="email" 
                {...register("email", { required: true })}
                 className="w-full bg-zinc-700 text-blue px-4 py-2 rounded-md" 
                 placeholder="email" />
                 {
                    formState.errors.email && <span className="text-red-500">email is required</span>
                 }
                <input type="password" 
                {...register("password", { required: true })}
                 className="w-full bg-zinc-700 text-blue px-4 py-2 rounded-md"
                 placeholder="password"
                />
                {
                    formState.errors.password && <span className="text-red-500">password is required</span>
                }
                <button type="submit" className="bg-zinc-600 text-yellow-400">
                    Registerr
                </button>
            </form>

        </div>
    )
}

export default RegisterPage;