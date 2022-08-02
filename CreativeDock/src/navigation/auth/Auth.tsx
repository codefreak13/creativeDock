import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp, Verify, Success} from '../../screens/auth';

import {AuthenticationStackParamList, AUTHENTICATION_ROUTE} from '../types';

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AUTHENTICATION_ROUTE.SIGNUP} component={SignUp} />
      <Stack.Screen name={AUTHENTICATION_ROUTE.VERIFY} component={Verify} />
      <Stack.Screen name={AUTHENTICATION_ROUTE.SUCCESS} component={Success} />
    </Stack.Navigator>
  );
};

export default AuthStack;
