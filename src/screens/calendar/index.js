import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';
import Translations from '../../constants/translations';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calendar!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
