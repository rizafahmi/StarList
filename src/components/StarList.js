import React from 'react'
import {
  View
} from 'react-native'

import StarItem from './StarItem'

const StarList = (props) => {
  return (
    <View style={styles.list}>
      {props.data.map((item) => <StarItem key={item.id} {...item} />)}
    </View>
  )
}

const styles = {
  list: {
    flex: 8,
    padding: 22
  }
}

export default StarList
