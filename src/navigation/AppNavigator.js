import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Users from '../screens/Users'
import AddUsers from '../screens/AddUsers'
const Stack = createStackNavigator()
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Users' component={Users}
                // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='AddUsers' component={AddUsers}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})