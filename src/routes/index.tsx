import { NavigationContainer } from "@react-navigation/native"
import { AuthRoutes } from "./auth.routes"
import { useAuth } from "../contexts/useAuth"
import { Home } from "../screens/Home";
import { ProfileSignUp } from "../screens/ProfileSignUp";


export const Routes = () => {

  const { user } = useAuth();

  const isUserProfileSignUp = user.pessoaId !== null;

  return (
    <NavigationContainer>
      { (user.email && user.pessoaId) ? <Home/> : 
          !user.email ? <AuthRoutes /> : <ProfileSignUp /> }
    </NavigationContainer>
  )
}