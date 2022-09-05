import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { NavigationContainer ,DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/screens/home';
import Home from './src/screens/home';


const Stack = createNativeStackNavigator();

export default function App() {
 
 

  
    return (
      <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
  hello:{
fontWeight:'bold',
fontSize:spacing[7]
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
