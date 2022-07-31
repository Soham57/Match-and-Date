import React from "react";
import { Button, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/userAuth";

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </TailwindProvider>
  );
}
