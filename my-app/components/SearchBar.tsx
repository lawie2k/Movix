import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeHolder: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({ placeHolder, onPress, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-slate-900 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5 "
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeHolder}
        placeholderTextColor={"#a8b5db"}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
      ></TextInput>
    </View>
  );
};

export default SearchBar;
