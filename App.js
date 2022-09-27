import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ContactScreen from './components/Contacts';
import DetailsScreen from './components/Details';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator initialRouteName="Contacts">
        <Drawer.Screen name="Contacts" component={ContactScreen} />
          <View >
            <Text>MOST AMAZING CONTACT LIST</Text>
            <StatusBar style="auto" />
          </View>
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// rm -rf node_modules/ npm install


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
