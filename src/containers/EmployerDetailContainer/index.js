import React, {useEffect} from 'react';
import EmployerDetail from '../../components/EmployerDetail';
import {useSelector, useDispatch} from 'react-redux';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
import {selectors as adminSelectors} from '../../reducers/admin'
import {selectors as commonSelectors} from '../../reducers/common'

const EmployerDetailContainer = () => {
  const dispatch = useDispatch();
  const employer = useSelector(adminSelectors.selectEmployer)
  const industry = useSelector(commonSelectors.selectIndustry)
  const applicationStatus = useSelector(commonSelectors.selectApplicationStatus)
  console.log('employer', employer)
  const onClickHome = () => {
    navigate(ScreenNames.ListContainer)
  }
  return <EmployerDetail 
           onClickHome={onClickHome} 
           employer={employer && employer[0]} 
           industry={industry} 
           applicationStatus={applicationStatus} 
        />;
};

export default EmployerDetailContainer;
