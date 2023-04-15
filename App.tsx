import { Karla_400Regular, Karla_700Bold, Karla_500Medium, useFonts } from "@expo-google-fonts/karla";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { AuthContextProvider } from "./src/contexts/useAuth";

import { Loading } from "./src/components/Loading";

import theme from "./src/styles/theme";
import { Routes } from "./src/routes";


export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_500Medium,
    Karla_700Bold
  })


  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <AuthContextProvider>
         { fontsLoaded ? <Routes /> : <Loading /> }
      </AuthContextProvider>
    </ThemeProvider>
  );
}

