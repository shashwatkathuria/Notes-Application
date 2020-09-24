import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions/NoteAction';
import moment from 'moment';
import { ScrollView, TextInput, Modal, StyleSheet, View } from "react-native";
import { Text, Button, Footer, FooterTab, Icon, CardItem, Body } from 'native-base';
import HorizontalLine from './HorizontalLine';
import styles from '../styles/Styles';

class NoteCard extends React.Component {

  state = {
    heading: this.props.heading,
    text: this.props.text
  }

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

  updateNote() {
    if (this.state.text == this.props.text && this.state.heading == this.props.heading) return;

    const note = {
      id: this.props.id,
      heading: this.state.heading,
      text: this.state.text,
      datetime: (new Date()).toISOString()
    };

    this.props.updateNote(note);
  }

  render() {
      return (
        <Modal animationType="fade" transparent onRequestClose={() => this.props.closeCard()}>
          <View style={{ height: 'auto', flex: 0, margin: 15, marginTop: 110, borderWidth: 4, borderColor: 'black', borderRadius: 5, elevation: 5 }}>
            <ScrollView>
                <CardItem style={[styles.header, styles.cardElementsAlignment]} header>
                    <TextInput multiline onChangeText={(heading) => this.handleHeadingChange(heading)} selectionColor="white" style={[styles.mainIconsAndText, { fontSize: 20 }]}>{ this.props.heading }</TextInput>
                </CardItem>
                <HorizontalLine/>
                <CardItem>
                    <Body>
                        <TextInput multiline onChangeText={(text) => this.handleTextChange(text)}>{ this.props.text }</TextInput>
                    </Body>
                </CardItem>
                <HorizontalLine/>
                <CardItem style={styles.cardElementsAlignment} footer>
                    <Text>Last updated { moment(this.props.datetime).fromNow() }</Text>
                </CardItem>
                <Footer>
                    <FooterTab style={styles.tabButton} >
                        <Button style={styles.tabButton} active vertical onPress={() => this.props.closeCard()}>
                            <Icon type="AntDesign" name="close"/>
                            <Text>Close</Text>
                        </Button>
                        <Button style={styles.tabButton} active vertical onPress={() => this.updateNote()}>
                            <Icon type="AntDesign" name="edit"/>
                            <Text>Update</Text>
                        </Button>
                        <Button style={styles.tabButton} active vertical onPress={() => this.props.share()}>
                            <Icon type="Entypo" name="share"/>
                            <Text>Share</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </ScrollView>
          </View>
        </Modal>
      );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateNote: (note) => dispatch(updateNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteCard);
