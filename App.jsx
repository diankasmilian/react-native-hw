import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { Home } from './src/screens/Home';
import { CommentsScreen } from './src/screens/CommentsScreen';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) => ({
            headerTitle: 'Коментарі',
            headerLeft: () => (
              <AntDesign
                name="arrowleft"
                size={24}
                color="#000"
                style={{ marginLeft: 16 }}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
