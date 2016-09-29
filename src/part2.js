import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  WebView,
  Navigator,
  AsyncStorage,
  Platform,
  BackAndroid,
  DatePickerAndroid,
  TouchableHighlight,
} from 'react-native';
import BackComponent from './base-back-component';

export default class Part2 extends BackComponent{

  save(){
    AsyncStorage.setItem('one','one data',err=>{
      if (err) {
        alert(err);
      }
    });
  }

  data=(err,result)=>{
    if (err) {
      alert(err);
    }else {
      alert(result);
    }
  }

  load(){
    AsyncStorage.getItem('one',this.data);
    this.data(null,'sdfsd山东省地方fdfdf');
  }


  componentWillMount(){
    super.componentWillMount();
    DatePickerAndroid.open({date:new Date()}).then(
      result=>{
        if (result.action=== DatePickerAndroid.dismissAction) {
          alert('noDate choice');
        }else {
          alert(result.year+'年'+(result.month+1)+'月'+result.day+'日');
        }
      }
    )
  }

  componentDidMount(){
    this.load();
  }

  render(){
    this.save();

    return(
      <View style={{flex:1}}>

      <WebView
      style={{flex:1}}
      source={{uri:'https://www.baidu.com/'}}
      >

      </WebView>
      </View>

    );
  }
}
