import HomeContainer from '../containers/HomeContainer';
import SplashContainer from '../containers/SplashContainer';
import LoginContainer from '../containers/LoginContainer';
import ListContainer from '../containers/ListContainer';
import EmployerDetailContainer from '../containers/EmployerDetailContainer';
import EmployeeDetailContainer from '../containers/EmployeeDetailContainer';
import {ScreenNames} from './ScreenNames';

export const ScreenPaths = {
  [ScreenNames.SplashContainer]: SplashContainer,
  [ScreenNames.HomeContainer]: HomeContainer,
  [ScreenNames.LoginContainer]: LoginContainer,
  [ScreenNames.ListContainer]: ListContainer,
  [ScreenNames.EmployerDetailContainer]: EmployerDetailContainer,
  [ScreenNames.EmployeeDetailContainer]: EmployeeDetailContainer,
};
