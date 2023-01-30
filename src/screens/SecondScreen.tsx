import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import {RootStackParamList} from '../navigation/RootStack';

export default function SecondScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {params} = useRoute<RouteProps>();

  type RouteProps = RouteProp<RootStackParamList, 'SECOND'>;

  return (
    <SafeAreaView style={styles.container}>
      <Header header="Brew with Lex" subHeader="Select your size" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {params.item.sizes.map(item => (
          <Pressable
            onPress={() => navigation.navigate('THIRD', {item: params.item})}
            key={item._id}>
            <Card text={item.name} />
          </Pressable>
        ))}
      </ScrollView>
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
