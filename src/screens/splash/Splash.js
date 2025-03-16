import React ,{useRef,useState,useEffect} from 'react'
import {View,Text,StyleSheet } from 'react-native'
import Video  from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Splash = () => {

    const navigation = useNavigation();
    const [isvideofinished,setIsvideofinished] = useState(false);
    const video_save = require('../../assests/videos/TOOTHEASY.mp4')
    const videoRef = useRef(null)

    useEffect(() => {
        if(isvideofinished){
            navigation.navigate('home',navigation);
        }
    },[isvideofinished])

  return (
    <View style={styles.container}>
        <Video 
        ref={videoRef}
        source={video_save}
        style={styles.backgroundVideo}
        resizeMode='cover'
        muted={true}
        onEnd={() => setIsvideofinished(true)}
   />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
        backgroundVideo: {
            position: 'absolute',
            width: '100%',
            height: '100%',
          },   
})


export default Splash