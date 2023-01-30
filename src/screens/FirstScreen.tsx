import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import Card from '../components/Card';
import Header from '../components/Header';
import Loading from '../components/Loading';
import {coffeeMachineUrl} from '../constants/coffeeMachineUrl';
import {RootStackParamList} from '../navigation/RootStack';
import {Data} from '../types/DataType';
import addSizesAndExtras from '../utils/addSizesAndExtras';

export default function FirstScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [newData, setNewData] = useState<Data>();
  const {isLoading, error, data} = useQuery('data', () =>
    fetch(coffeeMachineUrl).then(res => res.json()),
  );

  useEffect(() => {
    if (data) {
      setNewData(addSizesAndExtras(data));
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (error instanceof Error) {
    console.warn('An error has occurred: ' + error.message);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header header="Brew with Lex" subHeader="Select your style" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {newData &&
          newData.types.map(item => (
            <Pressable
              onPress={() => navigation.navigate('SECOND', {item})}
              key={item._id}>
              <Card keyId={item._id} text={item.name} />
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
