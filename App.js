import React from 'react'
import { Provider } from 'react-redux'

import AppNavigator from './src/app/navigators'
import configureStore from './src/app/store'

const store = configureStore()

const App = () => {

  return (
   <Provider store={store}>
     <AppNavigator />
   </Provider>
  )
}

export default App
