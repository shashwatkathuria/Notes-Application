import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Header, Right, Left, Body, Title, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './src/reducers/RootReducer';
import NotesScreen from './src/screens/NotesScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';
import HorizontalLine from './src/components/HorizontalLine';
import styles from './src/styles/Styles';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}>
            <Container>
                <Header androidStatusBarColor={styles.header.backgroundColor} style={styles.header} hasTabs>
                    <Left>
                        <Icon style={{...styles.mainIconsAndText, fontSize: 50}} type="MaterialIcons" name="library-books" />
                    </Left>
                    <Body>
                        <Title style={styles.mainIconsAndText}>Notes App</Title>
                    </Body>
                    <Right/>
                </Header>
                <HorizontalLine/>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: "white" }}>
                    <Tab heading={<TabHeading style={styles.header}>
                        <Icon style={styles.mainIconsAndText} type="Foundation" name="list"/>
                        <Text style={styles.mainIconsAndText}>Your Notes</Text></TabHeading>}>
                        <NotesScreen />
                    </Tab>
                    <Tab heading={ <TabHeading style={styles.header}>
                        <Icon style={styles.mainIconsAndText} type="MaterialIcons" name="add-box"/>
                        <Text style={styles.mainIconsAndText}>Add Note</Text></TabHeading>}>
                        <AddNoteScreen />
                    </Tab>
                </Tabs>
            </Container>
        </PersistGate>
      </Provider>
    );
  }
};
