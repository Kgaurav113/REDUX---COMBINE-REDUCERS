import { Login,Logout } from "./actiontypes";



export const login=(payload)=>{
    return{
        type:Login,
        payload
    }
}

export const logout=()=>{
    return{
        type:Logout,
    }
}