/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// MARK: subView Import
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';
import Input from './src/input';

/*
style={{ // 인라인 스타일을 쓰면 경고가 나옴 -> 비추한다함
            backgroundColor: '#ffffff',
            height: '100%',
            padding: 30,
          }}
*/
function App() {
  type State = {
    appName: string;
    randomNumbers: number[];
    textInput: string;
  };

  const [state, setState] = useState<State>({
    appName: 'My First React Native App',
    randomNumbers: [],
    textInput: '',
  });

  const randomNumberSet = () => {
    return Math.floor(Math.random() * 100);
  };

  const tapAddNumber = () => {
    const number = randomNumberSet();
    setState(prev => ({
      ...prev,
      randomNumbers: [...prev.randomNumbers, number],
    }));
  };

  const tapDeleteNumber = (item: number, idx: number) => {
    const newNumbers = state.randomNumbers.filter((num, index) => {
      return idx !== index;
    });
    setState(prev => ({
      ...prev,
      randomNumbers: newNumbers,
    }));
  };

  const onChangeTextInput = (text: string) => {
    setState(prev => ({
      ...prev,
      textInput: text,
    }));
  };

  const resetTextInput = () => {
    setState(prev => ({
      ...prev,
      textInput: '',
    }));
  };

  const addTextNumber = (text: String) => {
    const toNumber = Number(text);
    if (Number.isNaN(toNumber)) return;

    setState(prev => ({
      ...prev,
      randomNumbers: [...prev.randomNumbers, toNumber],
    }));
  };

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
        <Input
          textInput={state.textInput}
          onChangeTextInput={onChangeTextInput}
        />
        <Button
          title="Add Number"
          onPress={() => {
            addTextNumber(state.textInput);
            resetTextInput();
          }}
        />
        <Generator onPress={tapAddNumber} />
        <ScrollView
          style={appStyles.scrollView}
          // onMomentumScrollBegin={}
          // onMomentumScrollEnd={}
          // onScroll={}
          // onContentSizeChange={(width, height)}
          // bounces={false}
        >
          <NumList
            randomNumbers={state.randomNumbers}
            onPressItem={tapDeleteNumber}
          />
        </ScrollView>
        {/* <Text>SSSSS</Text> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const appStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#a8a8a8',
    alignItems: 'center',
    // justifyContent: 'center',
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
  scrollView: {
    width: '100%',
  },
});

export default App;
