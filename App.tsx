/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './components/shared/store';
import Home from './components/shared/tabs/HomeTab';
import Settings from './components/shared/tabs/SettingsTab';
import { Login } from './components/Login/Login';
const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const App =React.memo((props) =>{
  return (
  <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: true}} />

          <Stack.Screen name="Home" component={Home} 
              options={{headerShown:true}} />
               <Stack.Screen name="Settings" component={Settings} 
              options={{headerShown:true}} />

          </Stack.Navigator>
           
        </NavigationContainer>
</Provider>
    )
  
  });
  

  
export default App;
