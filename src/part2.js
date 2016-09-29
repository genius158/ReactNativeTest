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

export default class Part2 extends Component{

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
    if (Platform.OS=== 'android') {
      BackAndroid.addEventListener('hardwareBackPress',this.onAndrondBack);
    }

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

  onAndrondBack=()=>{
    const{navigator}=this.props;
    const routers=navigator.getCurrentRoutes();
    if (routers.length>1) {
      navigator.pop();
      return true;
    }
    return false;
  }

  componentWillUnmount(){
    if (Platform.OS=== 'android') {
      BackAndroid.removeEventListener('hardwareBackPress',this.onAndrondBack)
    }
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
