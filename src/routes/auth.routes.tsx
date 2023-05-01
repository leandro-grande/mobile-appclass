import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "../screens/SignUp";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";


const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
      <Screen name="home" component={Home} />
    </Navigator>
  )
}