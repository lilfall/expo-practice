import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const two = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>two</Text>
      </View>
    </SafeAreaView>
  );
};

export default two;
