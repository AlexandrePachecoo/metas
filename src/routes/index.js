import React, { useTransition, useContext} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebaseConnection";
import {AuthContext} from "../contexts/auth";


import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes(){
const loading = false;


const {user, setUser} = useContext(AuthContext)

return(
    user.signed ? <AppRoutes/> : <AuthRoutes/>
)
}

export default Routes;