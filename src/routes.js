import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from './screens/Auth/Welcome'
import Login from './screens/Auth/Login'

import Home from './screens/Home'
import NewLoan from './screens/NewLoan'
import EditLoan from './screens/EditLoan'
import Balance from './screens/Balance'

export const SignedOutRoutes = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  }
})

export const SignedInRoutes = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  NewLoan: {
    screen: NewLoan,
    navigationOptions: {
      headerShown: false
    }
  },
  EditLoan: {
    screen: EditLoan,
    navigationOptions: {
      headerShown: false
    }
  },
  Balance: {
    screen: Balance,
    navigationOptions: {
      headerShown: false
    }
  }
})

export const createRootNavigator = (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: { screen: SignedInRoutes },
        SignedOut: { screen: SignedOutRoutes }
      },
      {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    )
  )
