import React, {useEffect} from 'react';
import List from '../../components/List';
import {useSelector, useDispatch} from 'react-redux';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
import {selectors as adminSelectors, actions as adminActions} from '../../reducers/admin'

const ListContainer = () => {
  const dispatch = useDispatch();
  const allData = useSelector(adminSelectors.selectAllResponse)

  const onClickHome = () => {
    navigate(ScreenNames.HomeContainer)
  }

  const onClickEmployee = (id) => {
    dispatch(adminActions.fetchEmployee(id))
    // navigate(ScreenNames.EmployeeDetailContainer)
  }

  const onClickEmployer = (id) => {
    dispatch(adminActions.fetchEmployer(id))
    // navigate(ScreenNames.EmployerDetailContainer)
  }

  return <List onClickHome={onClickHome} onClickEmployer={onClickEmployer} onClickEmployee={onClickEmployee} allData={allData} />;
};

export default ListContainer;
