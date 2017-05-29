import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import Sound from 'react-native-sound'

const onPressButton = (sound) => {
  // const audio = require('./chewy_roar.mp3')
  const chewySound = new Sound('chewie_chatting.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(error)
    }
  })
  console.log(chewySound)
  chewySound.play((success) => {
    if (success) {
      console.log(success)
    } else {
      console.log('error')
    }
  })
  chewySound.release()
}

const StarItem = (props) => {
  return (
    <TouchableOpacity onPress={() => onPressButton(props.sound)} style={styles.listItem}>
      <Image style={styles.listImage} source={{uri: props.imageUrl}} />
      <View style={styles.listTextContainer}>
        <Text style={styles.listText}>{props.name}</Text>
      </View>
    </TouchableOpacity>
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
