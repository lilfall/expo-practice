import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const settings = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default settings;
