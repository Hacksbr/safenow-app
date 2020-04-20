import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Insurances from './screens/Insurances'
import Chat from './screens/Chat'
import Brokers from './screens/Brokers'
import Detail from './screens/Detail'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Chat" component={Chat} />
        <AppStack.Screen name="Insurances" component={Insurances} />
        <AppStack.Screen name="Brokers" component={Brokers} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>

    </NavigationContainer>
  )
}

export default Routes
