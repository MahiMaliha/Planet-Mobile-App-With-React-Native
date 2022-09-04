import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my App</Text>
      <Text style={{marginTop:spacing[4]}}>My First React Native project</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.darkOrange,
  },
});
