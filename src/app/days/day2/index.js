import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 2' }} />
        <View style={{ justifyContent:'center',alignItems:'center' ,backgroundColor: '#1b1a19',height:600}}>
        <Text style={{ fontFamily: 'AmaticBold', fontSize: 100,justifyContent:'center',alignItems:'center' }}>
        khushruz
      </Text>
        </View>
      
    </View>
  );
};

export default DayDetailsScreen;