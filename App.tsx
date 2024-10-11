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
function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <AppNavigation />
    </SafeAreaView>
  );
}

export default App;
