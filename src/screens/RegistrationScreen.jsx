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
import { Buttons } from '../components/Buttons/Buttons';
import { AntDesign } from '@expo/vector-icons';

export const RegistrationScreen = ({ navigation }) => {
  const [fontLoader, setfontLoader] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const [inputName, setInputName] = useState('');
  const [inputValues, setInputValues] = useState({
    login: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = () => {
    console.log(inputValues);
    setInputValues({
      login: '',
      email: '',
      password: '',
    });
    navigation.navigate('Home');
  };

  const handleImageUpload = (selectedImage) => {
    setUserImage(selectedImage);
  };

  const handleImageDelete = () => {
    setUserImage(null);
  };

  const handleFocus = (name) => {
    setInputName(name);
  };

  const handleBlur = (name) => {
    if (inputName === name) {
      setInputName('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/background.png')}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -170 : -140}
          >
            <View style={styles.container}>
              {userImage ? (
                <View style={styles.containerPhoto}>
                  <Image source={{ uri: userImage }} style={styles.image} />
                  <View style={styles.photoBox}>
                    <TouchableOpacity
                      style={styles.icon}
                      onPress={handleImageDelete}
                    >
                      <AntDesign
                        name="closecircleo"
                        size={24}
                        color="#BDBDBD"
                      />
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
              <Text style={styles.title}>Реєстрація</Text>

              <View style={styles.inputBox}>
                <TextInput
                  style={[
                    styles.input,
                    inputName === 'login' && styles.inputActive,
                  ]}
                  placeholder="Логін"
                  onFocus={() => handleFocus('login')}
                  onBlur={() => handleBlur('login')}
                  onChangeText={(text) =>
                    setInputValues((prevValues) => ({
                      ...prevValues,
                      login: text,
                    }))
                  }
                  value={inputValues.login}
                />
                <TextInput
                  style={[
                    styles.input,
                    inputName === 'email' && styles.inputActive,
                  ]}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  onChangeText={(text) =>
                    setInputValues((prevValues) => ({
                      ...prevValues,
                      email: text,
                    }))
                  }
                  value={inputValues.email}
                />
                <View style={styles.inputPassword}>
                  <TextInput
                    style={[
                      styles.input,
                      inputName === 'password' && styles.inputActive,
                    ]}
                    placeholder="Пароль"
                    secureTextEntry={!showPassword && true}
                    onFocus={() => handleFocus('password')}
                    onBlur={() => handleBlur('password')}
                    onChangeText={(text) =>
                      setInputValues((prevValues) => ({
                        ...prevValues,
                        password: text,
                      }))
                    }
                    value={inputValues.password}
                  />
                  <TouchableOpacity
                    style={styles.buttonShowPassword}
                    onPress={() => setShowPassword((prev) => !prev)}
                  >
                    <Text style={styles.buttonText}>
                      {!showPassword ? 'Показати' : 'Сховати'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Buttons
                mainText={'Зареєструватися'}
                text={'Вже є аккаунт? Увійти'}
                onPress={handleSubmit}
                link={() => navigation.navigate('Login')}
              />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingBottom: 78,
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
  inputBox: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
    marginTop: 33,
  },
  input: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 15,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#F6F6F6',
    color: '#212121',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    fontFamily: 'RobotoRegular',
    fontSize: 16,
  },
  inputActive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FF6C00',
  },
  inputPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
  buttonShowPassword: {
    position: 'absolute',
    top: 15,
    right: 16,
  },
  buttonText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#1B4371',
  },
});
