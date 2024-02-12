import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';

const BackButton = () => {
    const router=useRouter();
    const navagation=useNavigation();
  return (
    <TouchableOpacity className=" rounded-xl p-1" onPress={()=>navagation.goBack()}>
      <AntDesign name="left" size={24} color="#50C878" />

    </TouchableOpacity>
  )
}

export default BackButton