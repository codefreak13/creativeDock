import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSuccess} from '../../hooks';
import {BoldText, Button} from '../../components';
import {COLORS, hp} from '../../utils/Utils';

const Success = () => {
  const {startOver} = useSuccess();

  return (
    <View style={styles.main}>
      <BoldText customstyle={styles.headerTextStyle} title="Success" />
      <Image
        source={require('../../../assets/images/success.png')}
        style={styles.imageStyle}
      />
      <Button
        onPress={() => {
          startOver();
        }}
        customstyle={styles.submitBtn}
        textStyle={styles.submitBtnText}
        title="Start Over"
      />
    </View>
  );
};

export default Success;

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
  submitBtn: {
    marginTop: hp(40),
    backgroundColor: COLORS.RoyalBlue,
    padding: 10,
    borderRadius: hp(8),
    width: '100%',
    paddingVertical: hp(16),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  submitBtnText: {
    color: COLORS.White,
    fontSize: hp(16),
  },
  imageStyle: {
    width: hp(150),
    height: hp(150),
    alignSelf: 'center',
    marginVertical: hp(65),
  },
});
