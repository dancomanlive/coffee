import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Type} from '../types/DataType';

export type RootStackParamList = {
  INTRO: undefined;
  FIRST: undefined;
  SECOND: {
    item: Type;
  };
  THIRD: {
    item: Type;
  };
  OVERVIEW: {
    item: Type;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default RootStack;
