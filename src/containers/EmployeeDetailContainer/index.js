import React, {useEffect} from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import EmployeeDetail from '../../components/EmployeeDetail';
import {useSelector, useDispatch} from 'react-redux';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
// import RNFS from 'react-native-fs'
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-simple-toast'
import {selectors as adminSelectors} from '../../reducers/admin'
import {selectors as commonSelectors} from '../../reducers/common'
import EmployerDetailContainer from '../EmployerDetailContainer';

export async function request_storage_runtime_permission() {
 
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'ReactNativeCode Storage Permission',
        'message': 'ReactNativeCode App needs access to your storage to download Photos.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
 
      Alert.alert("Storage Permission Granted.");
    }
    else {
 
      Alert.alert("Storage Permission Not Granted");
 
    }
  } catch (err) {
    console.warn(err)
  }
}

const EmployeeDetailContainer = () => {
  const dispatch = useDispatch();
  const URL = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' 
  const employee = useSelector(adminSelectors.selectEmployee)
  const industry = useSelector(commonSelectors.selectIndustry)
  const nationality = useSelector(commonSelectors.selectNationality)
  const jobType = useSelector(commonSelectors.selectJobType)
  const visa = useSelector(commonSelectors.selectVisaStatus)
  const specialization = useSelector(commonSelectors.selectSpecialization)
  const employeeDetail = useSelector(commonSelectors.selectEmployeeDetail)
  console.log('employee', employee)
  const onClickHome = () => {
    navigate(ScreenNames.ListContainer)
  }

  useEffect(() => {
    if(Platform.OS === 'android') {
      request()
    }
  })

  const request = async () => {
    await request_storage_runtime_permission()
  }

  const onClickDownload = (file) => {
    let date = new Date();
    // let image_URL = 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg';
    let ext = getExtention(file);
    ext = "." + ext[0];
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: PictureDir + "/image_" + Math.floor(date.getTime()
          + date.getSeconds() / 2) + ext,
        description: 'Image'
      }
    }
    config(options).fetch('GET', file).then((res) => {
      Alert.alert("Image Downloaded Successfully.");
    });
  }

  const getExtention = (filename) => {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
    undefined;
  }

  return <EmployeeDetail 
           onClickHome={onClickHome} 
           onClickDownload={onClickDownload} 
           employee={employee} 
           nationality={nationality}
           industry={industry}
           visa={visa}
           jobType={jobType}
           specialization={specialization}
           gender={employeeDetail.gender}
           joining={employeeDetail.joining_period}
        />;
};

export default EmployeeDetailContainer;
