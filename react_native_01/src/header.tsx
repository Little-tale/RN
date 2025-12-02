import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

type HeaderProps = {
  name: string;
};

function Header(props: HeaderProps) {
  return (
    <TouchableOpacity
      style={styles.header}
      onPress={() => Alert.alert('Hello world')}
    >
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffcacaf',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
