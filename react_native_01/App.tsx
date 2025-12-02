/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/header';

/*
style={{ // 인라인 스타일을 쓰면 경고가 나옴 -> 비추한다함
            backgroundColor: '#ffffff',
            height: '100%',
            padding: 30,
          }}
*/
function App() {
  const [state] = useState({
    appName: 'My First React Native App',
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={appStyles.mainView}>
        <View style={appStyles.subView}>
          <Text style={appStyles.mainText}>Hello World</Text>
        </View>
        {/* <View style={appStyles.subView}>
          <Text>Hello World</Text>
        </View>
        <View style={appStyles.subView2}>
          <Text style={appStyles.mainText}>Hello World</Text>
        </View> */}
        <Header name={state.appName} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const appStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    // flex: 1,
    backgroundColor: '#61faff',
    marginBottom: 10,
  },
  subView2: {
    flex: 2,
    backgroundColor: '#61faff',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d00000',
    padding: 10,
  },
});

export default App;
