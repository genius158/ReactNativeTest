/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ToastAndroid,
    ScrollView,
    ListView,
    Navigator,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TextInput
} from 'react-native';


//import MyScene from './src/MyScene';

import List from './src/list';

//
// class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { showText: true };
//
//         // Toggle the state every second
//         setInterval(() => {
//             this.setState({ showText: !this.state.showText });
//         }, 1000);
//     }
//
//     render() {
//         let display = this.state.showText ? this.props.text : ' ';
//         return ( < Text > {display } < /Text>);
//     }
//
// }


//class reactTest2 extends Component {
 //  constructor(props) {
 //   super(props);
 //    console.log("adtad");
 //   this.state = {text: ''};
 // }
 //    render() {
        // return ( < View >
        //     < Blink text = 'I love to blink' / >
        //     < Blink text = 'Yes blinking is so great' / >
        //     < Blink text = 'Why did they ever take this out of HTML' / >
        //     < Blink text = 'Look at me look at me look at me' / >
        //     < /View>
        // );

        // return (
        //     <View style={{padding: 10}}>
        //       <TextInput
        //         style={{height: 40}}
        //         placeholder="Type here to translate!"
        //         onChangeText={(text) => this.setState({text})}
        //       />
        //       <Text style={{padding: 10, fontSize: 42}}>
        //         {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        //       </Text>
        //     </View>
        //   );

        // return(
        //        <ScrollView>
        //          <Text style={{fontSize:96}}>Scroll me plz</Text>
        //          <Text style={{fontSize:96}}>Scroll me plz</Text>
        //          <Text style={{fontSize:96}}>Scroll me plz</Text>
        //          <Text style={{fontSize:96}}>Scroll me plz</Text>
        //        </ScrollView>
        //    );

    //  }

    // Initialize the hardcoded data
    //listview
    // constructor(props) {
    //   super(props);
    //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //   this.states = {
    //     dataSource: ds.cloneWithRows([
    //       'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
    //       'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
    //       'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
    //       'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
    //     ])
    //   };
    // }
    // render() {
    //   return (
    //     <View style={{paddingTop: 22}}>
    //       <ListView
    //         dataSource={this.states.dataSource}
    //         renderRow={(rowData) => <Text>{rowData}</Text>}
    //       />
    //     </View>
    //   );
    // }
    //

    //网络访问
    // fetch('https://mywebsite.com/endpoint/', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   })
    // })


//     function getMoviesFromApiAsync() {
//         return fetch('https://facebook.github.io/react-native/movies.json')
//           .then((response) => response.json())
//           .then((responseJson) => {
//             return responseJson.movies;
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       }
//
//       async function getMoviesFromApi() {
//          try {
//            let response = await fetch('https://facebook.github.io/react-native/movies.json');
//            let responseJson = await response.json();
//            return responseJson.movies;
//          } catch(error) {
//            console.error(error);
//          }
//        }
//
//        var request = new XMLHttpRequest();
// request.onreadystatechange = (e) => {
//   if (request.readyState !== 4) {
//     return;
//   }
//
//   if (request.status === 200) {
//     console.log('success', request.responseText);
//   } else {
//     console.warn('error');
//   }
// };
//
// request.open('GET', 'https://mywebsite.com/endpoint/');
// request.send();

//引入MyScene
// render() {
//    return (
//      <MyScene />
//    )
//  }

// _onPressButton() {
//      ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG);
//   }
//
//   render() {
//     return (
//       <TouchableHighlight onPress={this._onPressButton}>
//         <Text style={styles.text}>Button</Text>
//       </TouchableHighlight>
//     );
//   }
// }

// var styles = StyleSheet.create({
//   text: {
//     color: 'black',
//     backgroundColor: 'skyblue',
//   },
// });

class reactTest2 extends Component {
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


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state={};
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

 render(){
   return(
     <View>
         <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <Text>dsfsdfsdf{ this.state.titleText }</Text>
        </TouchableHighlight>
     </View>
   );
 }
}



AppRegistry.registerComponent('reactTest2', () => reactTest2);
