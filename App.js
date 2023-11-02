import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView, TouchableOpacity , SectionList,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
const Stack = createNativeStackNavigator();
export default function App() {
    return ( 
      <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Screen_01"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="Screen_01" component={Screen2} options={{headerShown:false}}/>
      <Stack.Screen name="Screen_02" component={Screen1} />
      <Stack.Screen name="Screen_03" component={Screen3} />
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
  },
});
