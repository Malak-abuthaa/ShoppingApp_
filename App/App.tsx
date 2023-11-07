import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';


import Products from './views/Products';
import ProductDetails from './views/productDetails';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  // const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor:  Colors.lighter,
  };

  return (

        <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      
  
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
