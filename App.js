import React from 'react';
import { StatusBar } from 'react-native';
import { auth } from './src/firebaseConnection';

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>

      <StatusBar backgroundColor="#ffff" barStyle="dark-conten"/>
      <Routes />
      
      </AuthProvider>
    </NavigationContainer>
  );
}

