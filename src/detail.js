
import React, { Component } from 'react';
import {
    Text,
    View,
    Picker,
    StyleSheet,
    Navigator,
    DrawerLayoutAndroid,
    TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';

import SearchView from './search-view';
import BackComponent from './base-back-component';

export default class Detail extends BackComponent {
  constructor(props) {
    super(props);
    this.state={
      pickerValue:null,
      titleText:null
    };
  }
  componentDidMount() {

     //这里获取从列表页传递过来的参数: id
     this.setState({
              titleText: this.props.titleText,
            });
  }

_onPressButton(){
  const{navigator}=this.props;
  if (navigator) {
    this.props.getNextPageDate("sdfasdf");
      navigator.pop();
  }
}


setPickerValue= v=>{
  this.setState({
    pickerValue:v
  });
}


 render(){
   var navigationView=(
     <View style={{flex:1,backgroundColor:'red'}}>
      <Text>asdfasffsdfsdfasdfaf</Text>
     </View>
   )

   return(
     <DrawerLayoutAndroid
      drawerWidth={100}
      drawerPosition={DrawerLayoutAndroid.positions.Right}
      renderNavigationView={()=>navigationView}
     >
     <View>
         <TouchableHighlight underlayColor= 'red' onPress={this._onPressButton.bind(this)}>
        <Text>dsfsdfsdsdfdfdfsdfsdfsdff{ this.state.titleText }</Text>
        </TouchableHighlight>
        <View>
          <SearchView/>
        </View>
        <Picker
          selectedValue={this.state.pickerValue}
          mode="dialog"
          style={{color:'#f00'}}
          onValueChange={this.setPickerValue}
        >
          <Picker.Item label="Java1" value="java1"/>
          <Picker.Item label="Java2" value="Java2"/>
          <Picker.Item label={"Java3"} value="java3"/>
        </Picker>


        <Swiper
          autoplay={true}
          autoplayTimeout={2.5}
          style={styles.wrapper}
          showsButtons={false}
          >

          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>


     </View>
     </DrawerLayoutAndroid>
   );
 }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
