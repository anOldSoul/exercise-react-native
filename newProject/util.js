/**
 * NetUitl 网络请求的实现
 * @author lidong
 * @date 2016-03-17 
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import axios from 'axios';

class NetUitl extends React.Component {
  static post = function(url, params, success) {
    axios({
      url: url,
      method: 'post',
      data: params,
      transformRequest: [function (data) {
        // Do whatever you want to transform the data 对 data 进行任意转换处理
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then( res => {
        success(res.data)
      });
  }
}

module.exports = NetUitl;