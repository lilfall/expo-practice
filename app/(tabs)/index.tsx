import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View } from '@/components/base/View';

const index = () => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View className="bg-green-500">
        <Text>index</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
