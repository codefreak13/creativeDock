import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AuthStack from './auth/Auth';

const RootNavigator: React.FC = () => {
  // React Navigation defaults to a gray background - we want white
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
