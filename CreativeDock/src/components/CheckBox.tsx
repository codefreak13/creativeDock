import React, {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {COLORS, hp} from '../utils/Utils';

type CheckBoxProps = {
  check: boolean;
  toggleCheck: () => void;
  children: ReactNode;
};

const CheckBoxComponent = (props: CheckBoxProps) => {
  const {children, check, toggleCheck} = props;
  const {main} = styles;

  return (
    <View style={main}>
      <CheckBox
        checked={check}
        uncheckedColor={COLORS.RoyalBlue}
        checkedColor={COLORS.RoyalBlue}
        onPress={toggleCheck}
      />
      {children}
    </View>
  );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: -hp(10),
    marginLeft: -hp(20),
  },
});
