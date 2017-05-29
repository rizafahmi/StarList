import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

const StarItem = (props) => {
  console.log(props)
  return (
    <View style={styles.listItem}>
      <Image style={styles.listImage} source={{uri: props.imageUrl}} />
      <View style={styles.listTextContainer}>
        <Text style={styles.listText}>{props.name}</Text>
      </View>
    </View>
  )
}

const styles = {
  listImage: {
    height: 64,
    width: 64
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#E3E3E3',
    marginBottom: 22
  },
  listText: {
    fontSize: 22
  },
  listTextContainer: {
    justifyContent: 'center',
    paddingLeft: 22
  }
}

export default StarItem
