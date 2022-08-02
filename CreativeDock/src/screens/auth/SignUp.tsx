import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSignUp} from '../../hooks';
import {
  Input,
  RegularText,
  BoldText,
  Button,
  CheckBox,
  MediumText,
} from '../../components';
import {COLORS, hp} from '../../utils/Utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {KeyboardType} from '../../components/Input';

const SignUp = () => {
  const {
    formik: {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      setFieldValue,
      errors,
      touched,
    },
    countryCode,
    selectedValue,
    secureTextEntry,
    toggle,
  } = useSignUp();

  return (
    <View style={styles.main}>
      <BoldText customstyle={styles.headerTextStyle} title="Sign Up" />
      <RegularText
        customstyle={styles.descriptionTextStyle}
        title="Great to have you on board. Please start by providing us with the
        following info."
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Input
          label="National ID number"
          value={values.id}
          setValue={handleChange('id')}
          onBlur={handleBlur('id')}
          containerStyle={styles.inputContainerStyle}
        />
        {touched.id && errors.id ? (
          <RegularText customstyle={styles.errorText} title={errors.id} />
        ) : null}
        <Input
          label="Work email"
          value={values.email}
          setValue={handleChange('email')}
          onBlur={handleBlur('email')}
          placeholder="@"
          containerStyle={styles.inputContainerStyle}
          keyboardType={KeyboardType.email}
        />
        {touched.email && errors.email ? (
          <RegularText customstyle={styles.errorText} title={errors.email} />
        ) : null}
        <Input
          label="Phone number"
          value={values.phone}
          setValue={handleChange('phone')}
          onBlur={handleBlur('phone')}
          phone
          countryCode={countryCode}
          selectedCountry={(e: string) => selectedValue(e)}
          info="Please, use a phone number that is registered to your business."
          containerStyle={styles.inputContainerStyle}
          keyboardType={KeyboardType.phone}
        />
        {touched.phone && errors.phone ? (
          <RegularText customstyle={styles.errorText} title={errors.phone} />
        ) : null}
        <Input
          label="Create password"
          value={values.password}
          setValue={handleChange('password')}
          onBlur={handleBlur('password')}
          containerStyle={styles.inputContainerStyle}
          info="Minimum 10 characters with at least 1 digit, 1 uppercase, 1 lowercase and 1 special character."
          secureTextEntry={secureTextEntry}
          password={true}
          toggle={toggle}
        />
        {touched.password && errors.password ? (
          <RegularText customstyle={styles.errorText} title={errors.password} />
        ) : null}
        <CheckBox
          check={values.termsCheck}
          toggleCheck={() => setFieldValue('termsCheck', !values.termsCheck)}>
          <View style={styles.termsStyle}>
            <MediumText title="I accept " />
            <Button textStyle={styles.link} title="Terms and conditions" />
            <MediumText title=" and " />
            <Button textStyle={styles.link} title="Privacy policy" />
          </View>
        </CheckBox>
        {touched.termsCheck && errors.termsCheck ? (
          <RegularText
            customstyle={styles.errorText}
            title={errors.termsCheck}
          />
        ) : null}
        <Button
          onPress={() => {
            handleSubmit();
          }}
          customstyle={styles.submitBtn}
          title="Sign Up"
          textStyle={styles.submitBtnText}
        />
        <View style={styles.loginStyle}>
          <MediumText
            customstyle={styles.bottomText}
            title="Already have an account?"
          />
          <Button textStyle={styles.link} title="Log in" />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: hp(15),
    marginBottom: hp(20),
  },
  headerTextStyle: {
    alignSelf: 'center',
    fontSize: hp(32),
    color: COLORS.Black,
    marginVertical: hp(16),
  },
  descriptionTextStyle: {
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginBottom: hp(40),
  },
  inputContainerStyle: {
    marginTop: hp(20),
  },
  errorText: {
    color: COLORS.Danger,
  },
  submitBtn: {
    marginTop: hp(40),
    backgroundColor: COLORS.RoyalBlue,
    padding: 10,
    borderRadius: hp(8),
    width: '100%',
    paddingVertical: hp(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  submitBtnText: {
    color: COLORS.White,
    fontSize: hp(16),
  },
  bottomText: {
    textAlign: 'center',
    marginRight: hp(5),
  },
  termsStyle: {
    flexDirection: 'row',
    marginLeft: -hp(10),
    alignItems: 'center',
  },
  link: {
    color: COLORS.RoyalBlue,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  loginStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
