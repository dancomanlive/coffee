import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import {RootStackParamList} from '../navigation/RootStack';

export default function FirstScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          header="Dark Roasted Beans"
          subHeader="Tab the machine to start"
        />
        <Image source={require('../assets/Logo.png')} style={styles.image} />
        <Pressable onPress={() => navigation.navigate('FIRST')}>
          <Text style={styles.linkText}>How does this work</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingHorizontal: 16,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
    marginTop: 82,
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    left: 16,
    marginTop: 35,
    textDecorationLine: 'underline',
  },
});
