import React, { useTransition, useContext} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebaseConnection";
import {AuthContext} from "../contexts/auth";


import AuthRoutes from "./auth.routes"

function Routes(){
const loading = false;


const {user, setUser} = useContext(AuthContext)

return(
    user.signed ? <View><Text>Ola mundo</Text></View> : <AuthRoutes/>
)
}

export default Routes;