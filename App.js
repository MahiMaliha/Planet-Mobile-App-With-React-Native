import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';



export default function App() {
 


  
    return (
      <View style={styles.container}>
        <Text style={{fontSize:spacing[6]}}>Welcome to my App</Text>
      
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
  
  },
});
