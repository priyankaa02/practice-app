import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Loading from '../Loading';
import Text from 'react-native-text';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial'
import Toast from 'react-native-simple-toast';
import Image from 'react-native-fast-image';
import {MyCard} from './Card'
import {Header} from './Header'

const Home = ({onClickList, total}) => {
  return (
    <View style={mainStyles.cont}>
      <Header title={'TalentKonnect'}/>
      <View style={mainStyles.container}>
        <TouchableOpacity activeOpacity={0.8} style={mainStyles.todoList} onPress={onClickList}>
          <MyCard style={mainStyles.inSide}>
            <View style={mainStyles.inSideView}>
                <FontIcon name='user' size={25} color={colors.btn_blue} />
                <Text style={mainStyles.inSideTextFont}>List All</Text>
                <Text style={[mainStyles.inSideTextFont, {marginLeft: responsive.horizontal(140)}]}>{total}</Text>
            </View>
          </MyCard>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={mainStyles.todoList}>
          <MyCard style={mainStyles.inSide}>
            <View style={mainStyles.inSideView}>
                <FontIcon name='user-plus' size={25} color={colors.btn_blue} />
                <Text style={[mainStyles.inSideTextFont, {marginLeft: responsive.horizontal(22)}]}>Pending Application </Text>
                <Text style={[mainStyles.inSideTextFont, {marginLeft: responsive.horizontal(20)}]}>3</Text>
            </View>
          </MyCard>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={mainStyles.todoList} >
          <MyCard style={mainStyles.inSide}>
            <View style={mainStyles.inSideView}>
                <ZocialIcon name='email' size={25} color={colors.btn_blue} />
                <Text style={mainStyles.inSideTextFont}>Inbox</Text>
                <Text style={[mainStyles.inSideTextFont, {marginLeft: responsive.horizontal(140)}]}>3</Text>
            </View>
          </MyCard>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={mainStyles.todoList} >
          <MyCard style={mainStyles.inSide}>
            <View style={mainStyles.inSideView}>
                <MaterialIcon name='file-document-edit-outline' size={25} color={colors.btn_blue}/>
                <Text style={mainStyles.inSideTextFont}>Edit Details</Text>
            </View>
          </MyCard>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={mainStyles.todoList} >
          <MyCard style={mainStyles.inSide}>
            <View style={mainStyles.inSideView}>
                <MaterialIcon name='autorenew' size={25} color={colors.btn_blue} />
                <Text style={mainStyles.inSideTextFont}>Show All Auto-Renewals</Text>
            </View>
          </MyCard>
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
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: responsive.vertical(90),
    position: 'relative',
  },
  todoList: {
    paddingBottom: 15,
  },
  inSideView: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 0,
  },
  inSideTextFont: {
    fontSize: 18,
    color: colors.btn_blue,
    textAlign: 'left',
    fontFamily: 'OpenSans-Regular',
    marginLeft: responsive.horizontal(30),
  },
  inSide: {
    width: responsive.horizontal(400),
    maxWidth: '80%',
  },
});

export default Home;
