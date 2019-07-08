import React, { Component } from "react";
import { View, Text, Button, StyleSheet,SafeAreaView } from "react-native";

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Model",
      // header: null
    };
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </SafeAreaView>
    );
  }
}

export default Container;
