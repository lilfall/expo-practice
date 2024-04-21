import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { SafeAreaView as SafeArea, SafeAreaViewProps } from 'react-native-safe-area-context';

import { cn } from '@/lib/cn';

export interface IMainTemplate extends SafeAreaViewProps {
  scrollView?: boolean;
}

const MainTemplate = ({ children, scrollView = true, className }: IMainTemplate) => {
  const { colorScheme } = useColorScheme();
  const variantStyle = [colorScheme === 'dark' && 'bg-zinc-800', colorScheme === 'light' && 'bg-zinc-200'];
  if (scrollView)
    return (
      <SafeAreaView className={cn('h-full w-full', variantStyle, className)}>
        <SafeArea>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            {children}
          </ScrollView>
        </SafeArea>
        <StatusBar />
      </SafeAreaView>
    );
  return (
    <SafeAreaView className={cn('h-full w-full', variantStyle, className)}>
      <SafeArea>{children}</SafeArea>
      <StatusBar />
    </SafeAreaView>
  );
};

export default MainTemplate;
