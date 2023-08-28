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
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Input } from 'react-native-elements';

export const CreatePostsScreen = () => {
  const [fontLoader, setfontLoader] = useState(false);
  const [userImage, setUserImage] = useState(
    // 'https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1693785600&Signature=IlkCKuaxq7h~mnmOc5t5Gwa0IBGHROPr7lrGpNEcW69RhwnsbkQy~8unBXWDd9MLHy4KRoepbtGho2-yiaxvOFElVWsgyX-SQ8VfKxHV7iQgfWodAApIERximW--clVuDO4iGBZx8dXoAoQq~fU3oyTGF2wO477QY-mVCoJQVr201MgavrI8BbGmZ~rlqfL2mQfJtHNIY~8Ewh-mppWM~eWp-Q9BPPsi1TRFGAFKGswyO3B~7~Fe0HzOb7g8OYKhJRjUYQ~~phj7b3LsPD~0tSZYIZJ9PXSaAi38pOEcSHf0ZdgN4ylnsuSbHEnmLxDwdr4CtrnqQ4ivsHbYDsQyRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    null
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

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -150 : -140}
    >
      <View style={styles.container}>
        <View style={styles.photoLoaderBox}>
          {userImage ? (
            <Image source={{ uri: userImage }} style={styles.photo} />
          ) : (
            <View style={styles.templateBox}></View>
          )}
          <TouchableOpacity
            style={[
              styles.photoButton,
              userImage
                ? { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                : { backgroundColor: '#fff' },
            ]}
          >
            <MaterialIcons
              name="photo-camera"
              size={24}
              color={userImage ? '#FFFFFF' : '#BDBDBD'}
            />
          </TouchableOpacity>

          <Text style={styles.photoText}>
            {userImage ? 'Редагувати фото' : 'Завантажте фото'}
          </Text>
        </View>
        <View style={styles.formBox}>
          <View style={styles.inputBox}>
            <Input
              placeholder="Назва..."
              inputStyle={styles.inputIcon}
              placeholderStyle={styles.placeholderStyle}
              placeholderTextColor="#BDBDBD"
              inputContainerStyle={styles.inputContainer}
            />
            <Input
              placeholder="Місцевість..."
              placeholderStyle={styles.placeholderStyle}
              placeholderTextColor="#BDBDBD"
              inputContainerStyle={styles.inputContainer}
              leftIcon={
                <Ionicons
                  name="md-location-outline"
                  size={20}
                  color="#BDBDBD"
                  type="font-awesome"
                />
              }
              inputStyle={styles.inputIcon}
            />
          </View>
          <TouchableOpacity style={styles.formButton}>
            <Text style={styles.buttonText}>Опубліковати</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonDeleteBox}>
          <TouchableOpacity style={styles.buttonDelete}>
            <AntDesign name="delete" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  photoLoaderBox: {
    marginTop: 32,
    gap: 8,
  },
  photo: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  photoButton: {
    position: 'absolute',
    top: 90,
    left: 140,
    padding: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 50,
  },
  photoIcon: {},
  photoText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  templateBox: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  formBox: {},
  inputBox: {
    marginTop: 32,
    marginBottom: 5,
  },
  placeholderStyle: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  inputIcon: {
    paddingTop: 16,
    paddingBottom: 15,
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#212121',
  },
  inputContainer: {
    borderBottomColor: '#E8E8E8',
  },
  formButton: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  buttonDeleteBox: {
    alignItems: 'center',
  },
  buttonDelete: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
});
