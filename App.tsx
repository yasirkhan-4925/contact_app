/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';

import AppNavigation from '@app/navigation/appNavigation';
import {colors} from '@app/assets/colors';
import {PaperProvider} from 'react-native-paper';
function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <AppNavigation />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
