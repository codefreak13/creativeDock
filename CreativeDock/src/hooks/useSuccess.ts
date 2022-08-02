import {useNavigation} from '@react-navigation/native';
import {
  AUTHENTICATION_ROUTE,
  SuccessScreenNavigationProp,
} from '../navigation/types';

const useSuccess = () => {
  const navigation = useNavigation<SuccessScreenNavigationProp>();

  const startOver = () => {
    navigation.navigate(AUTHENTICATION_ROUTE.SIGNUP);
  };

  return {
    startOver,
  };
};

export default useSuccess;
