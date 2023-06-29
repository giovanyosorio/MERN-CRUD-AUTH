import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";
const AuthContext = createContext();


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within AuthProvider");
    }
    return context
};
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const signup = async (user) => {

        try {
            const res = await registerRequest(user)
            console.log(res.date);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data)
        }

    }

    return (
        <AuthContext.Provider value={{ signup, user, isAuthenticated ,errors}}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
