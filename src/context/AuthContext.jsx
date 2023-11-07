import { createContext, useContext, useState, useEffect } from "react";
import { registerRequest, loginRequest, logoutRequest } from "../api/auth";


export const AuthContext = createContext()

export const useAuth= ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be use within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState("")
    const [isAuthenticated, setIsAuthenticated]= useState(false)
    const [token, setToken]= useState("")
    const [registerErrors, setRegisterErrors]= useState("")
    const [registerSuccess, setRegisterSuccess]= useState(false)
    const [loginErrors, setLoginErrors]= useState("")
   

    const signup = async (values)=>{
        try{
            const res= await registerRequest(values)
            const info= res.data.payload
            setUser(info)
            setRegisterSuccess(true)
            setIsAuthenticated(true)
        }
        catch(e){
            setRegisterErrors(e.response.data.message);
        }
    }
    useEffect(() => {
        console.log(user.userName);
    }, [user])
    
    const login= async(values)=>{
        try{
            const res= await loginRequest(values)
            const info= (res.data)
            setUser(info)
            setToken(res.data.accessToken)
            setIsAuthenticated(true)
        }
        catch(e){
            setLoginErrors(e.response.data.message)
            
        }
    }
    useEffect(() => {
        console.log(user.userName);
    }, [user])

    
    const logout= async()=>{
        try{
            const res= await logoutRequest()
            setIsAuthenticated(false)
            setRegisterSuccess(false)
        }
        catch(e){

        }
    }
    return (
        <AuthContext.Provider value={{signup, user, login, isAuthenticated,registerErrors, registerSuccess, logout, loginErrors, token}}>
            {children}
        </AuthContext.Provider>
    )
}