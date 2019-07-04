/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import DrawerNavigator from './components/DrawerNavigator';

// export default class App extends Component {
//   render(){
//     return (
//       <DrawerNavigator />
//     );
//   }
// }



import React, {Component} from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";


export default class App extends Component<Props> {

  state = {
    hbar: 0,
    dollar: 0,
    updated: '',
    account: '...8ff7a7'
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header1}>
          <Text style={styles.headertext}>Header</Text>
        </View>

        <View>
          <Text style={styles.headline1}>Default Account {this.state.account} </Text>
          <Text style={styles.headline2} >{this.state.hbar}h</Text>
          <Text style={styles.headline3} >${this.state.dollar}</Text>
        </View>

        <View style={styles.buttontop}>
            <View style={styles.button} ><Text style={styles.text}>Request</Text></View>
            <View style={styles.button} ><Text style={styles.text2}>Pay</Text></View>
        </View>

        <View style={styles.dropdown}>
          {/* <Text>Transaction</Text> */}
        </View>

        <View>
          <Text style={styles.transaction}> No Transactions </Text>
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // height: 600
  },
  transaction: {
    textAlign: 'center',
    margin: 20 ,
    fontSize: 20
  },
  dropdown: {
    height: 15,
    marginTop: 80,
    backgroundColor: '#DDD'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttontop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#fff',
    width: '40%',
    height: 40,
    margin: 15,
    borderRadius:6,
    borderWidth: 1,
    borderColor: '#000'
  },
  text: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
    marginLeft: 35,
    marginTop: 7,
    color: '#4696F2'
  },
  text2: {
    marginLeft: 45,
    marginTop: 7,
    color: 'red'
  },
  headline2: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20
  },
  headline3:{
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 0
  },
  headline1: {
    textAlign: 'center',
    marginTop: 40
  },
  header1: {
    height: 40,
    backgroundColor: '#fff',
  },
  headertext: {
    textAlign: 'center',
  }

});
