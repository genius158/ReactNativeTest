
import React, { Component } from 'react';
import {
    Text,
    View,
    Picker,
    Navigator,
    DrawerLayoutAndroid,
    TouchableHighlight,
} from 'react-native';
import SearchView from './search-view';

export default class Detail extends Component {
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
         <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <Text>dsfsdfsdf{ this.state.titleText }</Text>
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
        <Picker.Item label="Java3" value="java3"/>
        </Picker>
     </View>
     </DrawerLayoutAndroid>
   );
 }
}
