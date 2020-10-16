import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Loading from '../Loading';
import Text from 'react-native-text';
import OctIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import Image from 'react-native-fast-image';
import {Header} from './Header'
import _ from 'lodash'

const EmployerDetail = ({onClickHome, employer, industry}) => {
  const ind = _.find(industry, { 'id': employer.industry });
  return (
    <View style={mainStyles.cont}>
      <Header title={employer.company_name} onClickHome={onClickHome}/>
      <View style={mainStyles.container}>
        <Text style={mainStyles.heading}>Company Name</Text>  
        <Text style={mainStyles.value}>{employer.company_name}</Text> 
        <Text style={mainStyles.heading}>Industry Segment</Text> 
        <Text style={mainStyles.value}>{ind.name}</Text> 
        <Text style={mainStyles.heading}>Email</Text> 
        <Text style={mainStyles.value}>{employer.email}</Text> 
      </View>
      <View style={mainStyles.bottomBar}>
          <TouchableOpacity 
              style={{justifyContent: 'center', alignItems: 'center'}}
              activeOpacity={0.8}
          >
              <OctIcon name="trashcan" size={23} color={colors.btn_blue} />
              <Text style={mainStyles.txt}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={{justifyContent: 'center', alignItems: 'center'}}
              activeOpacity={0.8}
          >
              <MaterialIcon name="chat" size={25} color={colors.btn_blue} />
              <Text style={mainStyles.txt}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={{justifyContent: 'center', alignItems: 'center'}}
              activeOpacity={0.8}
          >
              <MaterialIcon name="check" size={25} color={colors.btn_blue} />
              <Text style={mainStyles.txt}>Confirm</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const mainStyles = StyleSheet.create({
  cont: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: responsive.vertical(30),
    marginLeft: responsive.horizontal(30),
    position: 'relative',
  },
  heading: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: colors.header_dark,
  },
  value: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colors.black,
    marginBottom: responsive.vertical(30),
  },
  bottomBar: {
      width: dimensions.width,
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      bottom: 0,
      height: responsive.vertical(80),
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: 'black',
      shadowOffset: {width:0, height: 2},
      shadowRadius: 7,
      shadowOpacity: 0.4,
      elevation: 10,
      backgroundColor: colors.white
  },
  txt: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: colors.btn_blue,
  }
});

export default EmployerDetail;
