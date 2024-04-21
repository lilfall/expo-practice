import { ScrollView, Text } from "react-native";
import React from "react";
import { View } from "@/components/base/View";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

type Props = {};

const index = (props: Props) => {
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
