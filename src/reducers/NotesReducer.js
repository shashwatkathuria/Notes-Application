import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, CLOSE_NOTE_MODAL } from '../constants/NoteConstants';

const initialState = {
  id: 1,
  notes: [],
  newNoteModal: false,
  deletedNoteModal: false
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      const note = {
        ...action.payload,
        id: state.id
      };
      return {
        ...state,
        id: state.id + 1,
        notes: [...state.notes, note],
        newNoteModal: true
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: [...state.notes.map((item) => item.id === action.payload.id ? action.payload : item)]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter((item) => item.id !== action.payload)],
        deletedNoteModal: true
      };
    case CLOSE_NOTE_MODAL:
      return {
        ...state,
        newNoteModal: false,
        deletedNoteModal: false
      };
    default:
      return state;
  }
}
