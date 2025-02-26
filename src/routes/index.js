import React, { useTransition } from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebaseConnection"

import AuthRoutes from "./auth.routes"

function Routes(){
const loading = false;
const signed = false;


return(
    signed ? <View><Text>Ola mundo</Text></View> : <AuthRoutes/>
)
}

export default Routes;