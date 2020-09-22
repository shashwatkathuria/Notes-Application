import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, CLOSE_NOTE_MODAL } from '../constants/NoteConstants';

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note
})

export const deleteNote = (note) => ({
  type: DELETE_NOTE,
  payload: note.id
})

export const closeNoteModal = () => ({
  type: CLOSE_NOTE_MODAL,
})

export const updateNote = (note) => ({
  type: UPDATE_NOTE,
  payload: note
})
