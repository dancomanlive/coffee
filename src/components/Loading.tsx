import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>'Loading...'</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
