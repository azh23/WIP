// import { Text, View, StyleSheet, Image } from 'react-native';

// export default function home_screen() {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.logo} source={require('../assets/Anteater/pixil-layer-3.png')} />
//     </View>
//   );
// }

import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

class FadingImage extends Component {
  fadeOutImage = () => {
    this.imageRef.fadeOut(3000); // 1000ms (1 second) duration for the fade-out animation
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.fadeOutImage}>
          <Animatable.View
            ref={(ref) => (this.imageRef = ref)}
            animation="fadeOut"
            duration={1000}
          >
            <Image
              source={require('../assets/Anteater/pixil-layer-3.png')}
              style={styles.logo}
            />
          </Animatable.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      
      alignItems: 'center',
      justifyContent: 'bottom',
      padding: 20,
      backgroundColor: '#FFD200',
    },
    logo:
    {
      flex: 1,
      width:500,
      height: 500,
      resizeMode: 'contain'
    }
});