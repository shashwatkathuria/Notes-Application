import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/NoteAction';
import { FlatList, View } from 'react-native';
import { Text } from 'native-base';
import NoteItem from './NoteItem';
import NoteModal from './NoteModal';
import styles from '../styles/Styles';

class NoteList extends React.Component {

  render() {
    if (this.props.notes.length === 0) {
        return (
          <View style={styles.centeredView}>
            <NoteModal/>
            <Text style={{ textAlign:"center", fontWeight:'bold', fontSize: 30, color: 'green' }}>No notes added!</Text>
          </View>
        );
    }
    return (
      <View>
        <NoteModal/>
        <FlatList keyExtractor={item => item.id.toString()} renderItem={({item}) => <NoteItem {...item} />} data={this.props.notes}></FlatList>
      </View>
    );
  }

};

const mapStateToProps = (state) => ({
  notes: state.notesReducer.notes
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
