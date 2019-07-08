// In App.js in a new project
import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import dva from "./project/common/util/dva";
import models from "./project/common/models";
import AppNavigator from "./project/common/routes";
const AppContainer = createAppContainer(AppNavigator);

const app = dva({
  models
});
class App extends Component {
  render() {
    return (
      <AppContainer
        // onNavigationStateChange={(prevState, newState, action)=>{}}
        // uriPrefix="/app"
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}

// export default app.start(App);
export default App;
