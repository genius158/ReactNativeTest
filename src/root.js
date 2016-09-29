import React, { Component } from 'react';
import {
    Navigator,
} from 'react-native';

import List from './list';

export default class Root extends Component {
render(){
  let dName="name";
  let dComponent=List;
  return(
    <Navigator
      initialRoute={{name:dName,component:dComponent}}
      configureScene=
        {
          (route)=>{
            return Navigator.SceneConfigs.FloatFromRight;
          }
        }

      renderScene={ 
        (route,navigator)=>{
          let Component=route.component;
          return <Component {...route.params} navigator={navigator}/>
        }
      }
    />
    );
  }
}
