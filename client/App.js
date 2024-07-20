import React, { createContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/auth/Login";
import SignUp from "./src/auth/SignUp";
import OnBoarding from "./src/splash/OnBoarding";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export const FontContext = createContext();

export default function App() {
  const [fontsLoaded] = useFonts({
    GolosText: require("./assets/fonts/GolosText[wght].ttf"),
  });

  if (!fontsLoaded) {
    return null; // Show a loading spinner or some fallback UI here
  }

  return (
    <FontContext.Provider value={{ fontFamily: "GolosText" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoarding">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FontContext.Provider>
  );
}
