import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {dimensions} from '../../styles/variables';

import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
  rootStyle: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: '#ffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const imgStyleFun = src => {
  const {width, height} = Image.resolveAssetSource(src);
  const calHeight = (dimensions.width / width) * height;
  return {
    backgroundColor: '#ffff',
    width: dimensions.width,
    height: calHeight,
  };
};

class Splash extends React.Component {
  render() {
    return (
      <View style={styles.rootStyle}>
        <FastImage
          style={imgStyleFun(require('../../images/Logo.png'))}
          source={require('../../images/Logo.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }
}

export default Splash;
