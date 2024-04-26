import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './components/Welcome'; // Correct import
import MenuItems from './components/MenuItems'; // Correct import
import LoginScreen from './components/LoginScreen';
import FeedbackForm from './components/FeedbackForm';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet,View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
import SubscribeScreen from './components/SubscribeScreen'
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator ();

// export default function App() {
//     return(
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Welcome" component={Welcome} />
//                 <Tab.Screen name="Menu" component={MenuItems} />
//                 <Tab.Screen name="login" component={LoginScreen} />
//                 <Tab.Screen name="Feedback" component={FeedbackForm} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Welcome" component={Welcome} />
            <Drawer.Screen name="Login" component={LoginScreen} />
         <Drawer.Screen name="Menu" component={MenuItems} />
          <Drawer.Screen name="Feedback" component={FeedbackForm} />
          </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});