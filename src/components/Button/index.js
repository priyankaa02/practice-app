import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button';
import {View, StyleSheet} from 'react-native';
import {responsive} from '../../styles/mixins';
import {colors} from '../../styles/variables';
import Image from 'react-native-fast-image';
import Text from 'react-native-text';
import Loading from '../Loading';

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
  },
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: responsive.vertical(70),
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: colors.white,
    marginTop: responsive.vertical(5),
  },
});

const Button = ({
  loading,
  disabled,
  text,
  onPress,
  style,
  textColor,
  image,
  ...props
}) => {
  return (
    <View>
      <AwesomeButton
        width={responsive.horizontal(300)}
        disabled={disabled}
        height={responsive.vertical(60)}
        borderRadius={responsive.vertical(30)}
        backgroundColor={colors.btn_blue}
        backgroundDarker={colors.btn_blue}
        style={[styles.cont, style]}
        textSize={Math.floor(responsive.horizontal(16))}
        textFontFamily={'OpenSans-Regular'}
        onPress={onPress}
        raiseLevel={0}
        marginTop={responsive.vertical(40)}
        textColor={textColor ? textColor : '#FFFFFF'}
        {...props}>
        {image ? (
          <Text style={styles.text}>{text}</Text>
        ) : loading ? (
          <Loading />
        ) : (
          text
        )}
      </AwesomeButton>
    </View>
  );
};

export default Button;
