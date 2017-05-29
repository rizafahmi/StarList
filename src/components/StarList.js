import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

const StarList = (props) => {
  return (
    <View style={styles.list}>
      {props.data.map((item) => {
        return (
          <View style={styles.listItem}>
            <Image style={styles.listImage} source={require('./anakin.jpg')} />
            <View style={styles.listTextContainer}>
              <Text style={styles.listText}>{item.name}</Text>
            </View>
          </View>
        )
      })}
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
  },
  list: {
    flex: 8,
    padding: 22
  }
}

export default StarList
