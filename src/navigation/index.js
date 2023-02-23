import React, {
    useMemo,
    useState,
    useEffect
}                                     from 'react';

import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ROUTES                         from '../constants/Routes';
import MainStack                      from './MainStack';

const StackNavigation = createNativeStackNavigator();

const screenOptions = {
    headerShown    : false,
    gestureEnabled : false
};

function Navigation() {
    const stack = useMemo(() => {
        return (
            <StackNavigation.Screen
                name      = {ROUTES.MAIN_STACK}
                component = {MainStack}
                options   = {screenOptions}
            />
        );
    }, []);

    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                {stack}
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export { Navigation };
