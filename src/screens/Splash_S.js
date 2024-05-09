import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as IMAGE from '../resources/images/index'
export default function Splash_S(props) {

  useEffect(() => {
    screnNavigate()
  }, [])

  const screnNavigate = () => {
    setTimeout(() => {
     props.navigation.replace('Home_S')
    }, 2000);
  }

  return (
    <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <Image
        source={IMAGE.PLAYER_LOGO}
        style={{ width: 70, height: 70 }}
      />
      <Text style={{ fontSize: 25, color: "#f9d28f",marginTop:10 }}>CA Player</Text>
    </View>
  )
}

const styles = StyleSheet.create({})