import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export const ProfileScreen = ({ navigation }) => {
  const [fontLoader, setfontLoader] = useState(false);
  const [userImage, setUserImage] = useState(
    'https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1693785600&Signature=IlkCKuaxq7h~mnmOc5t5Gwa0IBGHROPr7lrGpNEcW69RhwnsbkQy~8unBXWDd9MLHy4KRoepbtGho2-yiaxvOFElVWsgyX-SQ8VfKxHV7iQgfWodAApIERximW--clVuDO4iGBZx8dXoAoQq~fU3oyTGF2wO477QY-mVCoJQVr201MgavrI8BbGmZ~rlqfL2mQfJtHNIY~8Ewh-mppWM~eWp-Q9BPPsi1TRFGAFKGswyO3B~7~Fe0HzOb7g8OYKhJRjUYQ~~phj7b3LsPD~0tSZYIZJ9PXSaAi38pOEcSHf0ZdgN4ylnsuSbHEnmLxDwdr4CtrnqQ4ivsHbYDsQyRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  );

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        RobotoMedium: require('../assets/fonts/RobotoMedium.ttf'),
        RobotoRegular: require('../assets/fonts/RobotoRegular.ttf'),
      });
      setfontLoader(true);
    }
    loadFont();
  }, []);

  if (!fontLoader) {
    return null;
  }

  const handleImageUpload = (selectedImage) => {
    setUserImage(selectedImage);
  };

  const handleImageDelete = () => {
    setUserImage(null);
  };

  const onReturnLoginPage = () => {
    navigation.navigate('Login');
  };

  const onCommentsPage = () => {
    navigation.navigate('Comments');
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.backgroundPhoto}
        source={require('../assets/background.png')}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {userImage ? (
            <View style={styles.containerPhoto}>
              <Image source={{ uri: userImage }} style={styles.image} />
              <View style={styles.photoBox}>
                <TouchableOpacity
                  style={styles.icon}
                  //  onPress={handleImageDelete}
                >
                  <AntDesign name="closecircleo" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.templateBox}>
              <TouchableOpacity
                style={styles.icon}
                // onPress={() => handleImageUpload()}
              >
                <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            style={styles.exitIconButton}
            onPress={onReturnLoginPage}
          >
            <Ionicons name="exit-outline" size={26} color="#BDBDBD" />
          </TouchableOpacity>

          <Text style={styles.title}>Natali Romanova</Text>
          <View style={styles.contentBox}>
            <Image
              source={require('../assets/content.jpg')}
              style={styles.photoContent}
            />
            <Text style={styles.nameContent}>Ліс</Text>
            <View style={styles.deteilsContent}>
              <TouchableOpacity style={styles.comment} onPress={onCommentsPage}>
                <Fontisto name="comment" size={20} color="#BDBDBD" />
                <Text style={styles.commentText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.like}>
                <AntDesign name="like2" size={24} color="#BDBDBD" />
                <Text style={styles.likeText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.location}>
                <Ionicons
                  name="md-location-outline"
                  size={20}
                  color="#BDBDBD"
                />
                <Text style={styles.locationText}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundPhoto: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  templateBox: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    top: -60,
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  containerPhoto: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: -60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  photoBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  icon: {
    right: -12,
    bottom: 10,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  title: {
    fontFamily: 'RobotoMedium',
    fontSize: 30,
    color: '#212121',
    letterSpacing: 0.3,
    textAlign: 'center',
    marginTop: 92,
  },
  exitIconButton: {
    position: 'absolute',
    right: 16,
    marginTop: 22,
  },
  contentBox: {
    marginTop: 33,
    marginBottom: 32,
    gap: 8,
  },
  photoContent: {
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  nameContent: {
    fontFamily: 'RobotoMedium',
    fontSize: 16,
  },
  deteilsContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  commentText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  like: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  likeText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#212121',
    textDecorationLine: 'underline',
  },
});
