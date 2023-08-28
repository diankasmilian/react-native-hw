import * as Font from 'expo-font';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Buttons } from '../components/Buttons';
import React, { useEffect, useState } from 'react';

export const LoginScreen = ({ navigation }) => {
  const [fontLoader, setfontLoader] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputValues, setInputValues] = useState({
    login: '',
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
      password: '',
    });
    navigation.navigate('Home');
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
            keyboardVerticalOffset={Platform.OS === 'ios' ? -250 : -130}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Увійти</Text>
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
                <View style={styles.boxInputPassword}>
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
                    style={styles.buttonLook}
                    onPress={() => setShowPassword((prev) => !prev)}
                  >
                    <Text style={styles.buttonText}>
                      {!showPassword ? 'Показати' : 'Сховати'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Buttons
                mainText={'Увійти'}
                text={'Немає аккаунту? Зареєстуватися'}
                onPress={handleSubmit}
                link={() => navigation.navigate('Registration')}
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
    paddingBottom: 144,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontFamily: 'RobotoMedium',
    fontSize: 30,
    color: '#212121',
    letterSpacing: 0.3,
    textAlign: 'center',
    marginTop: 32,
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
  boxInputPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
  buttonLook: {
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
