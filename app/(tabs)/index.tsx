import { StyleSheet } from 'react-native';
import HomePage from '@/app/HomePage'
import { Text, View } from '@/components/Themed';
import Login from '@/app/Login'
import { useState } from 'react';

export default function TabOneScreen() {
  const [userLoginCheck, setuserLoginCheck] = useState(" ")
  
    if(userLoginCheck === " "){
      return(<View style={styles.container}>
  <Login />
        </View>) 
    }
    else{
      return (<View style={styles.container}>
  <HomePage />
        </View>)
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
