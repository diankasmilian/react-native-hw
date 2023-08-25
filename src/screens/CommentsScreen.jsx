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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const CommentsScreen = () => {
  const [fontLoader, setfontLoader] = useState(false);

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
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -180 : -140}
    >
      <View style={styles.contentBox}>
        <Image
          source={require('../assets/content.jpg')}
          style={styles.photoContent}
        />
        <View style={styles.commentContainer}>
          <Image
            source={require('../assets/content.jpg')}
            style={styles.userPhoto}
          />
          <View style={styles.textContainer}>
            <Text style={styles.comment}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles.commentData}>09 червня, 2020 | 08:40</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Коментувати..." />
        <TouchableOpacity style={styles.inputButton}>
          <Ionicons name="arrow-up-circle" size={45} color="#FF6C00" />
        </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    gap: 16,
  },
  photoContent: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 32,
  },
  userPhoto: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    alignItems: 'flex-end',
    gap: 8,
  },
  comment: {
    fontFamily: 'RobotoRegular',
    fontSize: 13,
    lineHeight: 18,
  },
  commentData: {
    fontFamily: 'RobotoRegular',
    fontSize: 10,
    color: '#BDBDBD',
  },
  inputBox: {
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  input: {
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: '#F6F6F6',
    color: '#212121',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
  },
  inputButton: {
    position: 'absolute',
    top: 1,
    right: 4,
  },
});
