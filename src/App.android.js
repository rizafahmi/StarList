import React from 'react'
import {
  View
} from 'react-native'

import { Header, StarList } from './components'

const starListData = [
  {id: 1, name: 'Anakin Skywalker', image: 'anakin.jpg', imageUrl: 'https://quintessentialldr.files.wordpress.com/2012/12/anakin-skywalker-before-darth-vader.jpg'},
  {id: 2, name: 'Chewbacca', image: 'chewy.jpg', imageUrl: 'http://digitalspyuk.cdnds.net/12/44/768x993/gallery_movies_star_wars_bts_pics_13.jpg', sound: './components/chewy_roar.mp3'},
  {id: 3, name: 'Darth Vader', image: 'vader.jpg', imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/23/69/60/236960ec5800a56e2b6fab97441dd691.jpg'},
  {id: 4, name: 'Rey', imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/QvQAGvRQwnU2PCUmfRUB6_rtW_Q/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/12/30/898/n/1922283/8bf3cee0_edit_img_image_39514428_1451354400_728x728/i/Who-Rey-Parents-Star-Wars-Force-Awakens.jpg'}
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
