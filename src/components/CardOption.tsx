import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface CardOptionProps {
  keyId: string;
  text: string;
  index: number;
  selectedIndex: boolean;
  handleOptionChange: (option: number) => void;
}

export default function CardOption({
  keyId,
  text,
  index,
  selectedIndex,
  handleOptionChange,
}: CardOptionProps) {
  return (
    <Pressable onPress={() => handleOptionChange(index)} key={keyId}>
      <View key={keyId} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        {selectedIndex ? (
          <Image source={require('../assets/Check.png')} style={styles.image} />
        ) : (
          <Image
            source={require('../assets/Uncheck.png')}
            style={styles.image}
          />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#9BC88B',
    borderRadius: 4,
    height: 56,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Avenir Next',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  image: {
    width: 20,
    height: 20,
  },
});
