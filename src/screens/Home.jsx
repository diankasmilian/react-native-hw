import { PostsScreen } from './PostsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';
import { CreateIcon } from '../components/CreateIcon/CreateIcon';
import { TouchableOpacity } from 'react-native';

export const Home = ({ navigation }) => {
  const Tabs = createBottomTabNavigator();

  const onReturnLoginPage = () => {
    navigation.navigate('Login');
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          if (route.name === 'Posts') {
            return (
              <AntDesign
                name={'appstore-o'}
                size={24}
                color={focused ? '#FF6C00' : color}
              />
            );
          } else if (route.name === 'Create') {
            return <CreateIcon />;
          } else if (route.name === 'Profile') {
            return (
              <AntDesign
                name={'user'}
                size={24}
                color={focused ? '#FF6C00' : color}
              />
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            paddingTop: 9,
          },
          null,
        ],
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: 'Публікації',
          headerRight: () => (
            <TouchableOpacity
              onPress={onReturnLoginPage}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="exit-outline" size={26} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerTitle: 'Створити публікацію',
          tabBarStyle: { display: 'none' },
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

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};
