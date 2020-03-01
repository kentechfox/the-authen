import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Signin, Signup, ForgotPassword } from '../../modules/Authen'
import Home from '../../modules/Home'
import Profile from '../../modules/Profile'
import { Routes, Colors } from '../../utils'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Navigator() {
  function CommonStack(name, component) {
    return <Stack.Screen name={name} component={component} />;
  }

  function AuthStack() {
    return (
      <Stack.Navigator headerMode='none'>
        {CommonStack(Routes.signIn, Signin)}
        {CommonStack(Routes.signUp, Signup)}
        {CommonStack(Routes.forgotPass, ForgotPassword)}
      </Stack.Navigator>
    )
  }

  function HomeStack() {
    return (
      <Stack.Navigator headerMode='none'>
        {CommonStack(Routes.home, Home)}
      </Stack.Navigator>
    )
  }

  function ProfileStack() {
    return (
      <Stack.Navigator headerMode='none'>
        {CommonStack(Routes.profile, Profile)}
      </Stack.Navigator>
    )
  }

  function MainTab(name, component) {
    return <Tab.Screen name={name} component={component} />
  }

  const renderIconName = routeName => {
    switch (routeName) {
      case Routes.home:
        return 'flight'
      case Routes.profile:
        return 'assignment-ind'
      default:
        break
    }
  }


  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            const { name } = route
            let iconName = renderIconName(name)
            return <Icon name={iconName} size={22} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: Colors.goldPrimary,
          inactiveTintColor: Colors.grayPrimary_1
        }}
      >
        {MainTab(Routes.home, HomeStack)}
        {MainTab(Routes.profile, ProfileStack)}
      </Tab.Navigator>
    )
  }

  return <NavigationContainer>{AuthStack()}</NavigationContainer>
}

export default Navigator
