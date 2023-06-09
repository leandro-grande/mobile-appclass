import { NavigationContainer } from "@react-navigation/native"
import { AuthRoutes } from "./auth.routes"
import { useAuth } from "../contexts/useAuth"
import { ProfileSignUp } from "../screens/ProfileSignUp";
import { Messages } from "../screens/Messages";
import { SendMessage } from "../screens/sendMessage";


export const Routes = () => {

  const { user } = useAuth();

  return (
    <NavigationContainer>
      { !user.email ? <AuthRoutes /> :  
      (!user.perfil && user.email) 
        ? <ProfileSignUp /> 
        : ( user.perfil === 'Aluno' ? <Messages /> : <SendMessage /> ) }
    </NavigationContainer>
  )
}