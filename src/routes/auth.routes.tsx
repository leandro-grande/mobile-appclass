import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "../screens/SignUp";
import { SignIn } from "../screens/SignIn";
import { ProfileSignUp } from "../screens/ProfileSignUp";
import { Messages } from "../screens/Messages";
import { SendMessage } from "../screens/sendMessage";


const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
      <Screen name="profileSignUp" component={ProfileSignUp} />
      <Screen name="sendMessage" component={SendMessage} />
    </Navigator>
  )
}