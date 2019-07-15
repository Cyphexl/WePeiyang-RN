import * as React from "react"
import { observer } from "mobx-react"
import { StatusBar, View, ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, layoutParam } from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface NewsScreenProps extends NavigationScreenProps<{}> {
}

const ss = {
  container: {
    paddingHorizontal: layoutParam.paddingHorizontal,
    paddingVertical: layoutParam.paddingVertical
  } as ViewStyle,
}

// @inject("mobxstuff")
@observer
export class NewsScreen extends React.Component<NewsScreenProps, {}> {
  render () {
    return (
      <Screen preset="scroll">
        <StatusBar backgroundColor={color.background} barStyle="dark-content" />
        <View style={ss.container}>
          <Text tx="newsScreen.header" preset="h2" />
        </View>
      </Screen>
    )
  }
}
