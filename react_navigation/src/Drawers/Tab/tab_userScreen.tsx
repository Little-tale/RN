import { StyleSheet, Text, View } from 'react-native';

function TabUserScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text>User Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabUserScreen;
