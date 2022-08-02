import {useState, useRef, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  AUTHENTICATION_ROUTE,
  VerifyScreenNavigationProp,
  VerifyScreenRouteProp,
} from '../navigation/types';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;
const COUNTDOWN_VALUE = 60;

const useVerify = () => {
  const navigation = useNavigation<VerifyScreenNavigationProp>();
  const route = useRoute<VerifyScreenRouteProp>();
  const {params} = route;
  const phone = params?.phone;
  const intervalRef = useRef<number | null>(null);
  const [value, setValue] = useState<string>('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [countDown, setTime] = useState<number>(COUNTDOWN_VALUE);
  const [verifyCode, setVerifyCode] = useState<boolean>(false);

  const startCounter = () => {
    intervalRef.current = setInterval(
      () => setTime(countDown => countDown - 1),
      1000,
    );
  };

  const stopCounter = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetCounter = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(COUNTDOWN_VALUE);
  };

  useEffect(() => {
    if (countDown === 0) {
      stopCounter();
    } else {
      startCounter();
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [countDown]);

  useEffect(() => {
    if (value.length === 4) {
      setVerifyCode(true);
      setTimeout(() => {
        navigation.navigate(AUTHENTICATION_ROUTE.SUCCESS);
      }, 2000);
    }
  }, [value]);

  return {
    countDown,
    phone,
    cellProps,
    ref,
    value,
    CELL_COUNT,
    setValue,
    verifyCode,
    resetCounter,
    getCellOnLayoutHandler,
  };
};

export default useVerify;
