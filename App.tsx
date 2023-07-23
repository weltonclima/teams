import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes/index.routes';
import theme from './src/styles/theme';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { TeamProvider } from './src/hooks/useTeam';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <TeamProvider>
          <Routes />
        </TeamProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}