import React, { Component } from 'react';
import {
  Platform,
  Picker,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ListView
} from 'react-native';
let list = ['基本信息', '健康信息', '用药信息', '体检信息'];
let list1 = ['性别', '年龄', '体重（公斤）', '身高（厘米）'];
let list2 = ['submenu1', 'submenu2', 'submenu3'];
let list3 = ['hhahh', 'yyyyy', 'iiiiiii'];
let list4 = ['aaaaa', 'bbbb', 'ccccc'];

export default class healthyDocument extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      text: '',
      listExpand:[false,false,false,false],//true表示有数据更新 
    };
  }
  renderMenuList(list) { 
    return list.map((item, i) => this.renderItem(item, i)); 
  }
  onPressItem(i){ 
    let l=this.state.listExpand; 
    l[i]=!l[i]; 
    this.setState({listExpand:l}); 
  }
  renderItem(item, i) {
    return (
      <View key={i}> 
      <TouchableOpacity 
                activeOpacity={0.75} 
                onPress={this.onPressItem.bind(this,i) }               
      > 
      <View style={styles.itemContainer} > 
        <Text>{item}</Text>        
      </View> 
      </TouchableOpacity>
      {this.state.listExpand[i]?this.renderSubMenuList(list2, i):null} 
      </View> 
      
    ); 
  }
  renderSubMenuList(list2, index) {
    if (index == 0) {
      return list1.map((item, i) => this.rederBasic(item, i));
    } else if (index == 1) {
      return list2.map((item, i) => this.renderSubItem(item, i));
    } else if (index == 2) {
      return list3.map((item, i) => this.renderSubItem(item, i));
    } else {
      return list4.map((item, i) => this.renderSubItem(item, i));
    }
  }
  rederBasic(item, i) {
    if (i == 0) {
      return (
        <View style={styles.itemContainer} key={i}> 
          <Text>{item}</Text>
          <Picker
            style={{width: '50%'}}
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="男" value="male" />
            <Picker.Item label="女" value="female" />
          </Picker>
        </View>
        );
    } else {     
      return (
        <View style={styles.itemContainer} key={i}> 
          <Text>{item}</Text>
          <TextInput
            style={{width: 100}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
        </View> 
        );
    }
  }
  renderSubItem(item, i) {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.itemContainer} key={i}> 
        <Text onPress={() => navigate('Chat',{ user: 'Lucy' })}>{item}</Text>
      </View> 
    ); 
  }
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.head}>
            <Image style={styles.headImg} source={require('../images/head.png')} />
            <Text style={styles.headName}>Huiling</Text>
            <Text style={styles.title}>为定制专属您的健康管理，请完善信息</Text>
            <Text style={styles.progress}></Text>
          </View>
          <ScrollView contentContainerStyle={styles.contentContainer}> 
            {this.renderMenuList(list)} 
          </ScrollView> 
        </View>
      );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20, 
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: '#d2d3d5',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between'
  },
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