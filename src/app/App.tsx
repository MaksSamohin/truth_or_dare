import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import MenuScreen from "./screens/MenuScreen";
import GameModesScreen from "./screens/GameModesScreen";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { createStackNavigator } from "@react-navigation/stack";
import StartGameScreen from "./screens/StartGameScreen";
import GameCardScreen from "./screens/GameCardScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Dongle-Bold": require("../../assets/fonts/Dongle-Bold.ttf"),
    "Dongle-Regular": require("../../assets/fonts/Dongle-Regular.ttf"),
    "Dongle-Light": require("../../assets/fonts/Dongle-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu" id={undefined}>
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          />
          <Stack.Screen
            name="GameModes"
            component={GameModesScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="StartGame"
            component={StartGameScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="GameCard"
            component={GameCardScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
