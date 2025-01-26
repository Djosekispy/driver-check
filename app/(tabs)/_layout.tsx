import React from 'react';
import {  Slot} from 'expo-router';
import { StatusBar } from 'react-native';



export default function TabLayout() {

  return (
  <>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} networkActivityIndicatorVisible translucent />
      <Slot/>
  </>
  );
  
}
