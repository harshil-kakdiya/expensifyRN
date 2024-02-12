import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { Image } from "expo-image";
import { useNavigation, useRouter } from "expo-router";
import HomePage from "./HomePage";



const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navvagation = useNavigation();
  const router = useRouter();

  const SignScreen = () => {
    if (Email && Password !== " ") {
      navvagation.navigate(HomePage);
    } else {
       
              ToastAndroid.show('Fill Email and Password', ToastAndroid.SHORT)
          
    }
  };
  return (
    <View className="flex-1 mt-6 mx-4">
      <SafeAreaView>
        <View className="flex h-screen mt-5 mb-5">
          <View className="relative items-center">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className="text-gray-600 text-xl font-bold text-center">
              Sign In
            </Text>
            <View className="flex-row justify-center mt-5">
              <Image
                className="h-80 w-80"
                source={require("../assets/images/login.png")}
              />
            </View>
          </View>
          <View className="space-y-2 mx-2">
            <Text className="text-lg font-bold text-gray-600">Email</Text>

            <TextInput
              value={Email}
              placeholder="Enter the Email"
              onChange={(value) => setEmail(value)}
              className="p-2 px-4 bg-white rounded-xl mb-3 "
            />

            <Text className="text-lg font-bold text-gray-600">Password</Text>

            <TextInput
              placeholder="Enter the Password"
              value={Password}
              secureTextEntry
              onChange={(value) => setPassword(value)}
              className="p-2 px-4 bg-white rounded-xl mb-3 "
            />
             <TouchableOpacity
              className="flex-row justify-end">
              <Text className="text-green-500 font-bold text-center ">
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 justify-end mb-8">
            <TouchableOpacity
              onPress={SignScreen}
              className="my-6 rounded-3xl p-3 shadow-sm mx-2 mb-10"
              style={{ backgroundColor: "#50C878" }}
            >
              <Text className="text-white font-bold text-center text-lg ">
                Sign In
              </Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignIn;
