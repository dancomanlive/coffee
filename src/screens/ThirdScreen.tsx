import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import {RootStackParamList} from '../navigation/RootStack';

export default function ThirdScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {params} = useRoute<RouteProps>();

  type RouteProps = RouteProp<RootStackParamList, 'THIRD'>;

  return (
    <SafeAreaView style={styles.container}>
      <Header header="Brew with Lex" subHeader="Select your extra's" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {params.item.extras.map(item => (
          <View>
            <Card keyId={item._id} text={item.name} extras={item} />
          </View>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('OVERVIEW', {item: params.item})}>
        <Text style={styles.overview}>Overview</Text>
      </Pressable>
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
  overview: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
