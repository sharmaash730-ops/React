import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogin,setLogin] = useState(false);

    const login = () => setLogin(true);
    const logout = () => setLogin(false);

    return(
        <AuthContext.Provider value={{isLogin,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth =() => useContext(AuthContext);