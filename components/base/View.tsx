import React from 'react';
import { View as VView, ViewProps } from 'react-native';

import { cn } from '@/lib/cn';

interface IView extends ViewProps {
  variant?: 'base';
}

export const View = ({ children, className }: IView) => {
  return <VView className={cn(className)}>{children}</VView>;
};
