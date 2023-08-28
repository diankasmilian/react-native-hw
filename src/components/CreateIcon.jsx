import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const CreateIcon = ({ iconName, color }) => {
  return (
    <View style={[styles.tabIconContainer, { backgroundColor: '#FF6C00' }]}>
      <AntDesign name={'plus'} size={20} color={'#FFFFFF'} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
