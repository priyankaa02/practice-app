import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import {Header} from './Header'
import EmployerList from './EmployerList';
import EmployeeList from './EmployeeList';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const List = ({onClickHome, onClickEmployer, onClickEmployee, allData}) => {
  console.log('list data', allData)
  return (
      <NavigationContainer>
        <View style={mainStyles.cont}>
          <Header title={'All Applications'} onClickHome={onClickHome}/>
          <Tab.Navigator      
            tabBarOptions={{
               activeTintColor: colors.btn_blue,
               inactiveTintColor: colors.header_dark,
               allowFontScaling: false,
               indicatorStyle: {backgroundColor: colors.btn_blue},
               labelStyle: { fontSize: 18, fontFamily: 'OpenSans-Regular', textTransform: 'none', padding: 5 },
            }}
          >
            <Tab.Screen name="Employees" component={() => <EmployeeList onClickEmployee={onClickEmployee} data={allData && allData.employee}/>}/>
            <Tab.Screen name="Employer" component={() => <EmployerList onClickEmployer={onClickEmployer} data={allData && allData.employer}/>} />
          </Tab.Navigator>
       </View>
      </NavigationContainer>
  );
};

const mainStyles = StyleSheet.create({
  cont: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default List;
