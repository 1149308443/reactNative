import React, { Component } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

class Container extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: "MyDrawerNavigator"
      };
    };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back home"
        />
      </View>
    );
  }
}

export default Container;
