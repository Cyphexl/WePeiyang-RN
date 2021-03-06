/*
 * Home Navigator
 * Created by Tzingtao Chow
 * ---
 *
 * 主页导航器。
 * 使用它主页底部三个 Bottom Tab bar 之间跳转。
 *
 */

import * as React from "react"
import { createBottomTabNavigator } from "react-navigation"
import HomeScreen from "../screens/home-screen"
import { ModulesScreen } from "../screens/modules-screen"
import { TjuLoginScreen } from "../screens/tju-login-screen"
import { Text } from "../components/text"
import { TextStyle, ViewStyle } from "react-native"
import { color, layoutParam } from "../theme"
import Touchable from "react-native-platform-touchable"
import { shadowPresets } from "../theme"

const barStyle: ViewStyle = {
  height: layoutParam.footerHeight,
  elevation: 30,
  backgroundColor: color.card,
  overflow: "visible",
  alignItems: "center",
  borderTopWidth: 0,
  ...shadowPresets.large,
}
const textStyle: TextStyle = {
  color: color.primary,
  textAlign: "center",
}

export const HomeNavigator = createBottomTabNavigator(
  {
    wpy: { screen: HomeScreen },
    modules: { screen: ModulesScreen },
    network: { screen: TjuLoginScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      let genCustomTag = ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let i18nKey = "tab." + routeName
        return (
          <Touchable
            onPress={() => navigation.navigate(routeName)}
            background={Touchable.Ripple(color.lightGrey, true)}
            delayPressIn={0}
          >
            <Text tx={i18nKey} style={textStyle} preset="h5" />
          </Touchable>
        )
      }
      return {
        tabBarLabel: genCustomTag,
      }
    },
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      showIcon: false,
      labelStyle: textStyle,
      style: barStyle,
    },
  },
)
