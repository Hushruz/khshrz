import React from "react";
import { StyleSheet, View  } from "react-native";
import { Stack } from "expo-router";

import { useEffect } from 'react';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
      });
    
      useEffect(() => {
        if (fontsLoaded || fontError) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return (
        <Stack screenOptions={{  
            headerStyle: {
            height: 40, 
            backgroundColor: '#1b1a19',
           shadowColor: '#bebbb8',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 13,
        },
        headerTintColor: '#bebbb8',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}>
            <Stack.Screen name="index" options={{ title: 'khshrz' }} />1
        </Stack>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333', // Цвет фона
        alignItems: 'center',    // Выравнивание по центру
        justifyContent: 'center' // Выравнивание по центру
    },
});
