import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import About from './screens/About';
import Home from './screens/Home';
import Network from './screens/Network';
import { isMobileDevice } from './utils/Utils';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

let Location = null;

if (isMobileDevice()) {
  import('./screens/Location').then((module) => {
    Location = module.default;
  });
}

export default function App() {

  const Tab = createBottomTabNavigator();
  const icons = {
    Home: {
      focused: <FontAwesome5 name="home" size={24} color="#007aff" />,
      unfocused: <FontAwesome5 name="home" size={24} color="#8e8e93" />,
    },
    Network: {
      focused: <FontAwesome5 name="network-wired" size={24} color="#007aff" />,
      unfocused: <FontAwesome5 name="network-wired" size={24} color="#8e8e93" />,
    },
    Location: {
      focused: <FontAwesome5 name="map-pin" size={24} color="#007aff" />,
      unfocused: <FontAwesome5 name="map-pin" size={24} color="#8e8e93" />,
    },
    About: {
      focused: <FontAwesome5 name="info" size={24} color="#007aff" />,
      unfocused: <FontAwesome5 name="info" size={24} color="#8e8e93" />,
    },
  };

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const icon = icons[route.name][focused ? 'focused' : 'unfocused'];
          return icon;
        },
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Network" component={Network} />
        {isMobileDevice() ? <Tab.Screen name="Location" component={Location} /> : null}
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
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
