import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './container/Home';
import Details from './container/Details';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} options={{ title: "Traveller Details" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;