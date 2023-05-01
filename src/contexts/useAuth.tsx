import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";

type ProviderProps = {
  children: ReactNode;
}

type User = {
  email: string;
}

type AuthContextData = {
  user: User;
  SignIn: (email: string, password: string) => Promise<void>;
  
}

const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser]= useState({} as User);

  async function SignIn(email: string, password: string) {

    try {
      const { data } = await api.post('/Identificacao/login', {
        email,
        password,
      });
  
      setUser({
        email
      });
  
      api.defaults.headers['Authorization'] = `Bearer ${data.token}`

    } catch (error) {
      throw error;
    }
  }
  
  return (
    <AuthContext.Provider value={{ user, SignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}