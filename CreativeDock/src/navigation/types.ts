import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/// We use enums to prevent the use of strings across the application - i.e, write once

export const enum AUTHENTICATION_ROUTE {
  SIGNUP = 'SIGNUP',
  VERIFY = 'VERIFY',
  SUCCESS = 'SUCCESS',
}

export type AuthenticationStackParamList = {
  [AUTHENTICATION_ROUTE.SIGNUP]: undefined;
  [AUTHENTICATION_ROUTE.VERIFY]: {phone: string};
  [AUTHENTICATION_ROUTE.SUCCESS]: undefined;
};

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  AuthenticationStackParamList,
  AUTHENTICATION_ROUTE.SIGNUP
>;

export type VerifyScreenNavigationProp = NativeStackNavigationProp<
  AuthenticationStackParamList,
  AUTHENTICATION_ROUTE.VERIFY
>;

export type VerifyScreenRouteProp = RouteProp<
  AuthenticationStackParamList,
  AUTHENTICATION_ROUTE.VERIFY
>;

export type SuccessScreenNavigationProp = NativeStackNavigationProp<
  AuthenticationStackParamList,
  AUTHENTICATION_ROUTE.SUCCESS
>;
