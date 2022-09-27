import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: '#CC99CC',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
});
