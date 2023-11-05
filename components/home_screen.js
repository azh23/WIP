
// export default function home_screen() {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.logo} source={require('../assets/Anteater/pixil-layer-3.png')} />
//     </View>
//   );
// }
import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, StyleSheet} from 'react-native';


const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };

  export default function home_screen() {
      return (
        <FadeInView>
          <Image style={styles.logo} source={require('../assets/Anteater/pixil-layer-3.png')} />
        </FadeInView>
      );
    }

//     return (
//       <View>
//         <TouchableOpacity onPress={this.fadeOutImage}>
//           <Animatable.View
//             ref={(ref) => (this.imageRef = ref)}
//             animation="fadeOut"
//             duration={1000}
//           >
//             <Image style={styles.logo}source={require('../assets/Anteater/pixil-layer-3.png')}
//             />
//           </Animatable.View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

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