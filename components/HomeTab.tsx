import React, { Component } from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './shared/tabs/HomeTab';
import Settings from './shared/tabs/SettingsTab';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Login } from './Login/Login';
const Tab = createBottomTabNavigator();

const HomeTab =React.memo((props) =>{
    return (
        <Tab.Navigator screenOptions={{
          
            
        }}>
             <Tab.Screen name="login" component={Login}
                options={{
                    tabBarIcon: (props) => <AntDesign name='home' size={28} color={props.color}/>,
                    headerTitle: 'Movie App',
                }}
            />
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: (props) => <AntDesign name='home' size={28} color={props.color}/>,
                    headerTitle: 'Movie App',
                }}
            />
          
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarIcon: (props) => <AntDesign name='settings' size="28" color={props.color}/>
                }}
            />
        </Tab.Navigator>
      )
    
    });
    

    export default HomeTab;