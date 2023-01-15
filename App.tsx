/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {LocalNotification} from './src/services/localPushController';
import RemotePushController from './src/services/remotePushController';

const App = () => {
  const handleButtonPress = () => {
    LocalNotification();
  };

  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{marginTop: 20}}>
        <Button title={'Local Push Notification'} onPress={handleButtonPress} />
      </View>
      <RemotePushController />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
