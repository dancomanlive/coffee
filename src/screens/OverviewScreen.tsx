import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';

export default function Overview() {
  return (
    <SafeAreaView style={styles.container}>
      <Header header="Brew with Lex" subHeader="Overview" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
