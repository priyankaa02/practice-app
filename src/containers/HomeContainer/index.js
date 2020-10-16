import React, {useEffect} from 'react';
import Home from '../../components/Home';
import {useSelector, useDispatch} from 'react-redux';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
import {actions as adminActions, selectors as adminSelectors} from '../../reducers/admin'
import {actions as commonActions} from '../../reducers/common'

const HomeContainer = () => {
  const dispatch = useDispatch();
  const total = useSelector(adminSelectors.selectTotal)
  
  useEffect(() => {
    dispatch(adminActions.fetchAllRequest())
  })

  const onClickList = () => {
    dispatch(commonActions.fetchNationality())
    dispatch(commonActions.fetchIndustry())
    dispatch(commonActions.fetchJobType())
    dispatch(commonActions.fetchVisaStatus())
    dispatch(commonActions.fetchSpecialization())
    dispatch(commonActions.fetchApplicationStatus())
    dispatch(commonActions.fetchEmployeeDetail())
    navigate(ScreenNames.ListContainer)
  }
  return <Home onClickList={onClickList} total={total} />;
};

export default HomeContainer;
