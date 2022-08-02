import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  AUTHENTICATION_ROUTE,
  SignUpScreenNavigationProp,
} from '../navigation/types';

const useLogic = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [countryCode, setCountryCode] = useState<string>('140');

  const selectedValue = (countryCode: string) => {
    setCountryCode(countryCode);
  };
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const toggle = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      email: '',
      phone: '',
      password: '',
      termsCheck: false,
    },
    validationSchema: Yup.object({
      id: Yup.number().required('National ID Number is required'),
      email: Yup.string().required('Email is required').email(),
      phone: Yup.number().required('Phone Number is required'),
      password: Yup.string().required('Password is required'),
      termsCheck: Yup.boolean()
        .oneOf([true], 'Accept Terms & Conditions to proceed')
        .required()
        .label('Terms'),
    }),
    onSubmit: values => {
      navigation.navigate(AUTHENTICATION_ROUTE.VERIFY, {
        phone: `${countryCode} ${values.phone}`,
      });
      formik.resetForm();
    },
  });

  return {
    formik,
    countryCode,
    selectedValue,
    secureTextEntry,
    toggle,
  };
};

export default useLogic;
