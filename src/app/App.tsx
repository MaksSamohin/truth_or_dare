import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import MenuScreen from "./screens/MenuScreen";
import GameModesScreen from "./screens/GameModesScreen";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { createStackNavigator } from "@react-navigation/stack";
import StartGameScreen from "./screens/StartGameScreen";
import GameCardScreen from "./screens/GameCardScreen";
import { RootStackParamList } from "./utils/types";

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
              animation: "slide_from_left",
            }}
          />
          <Stack.Screen
            name="GameModes"
            component={GameModesScreen}
            options={({
              route,
            }: {
              route: RouteProp<RootStackParamList, "GameModes">;
            }) => ({
              headerShown: false,
              animation:
                route.params?.fromScreen === "Menu"
                  ? "slide_from_right"
                  : "slide_from_left",
            })}
          />
          <Stack.Screen
            name="StartGame"
            component={StartGameScreen}
            options={({
              route,
            }: {
              route: RouteProp<RootStackParamList, "StartGame">;
            }) => ({
              headerShown: false,
              animation:
                route.params?.fromScreen === "GameCard"
                  ? "fade"
                  : "slide_from_right",
            })}
          />
          <Stack.Screen
            name="GameCard"
            component={GameCardScreen}
            options={({
              route,
            }: {
              route: RouteProp<RootStackParamList, "GameCard">;
            }) => ({
              headerShown: false,
              animation:
                route.params?.fromScreen === "StartGame"
                  ? "slide_from_right"
                  : "fade",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
