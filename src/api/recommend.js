import {jsonp} from '../common/js/jsonp';
import axios from 'axios';
import { commonParams, options } from './config';

function getRecommend() {
  const url =
    'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = { ...commonParams, platform: 'h5', uin: 0, needNewCode: 1 };
  return jsonp(url, data, options);
}


export {getRecommend}