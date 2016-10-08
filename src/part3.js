import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Navigator,
  Platform,
  DeviceEventEmitter,
  NativeModules,
  BackAndroid,
  TouchableHighlight,
} from 'react-native';
import BackComponent from './base-back-component';
import Circle from './circle'

export default class Part3 extends BackComponent{
  componentDidMount(){
    this.getPostNet();
  }

  postRequest(url,data,callback){
    let formData = new FormData();

    for(var key in data){
      formData.append(key,data[key]);
    };

    let datemap={
      method:'POST',
      headers: {
      },
      body:formData,
      follow:20,
      timeout:8000,
      size:0,
    };

    fetch(url,datemap).then((response)=>response.text()).then(
      (responseText)=>{
        callback(responseText);
      }
    ).catch((err)=>{
      callback(err);
    });
  }



  getPostNet(){
    this.postRequest(
      'http://121.196.209.49:8080/Business/serviceInterface/getHealthManagerDetailInfo.json',
      {'userId':'372280'},
      resoult=>alert(resoult)
    )
  }


  componentDidMount() {
    //注册扫描监听
    DeviceEventEmitter.addListener('CircleViewOnclick', this.show);
  }

  show=(e)=>{
    alert(e );
    NativeModules.IntentModule.startActivityFromJS("com.reacttest2.Main2Activity","我是从JS传过来的参数信息.456")
  }

  componentWillUnmount(){
    super.componentWillUnmount();
    DeviceEventEmitter.removeListener('CircleViewOnclick', this.show);
  }


  render(){
    return(
      <View>
      <Text>
      part3
      </Text>


      <View>
      <Circle
      color="#25c5f7"
      radius={50}
      style={{width: 200, height: 200}}
      />
      </View>
      </View>
    );
  }
}
