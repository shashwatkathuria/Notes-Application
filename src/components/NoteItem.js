import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/NoteAction';
import moment from 'moment';
import { Share } from 'react-native';
import { Header, Content, Card, CardItem, Text, Left, Body, Right, Button } from 'native-base';
import HorizontalLine from './HorizontalLine';
import NoteCard from './NoteCard';
import styles from '../styles/Styles';

class NoteItem extends React.Component {

  state = {
    isCardVisible: false
  }

  share = async () => {
    try {
      const result = await Share.share({
        message: `${this.props.text}\n${this.props.heading}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  toggleCard = () => {
    this.setState({
      isCardVisible: !this.state.isCardVisible
    });
  }

  deleteNote() {
    this.props.deleteNote(this.props);
  }

  render() {
    return (
        <Content style={{ margin: 5 }}>
            <Card>
                <CardItem header bordered style={styles.header}>
                  <Left>
                    <Text style={styles.mainIconsAndText}>{ this.props.heading }</Text>
                  </Left>
                  <Right>
                    <Text style={styles.mainIconsAndText}>{ moment(this.props.datetime).fromNow() }</Text>
                  </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text numberOfLines={2}>{ this.props.text }</Text>
                    </Body>
                </CardItem>
                <HorizontalLine/>
                <CardItem footer>
                    <Left>
                        <Button style={styles.normalButton} active vertical onPress={ () => this.toggleCard() }>
                            <Text>View</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button style={styles.normalButton} active vertical onPress={ () => this.deleteNote() }>
                            <Text>Delete</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
            { this.state.isCardVisible && <NoteCard share={this.share} closeCard={this.toggleCard} {...this.props} /> }
        </Content>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteNote: (note) => dispatch(deleteNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
