import React from 'react'
import {
  View,
  Text
} from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = {
  title: {
    color: '#e3e3e3',
    fontSize: 28,
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#F95959',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Header
