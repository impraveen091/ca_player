import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home_S from '../screens/Home_S';
import VideoShow from '../screens/VideoShow';
import Splash_S from '../screens/Splash_S';

export default function ScreenNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer
            independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Splash_S'
                    component={Splash_S}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Home_S'
                    component={Home_S}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='VideoShow'
                    component={VideoShow}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})