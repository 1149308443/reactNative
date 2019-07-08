import React, { Component } from "react";
import { View, Text } from "react-native";

class Container extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Text onPress={()=>{
            this.props.navigation.navigate('Home')
          }}>go to Home</Text>
           <Text onPress={()=>{
            this.props.navigation.push('Detail')
          }}>push to Detail</Text>
        </View>
      );
    }
  }

export default Container;