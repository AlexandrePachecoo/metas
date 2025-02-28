import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import Home from "../pages/Home";
import Calendario from "../pages/Calendario";

const AppTab = createBottomTabNavigator();

function AppRoutes() {
    return (
        <AppTab.Navigator
            screenOptions={{
                tabBarStyle: {backgroundColor: "#2D3250"},
                tabBarActiveTintColor: "#E9CBA7",
                tabBarInactiveTintColor: "#F2F5FF",
            }}>
            <AppTab.Screen
                name="Tarefas"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="checkmark"
                                color={color}
                                size={size}
                            />
                        );
                    },

                }}
            />
            <AppTab.Screen
                name="Calendario"
                component={Calendario}
                options={{
                    headerShown: false,
                }}
            />

        </AppTab.Navigator>
    )
}

export default AppRoutes;