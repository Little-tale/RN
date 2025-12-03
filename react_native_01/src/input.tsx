import { Keyboard, StyleSheet, TextInput } from 'react-native';

type InputProps = {
  textInput: string;
  onChangeTextInput: (text: string) => void;
};

function Input(props: InputProps) {
  return (
    <TextInput // UIKit 관점에서 보면 처음엔 TextField 인데 줄바꿈 적용되게 하면 UITextView가 되는 구조인듯
      value={props.textInput}
      style={styles.input}
      onChangeText={props.onChangeTextInput}
      multiline={true}
      maxLength={100}
      autoCapitalize="none"
      editable={true}
      keyboardType="number-pad"
      onEndEditing={Keyboard.dismiss}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#565656',
    margin: 10,
    padding: 10,
  },
});

export default Input;
