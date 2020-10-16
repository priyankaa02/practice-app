import {dimensions} from './variables';

const vertical = val => Math.floor((val / 812) * dimensions.height);
const horizontal = val => Math.floor((val / 375) * dimensions.width);

export const responsive = {
  vertical,
  horizontal,
};