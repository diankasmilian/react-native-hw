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

export const Posts = ({ onPress }) => {
  const Item = ({ title, uri, location, comments, like }) => (
    <View style={styles.contentBox}>
      <Image source={{ uri: uri }} style={styles.photoContent} />
      <Text style={styles.nameContent}>{title}</Text>
      <View style={styles.deteilsContent}>
        <View style={styles.statistic}>
          <TouchableOpacity style={styles.comment} onPress={onPress}>
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
    </View>
  );

  return (
    <FlatList
      style={styles.list}
      data={DATA}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          uri={item.uri}
          like={item.like}
          location={item.location}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  list: {},
  contentBox: {
    marginBottom: 32,
    gap: 8,
    justifyContent: 'center',
    width: '100%',
  },
  photoContent: {
    borderRadius: 10,
    width: '100%',
    height: 240,
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
