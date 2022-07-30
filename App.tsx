import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GlobalNav from './src/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider, QueryClient, useQueryClient } from "@tanstack/react-query"

const App = () => {
  const queryClient = new QueryClient()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <GlobalNav />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
