import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";

type ProviderProps = {
  children: ReactNode;
}

type User = {
  id: string
  email: string;
  pessoaId: string | null
}

type AuthContextData = {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  updateUser: (pessoaId: string) => void;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser]= useState({} as User);

  async function signIn(email: string, password: string) {

    try {
      const { data: user } = await api.post('/Identificacao/login', {
        email,
        password,
      });

      api.defaults.headers['Authorization'] = `Bearer ${user.token}`;

      console.log(user)
  
      setUser({
        id: user.usuario.id,
        email: user.usuario.email,
        pessoaId: user.usuario.pessoaId
      });
      

    } catch (error) {
      throw error;
    }
  }

  async function getUser(user_id: string) {
    
  }

  async function updateUser(pessoaId: string) {
    setUser(state => {
      return {...state, pessoaId}
    });
  }
  
  return (
    <AuthContext.Provider value={{ user, signIn, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}