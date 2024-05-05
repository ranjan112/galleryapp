import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

import { NavigationContainer ,withNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  

const handleCheckEmail =(text) =>{
let re= /\S+@\S+\.\S+/;
let regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
setEmail(text);
if(re.test(text) || regex.test(text) ){
  setCheckValidEmail(false);
}
else{
  setCheckValidEmail(true);
}
}

const checkPasswordValidity =value =>{
  const isNonWhiteSpace =/^\S*$/;
  if(!isNonWhiteSpace.test(value)){
    return 'Password must not contain whitespaces';
  }
  const isContainUppercase =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$/;
  if(!isContainUppercase.test(value) <1){
    return 'Password must have at least one uppercase character';
  }

  const isContainLowercase =/[a-z]/
  if(!isContainLowercase.test(value)){
    return 'Password must have at least one lowercase character';
  }

  const isContainNumber =/^(?=.*[0-9]).*$/; 
  if(!isContainNumber.test(value)){
    return 'Password must have at least one digit';
  }

  const isValidLength =/^.{8,16}$/; 
  if(!isValidLength.test(value)){
    return 'Password must be 8 characters long';
  }
  return null;

}
const handleLogin =() =>{
  const checkPassword =checkPasswordValidity (password);
  if(!checkPassword){
   navigation.navigate('Home')}
    else{
      Alert.alert(checkPassword)
    }
  
}


  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
        <View style={styles.loginView}>
        <TextInput
        placeholder='Enter email id'
         style={styles.input}
        onChangeText={(text) =>handleCheckEmail(text)}
        value={email}
      />
      {checkValidEmail ? (
        <Text style={{color:'red'}}>Wrong format email</Text>
      ):        <Text style={{color:'red'}}></Text>
    }
   
        <TextInput
        placeholder='Enter password'
         style={styles.input}
         onChangeText={(text) =>setPassword(text)}

        value={password}
        secureTextEntry={true}
      />
        {email =='' || password =='' || checkValidEmail ==true ?(
          <Button title="Login" disabled onPress={handleLogin} />

        ) : (
          <Button title="Login"  onPress={handleLogin} />

        )}

         
        </View>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
};
export default (Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  loginView: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
  },
  footer: {
    flex: 1,
  },
});