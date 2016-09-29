
import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    Navigator,
    TouchableHighlight,
} from 'react-native';


import Detail from './detail' ;

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state={
      titleText:'asas',
      nextPageDate:"",
    };
  }

getNextPageDate= nextPage =>{
  this.setState({
    nextPageDate:nextPage
  })
}

  _onPressButton(){
    const{navigator}=this.props;
    if (navigator) {
      navigator.push({
        name:'Detail',
        component:Detail,
        params: {
           titleText:this.state.titleText,
           getNextPageDate:this.getNextPageDate,
         },
      });
    }
  }

  render(){
    return(
      <ScrollView>
        <Text onPress={this._onPressButton.bind(this)}>text11</Text>
        <Text onPress={this._onPressButton.bind(this)}>text22{this.state.nextPageDate}</Text>
        <Text onPress={this._onPressButton.bind(this)}>text33</Text>

      </ScrollView>
    );
  }
}
