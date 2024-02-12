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
import HomeScreen from "./HomePage"
const AddTrip = () => {
  const [place, setplace] = useState(" ");
  const [country, setcountry] = useState(" ");
  const navvagation = useNavigation();
  const router = useRouter();
  const handleAddtrip = () => {
    if (place && country !== " ") {
      router.navigate(HomeScreen);
    } else {
      ToastAndroid.show('Fill All the Field', ToastAndroid.SHORT);
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
              Add Trip
            </Text>
            <View className="flex-row justify-center mt-5">
              <Image
                className="h-64 w-64"
                source={require("../assets/images/4.png")}
              />
            </View>
          </View>
          <View className="space-y-2 mx-2">
            <Text className="text-lg font-bold text-gray-600">
            Where on Earth?
            </Text>

            <TextInput 
            value={place}
            placeholder="Enter the Place"
            onChange={value=>setplace(value)}
            className="p-2 px-4 bg-white rounded-xl mb-3 " />

            <Text className="text-lg font-bold text-gray-600">
            Which Country
            </Text>

            <TextInput 
            placeholder="Enter the Country"
            value={country}
            onChange={value=>setcountry(value)}
            className="p-2 px-4 bg-white rounded-xl mb-3 " />

          </View>
          <View className="flex-1 justify-end mb-8">
            <TouchableOpacity
            onPress={handleAddtrip}
              className="my-6 rounded-3xl p-3 shadow-sm mx-2 "
              style={{ backgroundColor: "#50C878" }}
            >
              <Text className="text-white font-bold text-center text-lg ">
                Add Trip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddTrip;
