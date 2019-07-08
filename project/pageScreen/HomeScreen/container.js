import React, { Component } from "react";
import { View, Text, Button,AsyncStorage } from "react-native";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: "Welcome to the app!",
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#000"
        />
      ),
      headerRight: (
        <Text onPress={navigation.getParam("increaseCount")} >
         {navigation.getParam("count")}
        </Text>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
    this.props.navigation.setParams({ count: this.state.count });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
    this.props.navigation.setParams({ count: this.state.count });
  };


  _showMoreApp = () => {
    this.props.navigation.navigate('Detail');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          onPress={() => this.props.navigation.navigate('MyModal')}
          title="Info"
          color="#000"
        />
        <Text>Home Screen</Text>
        <Text
          onPress={() => {
            this.props.navigation.navigate("Detail");
          }}
        >
          go to Detail
        </Text>
        <Button
          // onPress={() => this.props.navigation.navigate('Notifications')}
          onPress={() => this.props.navigation.openDrawer()}
          title="Go to notifications"
        />


        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }
}

export default Container;
