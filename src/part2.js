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
