import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/NoteAction';
import { View, TextInput} from 'react-native';
import { Text, Button, Title, Header } from 'native-base';
import HorizontalLine from './HorizontalLine';
import styles from '../styles/Styles';

class AddNoteForm extends React.Component {

  state = {
    heading: '',
    text: ''
  };

  handleHeadingChange(heading) {
    this.setState({
      heading
    });
  }

  handleTextChange(text) {
    this.setState({
      text
    });
  }

  submitForm() {
    if (this.state.text === '' && this.state.heading === '') return;

    const note = {
      text: this.state.text,
      heading: this.state.heading,
      datetime: new Date().toISOString()
    };
    this.props.addNote(note);
    this.setState({
      heading: '',
      text: ''
    });
  }

  render() {
    return(
      <View style={{ borderColor: 'black', borderWidth: 5, margin: 5, justifyContent: 'center', borderRadius: 5, elevation: 5 }}>
        <View style={{ ...styles.mainIconsAndText, ...styles.header, alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
          <Title>Enter New Note Contents</Title>
        </View>
        <HorizontalLine/>
        <TextInput style={{ textAlign: 'center' }} onChangeText={(heading) => this.handleHeadingChange(heading)} value={this.state.heading} placeholder="Enter Heading" />
        <HorizontalLine/>
        <TextInput onChangeText={(text) => this.handleTextChange(text)} value={this.state.text} placeholder="Enter Body" multiline numberOfLines={20} textAlignVertical='top'/>
        <Button style={{ ...styles.normalButton, width: '100%', justifyContent: 'center'}} onPress={() => this.submitForm()}>
          <Text>Add Note</Text>
        </Button>
        <View style={{ alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
          <Text note>Heading or body must be non empty</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);
