import React, { Component } from 'react';
import {
  Platform,
  BackAndroid,
  Navigator,
} from 'react-native';

export default class BackComponent extends Component {
  constructor(props) {
    super(props);
  }

  onAndrondBack=()=>{
    const{navigator}=this.props;
    if (navigator) {
      const routers=navigator.getCurrentRoutes();
      if (routers.length>1) {
        navigator.pop();
        return true;
      }
    }
    return false;
  }

  componentWillMount(){
    if (Platform.OS=== 'android') {
      BackAndroid.addEventListener('hardwareBackPress',this.onAndrondBack);
    }
  }

  componentWillUnmount(){
    if (Platform.OS=== 'android') {
      BackAndroid.removeEventListener('hardwareBackPress',this.onAndrondBack)
    }
  }

}
