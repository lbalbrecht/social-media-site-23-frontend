import { createContext } from 'react'

type AuthContextProviderProps = {
    children: React.ReactElement
}

const token = window.sessionStorage.getItem("token")

export const AuthContext = createContext(token);

export const AuthProvider = ({children}: AuthContextProviderProps) => {
    return <AuthContext.Provider value = {token}>{children}</AuthContext.Provider>
}