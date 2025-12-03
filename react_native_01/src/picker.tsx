import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function PickerComponent() {
  const [state, setState] = useState({
    selectedValue: 'korea',
    sliderValue: 50,
  });

  const changedPickerValue = (itemValue: string) => {
    setState(prev => ({ ...prev, selectedValue: itemValue }));
  };

  const changedSliderValue = (value: number) => {
    setState(prev => ({ ...prev, sliderValue: value }));
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.sliderStyle}
        value={state.sliderValue}
        onValueChange={changedSliderValue}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor="red"
        minimumTrackTintColor="blue"
        step={1}
      />
      <Text>{state.sliderValue}</Text>
      <Picker
        style={styles.pickerStyle}
        selectedValue={state.selectedValue}
        onValueChange={changedPickerValue}
      >
        <Picker.Item label="Korea" value={'korea'} />
        <Picker.Item label="Canada" value={'canada'} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fe9898',
  },
  pickerStyle: {
    height: 40,
    width: 200,
  },
  sliderStyle: {
    height: 40,
    width: 250,
  },
});

export default PickerComponent;
