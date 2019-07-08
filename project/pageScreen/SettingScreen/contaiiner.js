import React, { Component } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

class Container extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: "setting"
      };
    };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Text
          onPress={() => {
            this.props.navigation.navigate("Detail");
          }}
        >
          go to Detail
        </Text>
      </View>
    );
  }
}

export default Container;
