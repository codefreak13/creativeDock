import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useVerify} from '../../hooks';
import {BoldText, Button, Loader, RegularText} from '../../components';
import {COLORS, hp} from '../../utils/Utils';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

const Verify = () => {
  const {
    ref,
    value,
    phone,
    setValue,
    countDown,
    cellProps,
    verifyCode,
    CELL_COUNT,
    resetCounter,
    getCellOnLayoutHandler,
  } = useVerify();

  return (
    <View style={styles.main}>
      <BoldText
        customstyle={styles.headerTextStyle}
        title="Please, verify your phone number"
      />
      <Text style={styles.descriptionTextStyle}>
        We’ve sent a verification code to your phone number +{phone}.
      </Text>
      <CodeField
        ref={ref}
        {...cellProps}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {verifyCode ? (
        <View style={styles.loader}>
          <Loader />
          <RegularText title="Verifying code" customstyle={styles.loaderText} />
        </View>
      ) : (
        <View style={styles.resendStyle}>
          {!!countDown ? (
            <RegularText
              title={`The code will expire in ${countDown} seconds `}
            />
          ) : (
            <RegularText title="The code has expired " />
          )}
          <Button
            textStyle={styles.link}
            title="Resend"
            disabled={!!countDown}
            onPress={resetCounter}
          />
        </View>
      )}
    </View>
  );
};

export default Verify;

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
    width: '70%',
    textAlign: 'center',
  },
  descriptionTextStyle: {
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginBottom: hp(40),
  },
  containerStyle: {
    marginBottom: hp(20),
  },
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: hp(100),
    height: hp(50),
    lineHeight: 38,
    fontSize: 24,
    borderWidth: hp(0.4),
    borderColor: COLORS.DarkGrey,
    textAlign: 'center',
    backgroundColor: COLORS.White,
  },
  focusCell: {
    borderColor: '#000',
  },
  loader: {
    alignSelf: 'center',
    marginTop: hp(20),
    alignItems: 'center',
  },
  loaderText: {
    marginTop: hp(50),
  },
  resendStyle: {
    marginTop: hp(20),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  link: {
    color: COLORS.DarkGrey,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});
