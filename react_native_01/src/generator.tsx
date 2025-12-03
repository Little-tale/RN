/*
 * @format
 */
import { View, Text, StyleSheet, Button } from 'react-native';

type GeneratorProps = {
  onPress: () => void;
};

function Generator(props: GeneratorProps) {
  return (
    <View style={styles.generator}>
      <Text>Generator Component</Text>
      <Button title="RandomNumber" onPress={props.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#d05353',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },

  numberText: {
    color: '#0f00e0',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Generator;
