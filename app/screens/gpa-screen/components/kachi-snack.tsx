/*
 * Kachi Snack
 * Created by Tzingtao Chow
 * ---
 *
 * 一个 Kachi Snack 绘制一个学期的学期名、加权、绩点和卡绩指数。
 *
 */

import { TextStyle, View, ViewStyle } from "react-native"
import { color } from "../../../theme"
import { Text } from "../../../components/text"
import * as React from "react"

export interface KachiSnackProps {
  cols?
}

export function KachiSnack(props: KachiSnackProps) {
  const { cols } = props
  const textBase = {
    color: color.module().gpa[0],
    width: 50,
    textAlign: "center",
  }
  const ss = {
    snackContainer: {
      paddingVertical: 4,
      width: 220,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopColor: color.black(0.04),
      borderTopWidth: 0.8,
    } as ViewStyle,
    text: {
      ...textBase,
    } as TextStyle,
    textBold: {
      ...textBase,
      fontWeight: "bold",
    } as TextStyle,
  }

  return (
    <View style={ss.snackContainer} pointerEvents="box-only">
      {cols.map((col, i) => (
        <Text text={col} key={i} style={i === 3 ? ss.textBold : ss.text} preset="small" />
      ))}
    </View>
  )
}
