import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';


export default function App() {
 
  const [fontsLoaded] = useFonts({
    'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'QwitcherGrypen-Regular': require('./assets/fonts/QwitcherGrypen-Regular.ttf'),
    
  });

  
    return (
      <View style={styles.container}>
        <Text style={{fontFamily:'Roboto-Black'}}>Welcome to my App</Text>
        <Text style={styles.second}>Welcome to my App</Text>
      
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
  backgroundColor:'black',

  },
  second: {
   fontWeight:'bold',
   fontSize:spacing[5],
 
  },
  first: {
   fontWeight:'bold',
   fontSize:spacing[7],
 
  },
});
