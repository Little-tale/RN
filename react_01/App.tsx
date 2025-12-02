/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// SubViews
import PropsChild from './propsChild';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background}>
        <AppContent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function AppContent() {
  // 예전 방식
  // state = {

  // }
  const [state, setState] = useState({
    sampleText: 'Hello world',
    sampleBoolean: true,
    sampleNumber: 2,
  });

  const inputText = () =>
    state.sampleBoolean ? (
      <Text>sampleBoolean is True</Text>
    ) : (
      <Text>sampleBoolean is False</Text>
    );

  const changeSampleBoolean = () => {
    if (state.sampleBoolean) {
      setState(prev => ({
        ...prev,
        sampleText: 'TextChanged',
        sampleBoolean: !prev.sampleBoolean,
      }));
    } else {
      setState(prev => ({
        ...prev, // 이전값들은 유지
        sampleBoolean: !prev.sampleBoolean,
      }));
    }
  };

  const powerNumber = () => {
    setState(prev => {
      let copyNumber = prev.sampleNumber;
      copyNumber = copyNumber * 2;
      return {
        ...prev,
        sampleNumber: copyNumber,
      };
    });
  };

  return (
    <View>
      <Text style={styles.text} onPress={powerNumber}>
        {state.sampleNumber}
      </Text>
      <Text style={styles.text} onPress={changeSampleBoolean}>
        {state.sampleText}
      </Text>
      {inputText()}
      <PropsChild changeState={changeSampleBoolean} text="Test Text" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // 화면 전체 차지
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
  },
});

export default App;
