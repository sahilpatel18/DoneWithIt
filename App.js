import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput,Switch } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
]

export default function App() {
const [category, setCategory] = useState(categories[0])
  return (
 <LoginScreen />
  );
}
