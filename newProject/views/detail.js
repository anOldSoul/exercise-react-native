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

export default class detail extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      text: '',
      listExpand:[false,false,false,false],//true表示有数据更新 
    };
  }
  render() {
    return (
      <View style={styles.container}>
        hahaha
      </View>
    );
  }
}