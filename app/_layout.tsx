import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import {store} from '../redux/Store'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  

  onAuthStateChanged(auth, u=>{
    
    
  })

  return (
   
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
       
       <Stack.Screen name="Login" options={{headerShown: false}}/>
       <Stack.Screen name="SignIn" options={{presentation: 'modal', headerShown: false}}/>
       <Stack.Screen name="SignUp" options={{presentation: 'modal', headerShown: false}}/>
       <Stack.Screen name="HomePage" options={ {headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen
        name="AddTrip"
        options={{
          
          headerShown:false,
          
        }}></Stack.Screen>
        <Stack.Screen
        name="TripExpances"
        options={{
          
          headerShown:false,
          
        }}></Stack.Screen>
        <Stack.Screen
        name="AddExpance"
        options={{
          
          headerShown:false,
          
        }}></Stack.Screen>
      </Stack>
    </ThemeProvider>
    
    
  );
}
