import { View, Text } from 'react-native'
import React from 'react'
import { categoryBG } from '@/constants/Colors'

const ExpanceCard = ({item}) => {
  return (
    <View style={{backgroundColor: categoryBG[item.category]}} className="flex-row justify-between items-center p-3 px-5 mb-3 bg-red-200 rounded-2xl">
      <View>
      <Text className="text-gray-600 font-bold">{item.title}</Text>
      <Text className="text-gray-600 text-sm">{item.category}</Text>
      </View>
      <View>
      <Text className="text-gray-600 font-bold">₹{item.amount}</Text>
      </View>
    </View>
  )
}

export default ExpanceCard