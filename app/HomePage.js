import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useReducer } from "react";
import banner from "../assets/images/banner.png";
import { Image } from "expo-image";
import EmptyList from "../components/EmptyList"
import { useRouter } from "expo-router";
import TripExpances from "./TripExpances";
const images = {
  1: require("../assets/images/1.png"),
  2: require("../assets/images/2.png"),
  3: require("../assets/images/3.png"),
  4: require("../assets/images/4.png"),
  5: require("../assets/images/5.png"),
  6: require("../assets/images/6.png"),
  7: require("../assets/images/7.png"),
  8: require("../assets/images/8.png"),
  9: require("../assets/images/9.png"),
  11: require("../assets/images/10.png"),
  12: require("../assets/images/11.png"),
  10: require("../assets/images/12.png"),
};

function randomImage() {
  let min = 1;
  let max = 12;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return images[random];
}


const items = [
  {
    id: 1,
    place: "Gujrat",
    country: "India",
  },
  {
    id: 2,
    place: "London Eye",
    country: "England",
  },
  {
    id: 3,
    place: "Washington dc",
    country: "America",
  },
  {
    id: 4,
    place: "New york",
    country: "America",
  },
  {
    id: 5,
    place: "Washington dc",
    country: "America",
  },
  {
    id: 6,
    place: "New york",
    country: "America",
  },
];

const HomePage = () => {
  const router =useRouter();
  return (
   
    <View className="flex-1 mt-6 bg-gray-50">
      <SafeAreaView>
        <View className="flex-row items-center justify-between p-4 ">
          <Text className="text-gray-600 font-bold text-3xl shadow-sm ">
            Expensify
          </Text>
          <TouchableOpacity className="py-2 px-4 bg-white border border-gray-200 font-bold rounded-full text-md">
            <Text className="text-gray-600 font-bold">LogOut</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-center bg-blue-200 rounded-2xl mx-4 mb-2">
          <Image source={banner} className="w-60 h-60" />
        </View>
        <View>
          <View className="flex-row justify-between items-center px-4 space-y-3">
            <Text className="text-gray-600 font-bold text-xl items-center">
              Recent Trips
            </Text>
            <TouchableOpacity onPress={() => router.push("/AddTrip")} className="py-2 px-4 bg-white border border-gray-200 font-bold rounded-full text-md ">
              <Text className="text-gray-600 font-bold">Add Trips</Text>
            </TouchableOpacity>
          </View>
          <View className="m-4 " style={{height: 460}}>
            <FlatList
              data={items}
              ListEmptyComponent={<EmptyList message={'You have not recorded any trips yet!'} />}
              numColumns={2}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{justifyContent:"space-between"}}
              className="mx-1"
              renderItem={({ item }) => (
                <TouchableOpacity  onPress={()=>router.push('/TripExpances',{...items})} className="bg-white p-3 rounded-2xl shadow-sm mb-3" >
                  <View className="text-center">
                    <Image
                      source={randomImage()}
                      className="h-36 w-36 mb-2"
                    />
                    <Text className="text-gray-600 font-bold text-center">{item.place}</Text>
                    <Text className="text-gray-400 font-bold text-center text-sm" >{item.country}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  
  );
};

export default HomePage;
