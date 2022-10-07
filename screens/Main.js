import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Notification, Plus, Profile, Search } from "./tabs";
import { View, Text } from "react-native";

import "./../ignoreWarnings";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Plus" component={Plus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
