import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const EmptyList = ({message}) => {
  return (
    <View className="flex-1 justify-center items-center my-4 space-y-3">
        <Image className="w-36 h-36 shadow-sm " source={require('./imeages/empty.png')}/>
      <Text className="font-bold text-gray-400">{message|| 'data not found'}</Text>
    </View>
  )
}

export default EmptyList