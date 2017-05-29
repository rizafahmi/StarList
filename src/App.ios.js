import React from 'react'
import {
  View,
  Text
} from 'react-native'

const App = (props) => {
  return (
    <View style={styles.container}>
      <Text>App iOS</Text>
    </View>
  )
}

const styles = {
  container: {
    marginTop: 22,
    backgroundColor: 'mediumaquamarine',
    flex: 1
  }
}

export default App
