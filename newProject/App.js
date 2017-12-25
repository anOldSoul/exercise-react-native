/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'uuuuto reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      currentIndex: 2,
      show: true,
      dataSource: ds.cloneWithRows([
        {name: '健康信息',index: 0},
        {name: '用药信息',index: 1},
        {name: '体检信息',index: 2},
        {name: '健康报告',index: 3}])
    };
    this._onPressButton = this._onPressButton.bind(this);
  }
  _onPressButton() {
    console.log("You tapped the button!");
    this.setState((previousState) => {
        return ({
            show: !previousState.show,
            currentIndex: 1
        })
    });

  }
  renderRow(rowData) {
    let a = 0
    return  <View>
              <TouchableOpacity onPress={() => {
                a = rowData.index
                console.log(a);
              }}>
                <View style={styles.instructions}>
                  <Text>{rowData.name}</Text>
                  <Image style={styles.arrowImg} source={require('./images/ic_up.png')} />
                </View>
              </TouchableOpacity>
              <Text>{a}</Text>
            </View>
  }
  render() {
    // let v = this.state.show ? <Text>待显示的内容</Text> : null;
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Image style={styles.headImg} source={require('./images/head.png')} />
          <Text style={styles.headName}>Huiling</Text>
          <Text style={styles.title}>为定制专属您的健康管理，请完善信息</Text>
          <Text style={styles.progress}></Text>
        </View>
        <ListView  
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}  />
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
  },
  head: {
    height: 205,
    alignItems: 'center',
    backgroundColor: '#2ac4fb'
  },
  headImg: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    marginTop: 20
  },
  headName: {
    color: '#fff',
    marginTop: 5,
    opacity: 0.5,
    fontSize: 10
  },
  title: {
    color: '#fff',
    marginTop: 5,
    fontSize: 10
  },
  progress: {
    width: 130,
    height: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: '#d2d3d5',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
