
import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Navigator,
  TouchableHighlight,
} from 'react-native';


import Detail from './detail' ;
import Part2 from './part2';
import Part3 from './part3';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state={
      titleText:'asas',
      nextPageDate:"",
      // getNextPageDate:getNextPageDate = nextPage =>{
      //   this.setState({
      //     nextPageDate:nextPage
      //   })
      // },
    };
  }

  getNextPageDate = nextPage =>{
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
          //getNextPageDate:this.state.getNextPageDate,
        },
      });
    }
  }

  toPart2=()=>{
    const{navigator}=this.props;
    if (navigator) {
      navigator.push({
        name:'Part2',
        component:Part2,

      });
    }
  }

  toPart3=()=>{
    const{navigator}=this.props;
    if (navigator) {
      navigator.push({
        name:'Part3',
        component:Part3,

      });
    }
  }

  render(){
    let list=[];

    for (var i = 0; i < 3; i++) {

      let row=(<Text key ={i}>sdfasffff</Text>);
      list.push(row);
    }


    return(
      <ScrollView>
      <Text onPress={this._onPressButton.bind(this)}>text11</Text>
      <Text onPress={this._onPressButton.bind(this)}>text22{this.state.nextPageDate}</Text>
      <Text onPress={this._onPressButton.bind(this)}>text33</Text>
      {list}
      <TouchableHighlight style={{backgroundColor:'red'}} onPress={this.toPart2}>
      <Text>part2</Text>
      </TouchableHighlight>
      <TouchableHighlight style={{backgroundColor:'green'}} onPress={this.toPart3}>
      <Text>part3</Text>
      </TouchableHighlight>
      </ScrollView>
    );
  }
}
