import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { SafeAreaView as SafeArea, SafeAreaViewProps } from 'react-native-safe-area-context';

import { cn } from '@/lib/cn';

import Header from '../layout/Header';

export interface IMainTemplate extends SafeAreaViewProps {
  scrollView?: boolean;
  headerShown?: boolean;
  headerPoisiton?: 'sticky' | 'inline';
}

const MainTemplate = ({ children, scrollView = true, className, headerShown = true, headerPoisiton = 'sticky' }: IMainTemplate) => {
  const { colorScheme } = useColorScheme();
  const variantStyle = [colorScheme === 'dark' && 'bg-zinc-800', colorScheme === 'light' && 'bg-zinc-200'];

  if (scrollView)
    return (
      <SafeAreaView className={cn('h-full w-full', variantStyle, className)}>
        <SafeArea>
          {headerShown && headerPoisiton === 'sticky' && <Header />}
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            {headerShown && headerPoisiton === 'inline' && <Header />}
            {children}
          </ScrollView>
        </SafeArea>
        <StatusBar />
      </SafeAreaView>
    );
  return (
    <SafeAreaView className={cn('h-full w-full', variantStyle, className)}>
      <SafeArea>
        {headerShown && headerPoisiton === 'sticky' && <Header />}
        {children}
      </SafeArea>
      <StatusBar />
    </SafeAreaView>
  );
};

export default MainTemplate;
