import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const PostsScreen = ({ navigation }) => {
  const [fontLoader, setfontLoader] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        RobotoMedium: require('../assets/fonts/RobotoMedium.ttf'),
        RobotoRegular: require('../assets/fonts/RobotoRegular.ttf'),
        RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
      });
      setfontLoader(true);
    }
    loadFont();
  }, []);

  if (!fontLoader) {
    return null;
  }

  const onCommentsPage = () => {
    navigation.navigate('Comments');
  };

  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image
          source={require('../assets/photo.jpg')}
          style={styles.userPhoto}
        />
        <View style={styles.userNameBox}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
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
          <TouchableOpacity style={styles.location}>
            <Ionicons name="md-location-outline" size={20} color="#BDBDBD" />
            <Text style={styles.locationText}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
  },
  userBox: {
    marginTop: 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userNameBox: {},
  userName: {
    fontFamily: 'RobotoBold',
    fontSize: 13,
    color: '#212121',
  },
  userEmail: {
    fontFamily: 'RobotoRegular',
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
  },
  contentBox: {
    marginTop: 32,
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
