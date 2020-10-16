/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView, TextInput, Alert} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Loading from '../Loading';
import Text from 'react-native-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import Toast from 'react-native-simple-toast';
import Image from 'react-native-fast-image';
import Button from '../Button'
import { TouchableOpacity } from 'react-native-gesture-handler';

const mainStyles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
  },
  headerText: {
    fontFamily: 'Lobster',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.btn_blue,
    marginTop: responsive.vertical(80)
  },
  text1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
    marginTop: responsive.vertical(30)
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colors.btn_blue,
    textAlign: 'center',
    marginTop: responsive.vertical(5),
    marginLeft: responsive.horizontal(150),
  },
  innerView: {
    marginTop: responsive.vertical(100),
  },
  inputSection: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.input_box_hint,
    width: responsive.horizontal(300),
    alignSelf: 'center',
    marginTop: responsive.vertical(40),
  },
  icon: {
    padding: 10,
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 8,
    paddingLeft: 0,
    backgroundColor: colors.white,
    color: colors.input_box_hint,
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  btn: {
    marginTop: responsive.vertical(100),
    alignSelf: 'center',
    fontFamily: 'OpenSans-Regular',
  }
});

const Login = ({username, onChangeUserName, password, onChangePassword, loading, onPressSignIn, errMsg}) => {
  return (
     <View style={mainStyles.container}>
        <Text style={mainStyles.headerText}>{'TalentKonnect'}</Text>
        <Text style={mainStyles.text1}>{'Administrator Login'}</Text>
        <View style={mainStyles.innerView}>
          <View style={mainStyles.inputSection}>
            <Icon style={mainStyles.icon} name="user" size={20} color="#A6A4A4"/>
            <TextInput
             onChangeText={text => onChangeUserName(text)}
             value={username}
             style={mainStyles.input}
             placeholder={'Username'}
             placeholderTextColor={'#A6A4A4'}
            />
          </View>
          <View style={mainStyles.inputSection}>
            <SimpleIcons style={mainStyles.icon} name="lock" size={20} color="#A6A4A4"/>
            <TextInput
             secureTextEntry={true}
             onChangeText={text => onChangePassword(text)}
             value={password}
             style={mainStyles.input}
             placeholder={'Password'}
             placeholderTextColor={'#A6A4A4'}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={mainStyles.text2}>{'Forgot Password ?'}</Text>
          </TouchableOpacity>
          <Button loading={loading} text={'Sign In'} style={mainStyles.btn} onPress={onPressSignIn}/>
        </View>
     </View>
  );
};

export default Login;
