import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import ExpanceCard from "./ExpanceCard";
import ExpanceImg from "../assets/images/7.png";
import { Image } from "expo-image";
import EmptyList from "@/components/EmptyList";
import { useRouter } from "expo-router";
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
      title: 'ate sandwitch',
      amount: 4,
      category: 'food'
    },
    {
      id: 2,
      title: 'bought a jacket',
      amount: 50,
      category: 'shopping'
    },
    {
      id: 3,
      title: 'watched a movie',
      amount: 100,
      category: 'entertainment'
    }
]
const TripExpances = (props) => {
  console.log(props)
  const router= useRouter();
 
  return (
    <View className="flex-1 mt-5 bg-gray-50 p-4">
      <View className="relative items-center">
        <View className="absolute top-0 left-0">
          <BackButton />
        </View>
        <View>
        <Text className="text-gray-600 text-2xl font-bold text-center">
          Expances
        </Text>
        
        </View>
      </View>
      <View className="flex-row items-center justify-center rounded-2xl mx-4 mb-2">
        <Image source={ExpanceImg} className="w-60 h-60" />
      </View>
      <View>
          <View className="flex-row justify-between items-center space-y-3">
            <Text className="text-gray-600 font-bold text-xl items-center">
              Expances
            </Text>
            <TouchableOpacity onPress={() => router.push("/AddExpance")} className="py-2 px-4 bg-white border border-gray-200 font-bold rounded-full text-md ">
              <Text className="text-gray-600 font-bold">Add Expances</Text>
            </TouchableOpacity>
          </View>
          <View className="my-4 " style={{height: 480}}>
            <FlatList
              data={items}
              ListEmptyComponent={<EmptyList message={'You have not recorded any Expances yet!'} />}
              
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              
              className="mx-1"
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>router.push('/TripExpances')}  >
                  <View>
                   <ExpanceCard item={item}/>
                    
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
    </View>
  );
};

export default TripExpances;
