import axios from 'axios';
import {URL} from '../constants';

export const fetchApiMaker = accessToken => ({
  url,
  data,
  method,
}) => {

  return axios
    .request({
      method,
      baseURL: URL.ENDPOINT,
      headers: {
        // token: accessToken,
      },
      url,
      data,
      // timeout: 5000,
    })
    .then(res => {
      console.log('api res', res, url);
      if (
        res &&
        res.status === 200 &&
        (res.data && res.data.success)
      ) {
        // only here success
        return res.data;
      } else {
        // success: false; so handle in catch below
        throw res;
      }
    })
    .catch(err => {
      console.log('api err', err);
      if (err.data) {
        if (err.data.error_description) {
          throw err.data;
        } else {
          throw {
            err,
            success: false,
            error_description: 'unknown error',
            error_code: 0,
          };
        }
      } else {
        throw {
          err,
          success: false,
          error_description: 'unknown error',
          error_code: 0,
        };
      }
    });
};


export function* fetchApi({
  url,
  data,
  method,
}) {
  const res = yield fetchApiMaker()({url, data, method});
  console.log('res 2', res);
  return res;
}
