import { NavigationContainer } from "@react-navigation/native"
import { AuthRoutes } from "./auth.routes"
import { useAuth } from "../contexts/useAuth"
import { Home } from "../screens/Home";


export const Routes = () => {

  const { user } = useAuth();

  return (
    <NavigationContainer>
      { user?.email ? <Home/> : <AuthRoutes /> }
    </NavigationContainer>
  )
}