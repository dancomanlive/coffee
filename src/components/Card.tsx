import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Extras} from '../types/DataType';
import CardOption from './CardOption';

interface CardProps {
  keyId: string;
  text: string;
  extras?: Extras;
}

export default function Card({keyId, text, extras}: CardProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option: string) => setSelectedOption(option);

  return (
    <View
      key={keyId}
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.container, {height: extras ? undefined : 94}]}>
      <Text style={styles.text}>{text}</Text>
      {extras && (
        <>
          <View style={styles.horizontalLine} />
          {extras.subselections.map(item => (
            <Pressable key={item._id}>
              <CardOption
                keyId={item._id}
                text={item.name}
                handleOptionChange={handleOptionChange}
                selectedOption={selectedOption}
              />
            </Pressable>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#AED7A0',
    borderRadius: 4,
    marginBottom: 10,
    justifyContent: 'center',
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
    marginVertical: 16,
  },
});
