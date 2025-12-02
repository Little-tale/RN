/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import { useState } from 'react';
import { View, Text } from 'react-native';

type PropsChildProps = {
  changeState: () => void; // 부모에서 내려주는 함수 타입
  text: String;
};

function PropsChild(props: PropsChildProps) {
  return (
    <View>
      <Text onPress={props.changeState}>TTTT</Text>
      <Text>{props.text}</Text>
    </View>
  );
}

export default PropsChild;
