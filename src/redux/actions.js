import { GET_WORDS, ADD_WORDS, DELETE_WORDS, UPDATE_WORDS } from "./reducer";

export const getAllWords = (payload) => ({type: GET_WORDS, payload});
export const addNewWords = (payload) => ({type: ADD_WORDS, payload});
export const deleteWords = (payload) => ({type: DELETE_WORDS, payload});
export const updateWords = (payload) => ({type: UPDATE_WORDS, payload});