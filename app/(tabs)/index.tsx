import { IconSun } from '@tabler/icons-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import MainTemplate from '@/components/base/MainTemplate';
import { View } from '@/components/base/View';

import Colors from '@/constants/Colors';

const Index = () => {
  const { toggleColorScheme } = useColorScheme();
  return (
    <MainTemplate scrollView={true}>
      <View className="flex-row items-center justify-between p-4">
        <Text className="text-lg font-medium">Wellcome</Text>
        <TouchableOpacity onPress={() => toggleColorScheme()}>
          <IconSun size={22} color={Colors.light.text} />
        </TouchableOpacity>
      </View>
      {[...Array(80).keys()].map((_, i) => (
        <View key={i} className="flex-1 p-5 mb-8 bg-green-500">
          <Text>index {i} asd</Text>
        </View>
      ))}
    </MainTemplate>
  );
};

export default Index;
