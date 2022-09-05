import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import PlanetHeader from '../components/planet-header';

export default function Home() {
  return (
    
<SafeAreaView>
<PlanetHeader></PlanetHeader>
</SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
    container: {
      marginTop:25,
      fontSize:spacing[5],
      color:colors.white,
      marginLeft:10
  
    },
   
  });