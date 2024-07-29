import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Login from "./src/auth/Login";
import SignUp from "./src/auth/SignUp";
import OnBoarding from "./src/splash/OnBoarding";
import Home from "./src/screens/Home";
import Cart from "./src/TabsScreens/Cart";
import Profile from "./src/TabsScreens/Profile";
import ProductDetail from "./src/screens/ProductDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="OnBoarding"
    >
      <Stack.Screen name="Auth" component={AuthOrMainScreen} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="ProductDetails" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function AuthOrMainScreen({ navigation }) {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const status = await AsyncStorage.getItem("onboardingComplete");
        setIsOnboardingComplete(status === "true");
      } catch (error) {
        console.error(error);
      }
    };

    checkOnboardingStatus();
  }, []);

  useEffect(() => {
    if (isOnboardingComplete) {
      navigation.replace("HomeStack");
    }
  }, [isOnboardingComplete, navigation]);

  if (!isOnboardingComplete) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }

  return null;
}

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = require("./assets/icon/home.png");
          } else if (route.name === "Cart") {
            iconName = require("./assets/icon/cart.png");
          } else if (route.name === "Profile") {
            return <FontAwesome5 name="user-alt" size={size} color={color} />;
          }

          return (
            <Image
              source={iconName}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: "#3AA2ED",
        tabBarInactiveTintColor: "#B2BAC2",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
