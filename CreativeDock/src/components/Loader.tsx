import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../utils/Utils';

enum Size {
  small = 'small',
  large = 'large',
}

type Props = {
  color?: string;
  size?: Size;
};

const LoadingIcon = (props: Props) => {
  const {color, size} = props;

  return (
    <View style={styles.loading} testID="loader">
      <ActivityIndicator
        size={size ? size : 'small'}
        color={color ? color : COLORS.RoyalBlue}
      />
    </View>
  );
};

export default LoadingIcon;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
