import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
  ViewStyle,
  View,
  TextInput,
} from 'react-native';
import {COLORS, hp} from '../utils/Utils';
import CountryPicker from 'rn-country-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MediumText, RegularText} from './Text';

export enum KeyboardType {
  default = 'default',
  email = 'email-address',
  numeric = 'numeric',
  phone = 'phone-pad',
  number = 'number-pad',
  decimal = 'decimal-pad',
}

type InputProps = {
  label: string;
  staticLabel?: boolean;
  inputStyle?: ViewStyle;
  value?: string;
  setValue?: (x: string) => void;
  placeholder?: string;
  numberOfLines?: number;
  multiline?: boolean;
  testID?: string;
  editable?: boolean;
  phone?: boolean;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  countryCode?: string;
  selectedCountry?: (x: string) => void;
  toggle?: () => void;
  containerStyle?: ViewStyle;
  info?: string;
  secureTextEntry?: boolean;
  password?: boolean;
  keyboardType?: KeyboardType;
};

const Input = (Props: InputProps) => {
  const {
    label,
    inputStyle,
    value,
    setValue,
    placeholder,
    testID,
    info,
    keyboardType,
    onBlur,
    phone,
    countryCode,
    selectedCountry,
    containerStyle,
    toggle,
    secureTextEntry,
    password,
  } = Props;

  return (
    <View style={{...styles.main, ...containerStyle}}>
      <MediumText customstyle={styles.titleStyle} title={label} />
      <View style={styles.container}>
        {phone && (
          <CountryPicker
            disable={false}
            animationType={'slide'}
            containerStyle={styles.pickerStyle}
            pickerTitleStyle={styles.pickerTitleStyle}
            selectedCountryTextStyle={styles.selectedCountryTextStyle}
            countryNameTextStyle={styles.countryNameTextStyle}
            pickerTitle={'Country Picker'}
            searchBarPlaceHolder={'Search......'}
            hideCountryFlag={true}
            hideCountryCode={false}
            searchBarStyle={styles.searchBarStyle}
            countryCode={countryCode}
            selectedValue={(e: string) => selectedCountry && selectedCountry(e)}
          />
        )}
        <TextInput
          value={value}
          onChangeText={text => setValue && setValue(text)}
          style={{...styles.input, ...inputStyle}}
          placeholder={placeholder}
          testID={testID}
          keyboardType={keyboardType}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
        />
        {password && (
          <Ionicons
            onPress={() => toggle && toggle()}
            name={secureTextEntry ? 'eye-off' : 'eye'}
            size={20}
            color={COLORS.Black}
            style={styles.clearStyle}
          />
        )}
      </View>
      <RegularText customstyle={styles.info} title={info} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    minHeight: hp(50),
    flex: 1,
  },
  main: {
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    minHeight: hp(60),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: hp(0.7),
    borderColor: COLORS.DarkGrey,
    borderRadius: hp(8),
    marginTop: hp(5),
  },
  titleStyle: {
    color: COLORS.Black,
    fontSize: hp(17),
  },
  info: {
    fontSize: hp(12),
  },
  pickerTitleStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pickerStyle: {
    minHeight: hp(55),
    justifyContent: 'center',
    padding: 5,
    backgroundColor: COLORS.Grey,
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    textAlign: 'right',
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },

  searchBarStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 10,
  },
  clearStyle: {
    marginRight: hp(10),
  },
});
