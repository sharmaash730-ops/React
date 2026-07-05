import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Ashish");
    return (
        <div style={{backgroundColor:"blue", padding:"20px"}}>
            <h1>user provider</h1>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}