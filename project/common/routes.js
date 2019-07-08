import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  StackViewTransitionConfigs,
  createDrawerNavigator
} from "react-navigation";

import HomeScreen from "../pageScreen/HomeScreen/container";
import DetailScreen from "../pageScreen/DetailScreen/container";
import ModelScreen from "../pageScreen/ModelScreen/container";
import SettingScreen from "../pageScreen/SettingScreen/contaiiner";
import LoadingScreen from "../pageScreen/LoadingScreen/contaiiner";
import SignInScreen from "../pageScreen/SignInScreen/container";
import MyNotificationsScreen from "../pageScreen/MyNotificationsScreen/container";

const IOS_MODAL_ROUTES = ['MyModal'];
const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = IOS_MODAL_ROUTES.some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
  )
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    isModal
  );
};

const Home = createStackNavigator({
  Home: HomeScreen,
});
const Settings = createStackNavigator({
  Settings: SettingScreen
});

// 主页面Tab
const Main = createBottomTabNavigator({
  Home,
  Settings
});

// APP主路由
const AppStack = createStackNavigator({
  // tab
  Main:{
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  // other
  Detail: DetailScreen,
  MyModal: ModelScreen
},{
  headerMode: "screen",
  transitionConfig: dynamicModalTransition,
});


//抽屉路由
const MyDrawerNavigator = createDrawerNavigator({
  Home: AppStack,
  Notifications: MyNotificationsScreen
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: MyDrawerNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default AppNavigator;
