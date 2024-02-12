import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import HomePage from "@/app/HomePage";
import { Image } from "expo-image";
import { ANDROID } from "nativewind/dist/utils/selector";

const Login = () => {
  const router = useRouter();
  const navigation = useNavigation();

  
  return (
    <View className="flex-1 p-4 h-full justify-around">
      <View className="flex-row justify-center mt-10">
        <Image
        
          source={require("@/assets/images/welcome.gif")}
          className="h-96 w-96 shadow"
        />
      </View>
      <View className="mb-5">
        <Text className="text-center font-bold text-4xl text-gray-600 mb-10">
          Expensify
        </Text>

        <TouchableOpacity
          onPress={()=>navigation.navigate('SignIn')}
          className="bg-green-500 rounded-full py-2 px-4 mb-5"
        >
          <Text className="font-bold text-white text-center text-xl ">Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate('SignUp')}
          className="bg-green-500 rounded-full py-2 px-4 "
        >
          <Text className="font-bold text-white text-center text-xl">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
