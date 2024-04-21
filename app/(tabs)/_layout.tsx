/* eslint-disable react/no-unstable-nested-components */
import { IconBolt, IconCompassFilled, IconHomeFilled, IconSettingsFilled } from '@tabler/icons-react-native';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/components/useColorScheme';

import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          paddingTop: 0,
          elevation: 0,
          margin: 8,
          borderRadius: 40,
          overflow: 'hidden'
        },
        tabBarBackground() {
          return <BlurView tint="dark" intensity={95} className="w-full h-full overflow-hidden rounded-full" />;
        },
        tabBarShowLabel: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <IconHomeFilled size={20} fill={color} />
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <IconBolt size={20} color={color} strokeWidth={1} fill={color} />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconCompassFilled size={20} fill={color} strokeWidth={1} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSettingsFilled size={20} fill={color} />
        }}
      />
    </Tabs>
  );
}
