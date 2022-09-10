import { View, StyleSheet } from 'react-native'
import React from 'react'
import LootieView from 'lottie-react-native'

const Loading = () => {
  return (
    <View style ={[StyleSheet.absoluteFillObject, styles.container]}>
      <LootieView source={require('../img/99297-loading-files.json')} autoPlay loop/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0,3',
    zIndex: 1
  }
})
