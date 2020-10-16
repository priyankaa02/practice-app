import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const dimensions = {
  width,
  height,
};

export const colors = {
    black: 'black',
    white: '#ffffff',
    banner: '#084A7D',
    btn_blue: '#084A7D',
    normal_font: '#4C6FC0',
    green_btn: '#91D051',
    header_dark: '#3B3737',
    input_box_hint: '#A6A4A4'
};

export const randomColors = [
  '#EB5C7E',
  '#F3AC63',
  '#28AF9D',
]

export const fonts = {
    open_light: {fontFamily: 'OpenSans-Light.ttf'},
    open_regular: {fontFamily: 'OpenSans-Regular.ttf'},
    open_semibold: {fontFamily: 'OpenSans-SemiBold.ttf'},
    open_bold: {fontFamily: 'OpenSans-Bold.ttf'},
    lobster: {fontFamily: 'Lobster-Regular.ttf'},
};