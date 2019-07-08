import React, { Component } from "react";
import { View, Text, Button, StyleSheet,SafeAreaView,AsyncStorage } from "react-native";

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Please sign in"
    };
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </SafeAreaView>
    );
  }
}

export default Container;
