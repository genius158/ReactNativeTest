import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    ToastAndroid,
    TextInput,
} from 'react-native';

//export 很重要
export default class SearchView extends Component  {
  constructor(props){
    super(props);
    this.state={
      value:"",
      show:false,
    };
  }

  getValue(val){
    this.setState({
      value:val,
    });
  }

  excuteSearch(){
      ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG);
  }

  render(){
    return(
      <View>
        <View style={styles.contener}>
          <TextInput
            style={styles.inputt}
            placeholder="请输入关键字"
            onChangeText={this.getValue.bind(this)}
          />
          <TouchableHighlight onPress={this.excuteSearch.bind(this)} >
            <View style={styles.btn_seach}>
              <Text style={styles.text_bg} > 查找 </Text>
            </View>
          </TouchableHighlight>

        </View>
          <Text>
            {this.state.value}
          </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  contener: {
      flex: 1,
    height:50,
    flexDirection:'row',
  },
  inputt: {
    height:50,
    width:300,
  },
  btn_seach: {
    height:50,
    width:50,
  },
  text_bg: {
    flex:1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:15,
    textAlign: 'center',

  },
});
