import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Posts } from '../components/Posts/Posts';

const DATA = [
  {
    id: '1',
    uri: 'https://s3-alpha-sig.figma.com/img/10eb/cad8/e6009416f2009943b9cd5d7f02695269?Expires=1693785600&Signature=nOfUJgJK1mioBi0tOcXDywdz3WHlyspq7m9wnFjbrUVeMYlJ~asnBMC3jTsFIAt7Xot2oXtiDBuipZqnZ7QJ2pTjdh4XDd~GwF68K2C8IoGUkkKha4soM1ZRZxfH3k8AD60IJoZ6r6le06zdnfACBtVja6wVAO5Jl6a4e1DyhALalnC7BRXfiul54MIl2Z5aN1ZPdxpn3AkN~55xBZpBpZAtKWSlRyvJ61Kp1QcQJP1-rXldT1DTUyTbaJkoFKUxZhHF4cogG7x0ikWaSXGRbKIy7ikks4vgU7njRr6jZ5INnOc8Eskr6SFwTVtS65Wec92wwp1FvkkynCUNbh76sQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Ліс',
    comments: [],
    like: '0',
    location: `Ukraine`,
  },
  {
    id: '2',
    uri: 'https://s3-alpha-sig.figma.com/img/f15d/159f/a6ce3338a59841e1e3f926d58a5f2ae7?Expires=1693785600&Signature=iOcGP4hc2N0olyZtfPi-nTFFq0I1FhHu~TZMUULuzfh03BBAIocKgcAPQHTa~4hpPVvWICXKzAi9AMMD6YnhT2YnP4poXGfQzPcBK2wDmn5wYu8MuburAlvxEWFaKP~vIt6UhZKFj1S8fhcTmyTLROqa0VKT8j94yruBJiH5S2CDod2jmGBmOwLdkxcF-pejJiZ-~quGtF44NvxgK51S4-pzr~e2ZoEzxejxW99LpjRXM6pUgxMIz3JgBOhBPOxP9PvyYW46FWmNMqvgZZ5Ng7EIfdYImTnsm0TEOCvf4AxPJ7LIT-OZcsaIMAD716nybmRy6z8Hlf11eDm2mV1uuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Захід на Чорному морі',
    comments: [],
    like: '0',
    location: `Ukraine`,
  },
  {
    id: '3',
    uri: 'https://s3-alpha-sig.figma.com/img/5e97/0c74/9cd3abbfbe6ba44f66a368baac9c2839?Expires=1693785600&Signature=jpqORqlTSyx8sqlPrN8iUo4fDbxeGdwpGXvh6-xefxfkl3ZCUnA6P62f~YZTT1SZNo6fNjyaBP3XD~0GIZviPUjGMlN6e09nA~Ro6wYeu2YgL3EjtFVwGBMyOq9CklRaGPQNXexq7OQzu4KktcHoVnImBdSQKulPfV7VRNqZJSkGdvkW3UbEoN18YlchUOxgFwNwkjWStHjIzHEUhc3trG8cCpRFuWl4h0FnNkF3w003~6dN0DEimgCUx5xk8zqXaP1FaL1uwSTsDJHNtreKAIaQW8t2WNLtcg7KYDs6zpg2PWfxNRT-fwJUM6KGBvydTyAJDBb~~rF66onIKRnbpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Старий будиночок у Венеції',
    comments: [],
    like: '0',
    location: `Italy`,
  },
];

export const ProfileScreen = ({ navigation }) => {
  const [fontLoader, setfontLoader] = useState(false);
  const [userImage, setUserImage] = useState(
    'https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1693785600&Signature=IlkCKuaxq7h~mnmOc5t5Gwa0IBGHROPr7lrGpNEcW69RhwnsbkQy~8unBXWDd9MLHy4KRoepbtGho2-yiaxvOFElVWsgyX-SQ8VfKxHV7iQgfWodAApIERximW--clVuDO4iGBZx8dXoAoQq~fU3oyTGF2wO477QY-mVCoJQVr201MgavrI8BbGmZ~rlqfL2mQfJtHNIY~8Ewh-mppWM~eWp-Q9BPPsi1TRFGAFKGswyO3B~7~Fe0HzOb7g8OYKhJRjUYQ~~phj7b3LsPD~0tSZYIZJ9PXSaAi38pOEcSHf0ZdgN4ylnsuSbHEnmLxDwdr4CtrnqQ4ivsHbYDsQyRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  );

  const Item = ({ title, uri, location, comments, like }) => (
    <SafeAreaView style={styles.contentBox}>
      <Image source={{ uri: uri }} style={styles.photoContent} />
      <Text style={styles.nameContent}>{title}</Text>
      <View style={styles.deteilsContent}>
        <View style={styles.statistic}>
          <TouchableOpacity style={styles.comment} onPress={onCommentsPage}>
            <Fontisto name="comment" size={20} color="#BDBDBD" />
            <Text style={styles.commentText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.like}>
            <AntDesign name="like2" size={24} color="#BDBDBD" />
            <Text style={styles.likeText}>{like}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.location}>
          <Ionicons name="md-location-outline" size={20} color="#BDBDBD" />
          <Text style={styles.locationText}>{location}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
          <Posts onPress={onCommentsPage} />
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
    marginTop: 300,
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
    marginBottom: 33,
  },
  exitIconButton: {
    position: 'absolute',
    right: 16,
    marginTop: 22,
  },
  contentBox: {
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
  statistic: {
    flexDirection: 'row',
  },
  comment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginRight: 24,
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
