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
import HomeScreen from "./HomePage";

export const categories = [
  {
    title: "Food",
    value: "food",
  },
  {
    title: "Shopping",
    value: "shopping",
  },
  {
    title: "Entertainment",
    value: "entertainment",
  },
  {
    title: "Commute",
    value: "commute",
  },
  {
    title: "Other",
    value: "other",
  },
];

const AddTrip = () => {
  const [title, settitle] = useState(" ");
  const [amount, setamount] = useState(" ");
  const [category, setcategory] = useState(" ");
  const navvagation = useNavigation();
  const router = useRouter();


  const handleAddExpanse=()=>{
    if(title && amount && category !== " "){
      router.back();
    }
    else{
      ToastAndroid.show('Fill All the Field', ToastAndroid.SHORT);
    }
  }
  return (
    <View className="flex-1 mt-5 mx-4">
      <SafeAreaView>
        <View className="flex h-screen mt-5 mb-5">
          <View className="relative items-center">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className="text-gray-600 text-xl font-bold text-center">
              Add Expanse
            </Text>
            <View className="flex-row justify-center mt-5">
              <Image
                className="h-64 w-64"
                source={require("../assets/images/expenseBanner.png")}
              />
            </View>
          </View>
          <View className="space-y-2 mx-2">
            <Text className="text-lg font-bold text-gray-600">For What?</Text>

            <TextInput
              value={title}
              titleholder="Enter the title"
              onChange={(value) => settitle(value)}
              className="p-2 px-4 bg-white rounded-xl mb-3 titleholder-gray-500 titleholder-opacity-50"
            />

            <Text className="text-lg font-bold text-gray-600">How Much?</Text>

            <TextInput
              titleholder="Enter the amount"
              value={amount}
              onChange={(value) => setamount(value)}
              className="p-2 px-4 bg-white rounded-xl mb-3 titleholder-gray-500 titleholder-opacity-50"
            />
          </View>
          <View className="px-2">
            <Text className="text-lg font-bold text-gray-600">Category</Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map((item) => {
                let bgcolour = 'bg-white';
                if(item.value==category) bgcolour= 'bg-green-200'
                return (
                  <TouchableOpacity
                    onPress={() => setcategory(item.value)}
                    key={item.value}
                    className={`bg-white ${bgcolour} mr-2 px-4 rounded-3xl mb-2`}
                  >
                    <Text className="m-2">{item.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View className="flex-1 justify-end mb-8">
            <TouchableOpacity
              onPress={handleAddExpanse}
              className="my-6 rounded-3xl p-3 shadow-sm mx-2"
              style={{ backgroundColor: "#50C878" }}
            >
              <Text className="text-white font-bold text-center text-lg">
                Add Expense
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddTrip;
