import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Calendario from "../pages/Calendario";

const AppTab = createBottomTabNavigator();

function AppRoutes() {
    return (
        <AppTab.Navigator>
            <AppTab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
               
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