import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Signin, Signup, ForgotPassword, InitAuth } from '../../modules/Authen'
import Home from '../../modules/Home'
import Profile from '../../modules/Profile'
import { Routes, Colors } from '../../utils'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Navigator(props) {
  const { authen } = props
  const { userInfo } = authen
  const [isLoading, setLoading] = useState(true)
  const [hasEmail, setHasEmail] = useState(false)

  useEffect(() => {
    if (userInfo.email) {
      setHasEmail(true)
    } else {
      setHasEmail(false)
    }
    setLoading(false)
  }, [userInfo])

  function CommonStack(name, component) {
    return <Stack.Screen name={name} component={component} />
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
  if (isLoading) {
    // Mới đầu vào app, isLoading === true sẽ nhảy vào đây,
    // đợi check xem có email hay không, có hay không thì
    // isLoading vẫn trả về false để nhảy
    // vào NavigationContainer phía dưới
    return <InitAuth isLoading={isLoading} />
  }
  return (
    <NavigationContainer>
      {!hasEmail ? AuthStack() : TabNavigator()}
    </NavigationContainer>
  )
}
const mapStateToProps = state => ({
  authen: state.authen
})

export default connect(
  mapStateToProps,
  null
)(Navigator)

Navigator.propTypes = {
  authen: PropTypes.object
}
