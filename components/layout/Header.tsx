import { IconSun } from '@tabler/icons-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Colors from '@/constants/Colors';

const Header = () => {
  const { toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-row items-center justify-between p-4">
      <Text className="text-lg font-medium text-red-500 dark:text-blue-500">Wellcome</Text>
      <TouchableOpacity onPress={() => toggleColorScheme()}>
        <IconSun size={22} color={Colors.light.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
