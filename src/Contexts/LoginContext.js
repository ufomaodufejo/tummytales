import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null)

export const LoginContext = ({children}) => {
    const [user, setuser] = useState(null)
    const [cartItems, setcartItems] = useState([])
    console.log(cartItems)
    
    const login = (user) => {
        setuser(user)
    }

    const logout = () => {
        setuser(null)
    }
    
    const addtocart = (menu) => {
        setcartItems(prev => {
        const exist = prev.find((item) => item.id === menu.id);
            if(exist) {
              return prev.map((item) => item.id === menu.id ? {...exist, qty: exist.qty + 1} : item)
            } else {
              return [...prev, {...menu, qty: 1}]
            }
        })}

    return <AuthContext.Provider value={{user, login, logout, addtocart, cartItems}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}