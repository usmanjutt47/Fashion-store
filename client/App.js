import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; 
import Login from "./src/auth/Login";
import SignUp from "./src/auth/SignUp";
import OnBoarding from "./src/splash/OnBoarding";
import Home from "./src/screens/Home";
import ForgotPassword from "./src/screens/ForgotPassword";
import Cart from "./src/TabsScreens/Cart";
import Profile from "./src/TabsScreens/Profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconComponent;

            if (route.name === "HomeStack") {
              iconComponent = (
                <Image
                  source={require("./assets/icon/home.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            } else if (route.name === "Cart") {
              iconComponent = (
                <Image
                  source={require("./assets/icon/cart.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            } else if (route.name === "Profile") {
              iconComponent = (
                <FontAwesome5 name="user-alt" size={size} color={color} />
              );
            }

            return iconComponent;
          },
          tabBarActiveTintColor: "#3AA2ED",
          tabBarInactiveTintColor: "#B2BAC2",
          tabBarStyle: {
            backgroundColor: "transparent", 
            borderTopWidth: 0, 
            elevation: 0,
          },
          tabBarLabel: () => null,
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
