import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export const Buttons = ({ mainText, text, onPress, link }) => {
  return (
    <View style={styles.buttonBox}>
      <TouchableOpacity style={styles.submitButton} onPress={onPress}>
        <Text style={styles.submitButtonText}>{mainText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.singInButton} onPress={link}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    width: '100%',
    alignItems: 'center',
    marginTop: 43,
  },
  buttonText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: '#1B4371',
  },
  submitButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
  },
  submitButtonText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    color: 'white',
  },
  singInButton: {
    marginTop: 16,
  },
});
