import { Text, StyleSheet, TouchableOpacity } from 'react-native';

type NumListProps = {
  randomNumbers: number[];
  onPressItem: (item: number, idx: number) => void;
};

function NumList(props: NumListProps) {
  return props.randomNumbers.map((item, idx) => (
    <TouchableOpacity
      style={styles.numList}
      key={idx}
      onPress={() => props.onPressItem(item, idx)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
