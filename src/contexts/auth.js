import React, {useState, createContext} from "react";

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const [user, setUser] = useState({
        nome: '',
        email: '',
        signed: false,
        uid: '',
    })

    return(
        <AuthContext.Provider value={{user, setUser}}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;