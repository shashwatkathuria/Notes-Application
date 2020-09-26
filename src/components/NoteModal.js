import React from 'react';
import { connect } from 'react-redux';
import { closeNoteModal } from '../actions/NoteAction';
import { View, Modal} from 'react-native';
import { Button, Text } from 'native-base';
import styles from '../styles/Styles';

class NoteModal extends React.Component {

  render() {
    let text = 'Note saved!';
    if (this.props.isDeletedNoteModalVisible === true) {
      text = 'Note deleted!';
    }

    return (
      <Modal animationType="fade" transparent={true} visible={this.props.isNewNoteModalVisible || this.props.isDeletedNoteModalVisible} onRequestClose={() => this.props.closeNoteModal()}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <Text style={styles.modalText}>{ text }</Text>
                  <Button style={[styles.normalButton, { alignSelf: 'center' }]} onPress={() => this.props.closeNoteModal()}>
                      <Text>Okay</Text>
                  </Button>
              </View>
          </View>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  isNewNoteModalVisible: state.notesReducer.newNoteModal,
  isDeletedNoteModalVisible: state.notesReducer.deletedNoteModal,
});

const mapDispatchToProps = (dispatch) => ({
  closeNoteModal: () => dispatch(closeNoteModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteModal);
