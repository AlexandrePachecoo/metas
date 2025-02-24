import React from 'react';
import { StatusBar } from 'react-native';
import { auth } from './src/firebaseConnection';

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffff" barStyle="dark-conten"/>
      <Routes />
    </NavigationContainer>
  );
}

