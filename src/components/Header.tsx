import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface HeaderProps {
  header: string;
  subHeader: string;
}

export default function Card({header, subHeader}: HeaderProps) {
  return (
    <>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.subHeader}>{subHeader}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    left: 16,
  },
  subHeader: {
    fontSize: 24,
    fontFamily: 'Avenir Next',
    left: 16,
  },
});
