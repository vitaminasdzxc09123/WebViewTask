import React                      from 'react';
import { createStackNavigator }   from '@react-navigation/stack';

import ROUTES                     from '../../constants/Routes';

import HomeScreen                 from '../../screens/HomeScreen';
import WebViewScreen              from '../../screens/WebViewScreen';

const MainStack = createStackNavigator();

function MainStackScreen() {

    return (
        <MainStack.Navigator
            detachInactiveScreens = {false}
            screenOptions         = {{ headerShown : false }}
        >
            <MainStack.Screen
                name      = {ROUTES.HOME_SCREEN}
                component = {HomeScreen}
                options   = {{ gestureEnabled : false }}
            />
           <MainStack.Screen
                name      = {ROUTES.WEB_VIEW_SCREEN}
                component = {WebViewScreen}
                options   = {{ gestureEnabled : false }}
            />
        </MainStack.Navigator>
    );
}

export default React.memo(MainStackScreen);
