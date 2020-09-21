import { combineReducers } from 'redux';
import notesReducer from './NotesReducer';

const AppReducers = combineReducers({
  notesReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
}

export default rootReducer;
