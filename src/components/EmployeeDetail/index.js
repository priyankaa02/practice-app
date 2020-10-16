import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Loading from '../Loading';
import Text from 'react-native-text';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import Image from 'react-native-fast-image';
import {Header} from './Header'
import { ScrollView } from 'react-native-gesture-handler';
import _ from 'lodash'

const EmployeeDetail = ({onClickHome, onClickDownload, employee, industry, nationality, visa, jobType, specialization, gender, joining}) => {
  // const ind = _.find(industry, { 'id': employee.preferred_industry });
  console.log('employee', employee)
  let indus = [], spec = [], job = [], join = [], pref_loc = []
  let gen, nat, vi, cur
  employee && employee.preferred_industry && employee.preferred_industry.map((ind, index) => {
    indus.push(_.find(industry, { 'id': ind.value }))
  })
  employee && employee.specialization && employee.specialization.map((ind, index) => {
    spec.push(_.find(specialization, { 'id': ind.value }))
  })
  employee && employee.type_of_job && employee.type_of_job.map((ind, index) => {
    job.push(_.find(jobType, { 'id': ind.value }))
  })
  employee && employee.joining_period && employee.joining_period.map((ind, index) => {
    join.push(_.find(joining, { 'id': ind.value }))
  })
  employee && employee.preferred_location && employee.preferred_location.map((ind, index) => {
    pref_loc.push(_.find(nationality, { 'id': ind.value }))
  })
  if(employee) {
    gen = _.find(gender, { 'id': employee.gender });
    nat = _.find(nationality, { 'id': employee.nationality });
    cur = _.find(nationality, { 'id': employee.current_location });
    vi = _.find(visa, { 'id': employee.visa });
    // join = _.find(joining, { 'id': employee.joining_period });
  }
  // const job = _.find(jobType, { 'id': employee.type_of_job });
  // const spec = _.find(specialization, { 'id': employee.type_of_job });
  return (
    <View style={mainStyles.cont}>
      <Header title={employee.first_name + ' ' + employee.last_name} onClickHome={onClickHome}/>
      <ScrollView style={mainStyles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={mainStyles.heading}>First Name</Text>  
              <Text style={mainStyles.value}>{employee && employee.first_name}</Text> 
            </View>
            <View style={{marginRight: responsive.horizontal(150)}}>
              <Text style={mainStyles.heading}>Last Name</Text>  
              <Text style={mainStyles.value}>{employee && employee.last_name}</Text> 
            </View>
        </View> 
        <Text style={mainStyles.heading}>Mobile Number</Text> 
        <Text style={mainStyles.value}>{employee && employee.mobile}</Text>  
        <Text style={mainStyles.heading}>Email</Text> 
        <Text style={mainStyles.value}>{employee && employee.email}</Text> 
        <Text style={mainStyles.heading}>Gender</Text> 
        <Text style={mainStyles.value}>{gen && gen.name}</Text> 
        <Text style={mainStyles.heading}>Nationality</Text> 
        <Text style={mainStyles.value}>{nat && nat.name}</Text> 
        <Text style={mainStyles.heading}>Year of Birth</Text> 
        <Text style={mainStyles.value}>{employee && employee.year_of_birth}</Text> 
        <Text style={mainStyles.heading}>Current Location</Text> 
        <Text style={mainStyles.value}>{cur && cur.name}</Text> 
        <Text style={mainStyles.heading}>Preferred Job Location</Text> 
        <View>
          {pref_loc && pref_loc.map((val,index) => {
            return (
              <Text style={mainStyles.value}>{val.name}</Text> 
            )
          })}
        </View>
        {/* <Text style={mainStyles.value}>{employee && employee.preferred_location}</Text>  */}
        <Text style={mainStyles.heading}>Preferred Job Type</Text> 
        {/* <Text style={mainStyles.value}>{job.name}</Text>  */}
        <View>
          {job && job.map((val,index) => {
            return (
              <Text style={mainStyles.value}>{val.name}</Text> 
            )
          })}
        </View>
        <Text style={mainStyles.heading}>Preferred Industry</Text> 
        <View>
          {spec && spec.map((val,index) => {
            return (
              <Text style={mainStyles.value}>{val.name}</Text> 
            )
          })}
        </View>
        <Text style={mainStyles.heading}>Field of Experience</Text> 
        <View>
          {indus && indus.map((val,index) => {
            return (
              <Text style={mainStyles.value}>{val.name}</Text> 
            )
          })}
        </View>
        {/* <Text style={mainStyles.value}>{spec.name}</Text>  */}
        <Text style={mainStyles.heading}>Total Work Experience</Text> 
        <Text style={mainStyles.value}>{employee && employee.work_experience + " Years"}</Text> 
        <Text style={mainStyles.heading}>Work Experience</Text> 
        <View style={mainStyles.experienceView}>
          {employee && employee.work_experience_array && employee.work_experience_array.map((work, index) => {
            return (
              <View key={index} style={index !== 0 && {marginTop: 10}}>
                <Text>{work.organization}</Text>
                <Text>{work.designation}</Text>
                <Text>{work.from_year + " to " + work.to_year}</Text>
              </View>
            )
          })}
        </View>
        <Text style={mainStyles.heading}>Brief Description</Text> 
        <View style={mainStyles.experienceView}>
            <Text>{employee && employee.brief_description}</Text>
        </View>
        <Text style={mainStyles.heading}>Education Qualification</Text> 
        <View style={mainStyles.experienceView}>
          {employee && employee.education && employee.education.map((edu, index) => {
            return (
              <View key={index} style={index !== 0 && {marginTop: 10}}>
                <Text>{edu.specialization}</Text>
                <Text>{edu.university}</Text>
                <Text>{edu.from_year + " to " + edu.to_year}</Text>
              </View>
            )
          })}
        </View>
        <Text style={mainStyles.heading}>Visa Staus</Text> 
        <Text style={mainStyles.value}>{vi && vi.name}</Text> 
        <Text style={mainStyles.heading}>Last Salary</Text> 
        <Text style={mainStyles.value}>{employee && employee.last_salary}</Text> 
        <Text style={mainStyles.heading}>Salary Expected</Text> 
        <Text style={mainStyles.value}>{employee && employee.expected_salary}</Text> 
        <Text style={mainStyles.heading}>How quickly can you join?</Text> 
        {/* <Text style={mainStyles.value}>{join && join.name}</Text>  */}
        <View>
          {join && join.map((val,index) => {
            return (
              <Text style={mainStyles.value}>{val.name}</Text> 
            )
          })}
        </View>
        <Text style={mainStyles.heading}>Do you need visa sponsorship?</Text> 
        <Text style={mainStyles.value}>{employee && employee.visa_sponsership ? 'Yes' : 'No'}</Text> 
        <Text style={mainStyles.heading}>Do you need medical insurance?</Text> 
        <Text style={mainStyles.value}>{employee && employee.medical_insurance ? 'Yes' : 'No'}</Text> 
        <Text style={mainStyles.heading}>Resume Upload</Text> 
        <View style={{flexDirection: 'row'}}>
          <Text style={mainStyles.value}>Resume.pdf</Text> 
          <TouchableOpacity activeOpacity={0.8} onPress={() => onClickDownload(employee.resume)}>
            <FontIcon name='cloud-download' size={30} color={colors.btn_blue} style={{marginLeft: responsive.horizontal(170)}}/>
          </TouchableOpacity>
        </View>
        <Text style={mainStyles.heading}>Profile Photo</Text> 
        <View style={{flexDirection: 'row'}}>
          <Text style={mainStyles.value}>Sample.jpg</Text> 
          <TouchableOpacity activeOpacity={0.8} onPress={() => onClickDownload(employee.image)}>
            <FontIcon name='cloud-download' size={30} color={colors.btn_blue} style={{marginLeft: responsive.horizontal(175)}}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginBottom: responsive.vertical(90),
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
  },
  experienceView: {
    width: responsive.horizontal(300),
    height: 'auto',
    padding: 9,
    backgroundColor: colors.white,
    borderRadius: 5, 
    borderWidth: 1,
    borderColor: colors.header_dark,
    marginTop: 10,
    marginBottom: 20,
  }
});

export default EmployeeDetail;
