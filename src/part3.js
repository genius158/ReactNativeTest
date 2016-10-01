import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Navigator,
  Platform,
  BackAndroid,
  TouchableHighlight,
} from 'react-native';
import BackComponent from './base-back-component';

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
    //let formData = new FormData();
    //formData.append("userId","372280");

    this.postRequest(
      'http://121.196.209.49:8080/Business/serviceInterface/getHealthManagerDetailInfo.json',
      {'userId':'372280'},
      resoult=>alert(resoult)
    )
  }

  render(){
    return(
      <View>
      <Text>
      part3
      </Text>
      </View>
    );
  }
}
