import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';

export default function PlanetHeader() {
  return (
    <View>
      <Text style={styles.container}>The Planets</Text>
    </View>
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