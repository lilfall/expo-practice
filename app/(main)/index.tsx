import React from 'react';
import { Text } from 'react-native';

import MainTemplate from '@/components/base/MainTemplate';
import { View } from '@/components/base/View';

const Index = () => {
  return (
    <MainTemplate scrollView={true} headerShown={true} headerPoisiton="sticky">
      {[...Array(80).keys()].map((_, i) => (
        <View key={i} className="flex-1 p-5 mb-8 bg-green-500">
          <Text>index {i} asd</Text>
        </View>
      ))}
    </MainTemplate>
  );
};

export default Index;
