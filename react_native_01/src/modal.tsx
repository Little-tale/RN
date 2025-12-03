import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

function ModalComponent() {
  const [state, setState] = useState({
    modal: false,
  });

  const handleModal = () => {
    setState(prev => ({
      ...prev,
      modal: !prev.modal,
    }));
  };

  return (
    <View style={styles.viewStyle}>
      <Button title="Open Modal" onPress={handleModal} />
      <Modal visible={state.modal} animationType="slide">
        <View style={styles.modalInViewStyle}>
          <Text>Modal Content</Text>
          <Button title="Close Modal" onPress={handleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
  },
  modalInViewStyle: {
    marginTop: 60,
    backgroundColor: 'red',
  },
});

export default ModalComponent;
