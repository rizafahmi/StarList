import React from 'react'
import {
  View,
  Text
} from 'react-native'

import { Header, StarList } from './components'

const starListData = [
  {id: 1, name: 'Anakin Skywalker', image: './anakin.jpg'},
  {id: 2, name: 'Chewbacca', image: './chewy.jpg'},
  {id: 3, name: 'Darth Vader', image: './vader.jpg'}
]

const App = (props) => {
  return (
    <View style={styles.container}>
      <Header title='Star Wars Contact List' />
      <StarList data={starListData} />
    </View>
  )
}

const styles = {
  container: {
    backgroundColor: '#233142',
    flex: 1
  }
}

export default App
