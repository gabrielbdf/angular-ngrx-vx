import { createReducer, on } from '@ngrx/store';
import { addBookSummer, addBookWinter, removeBook } from './books.actions';

export const initialStateSummer: ReadonlyArray<{ bookId: string, season: string }> = [];
export const initialStateWinter: ReadonlyArray<{ bookId: string, season: string }> = [];

export const collectionReducerSummer = createReducer(
  initialStateSummer,
  on(removeBook, (state, data) => {
    if (state.every(_s => _s.season == "summer")) {
      return state.filter((_s) => _s.bookId !== data.bookId);
    }
  }),
  on(addBookSummer, (state, data) => {
    if (state.findIndex(_s => _s.bookId == data.bookId) > -1) return state;
    return [...state, data];
  }),
);

export const collectionReducerWinter = createReducer(
  initialStateWinter,
  on(removeBook, (state, data) => {
    if (state.every(_s => _s.season == "winter")) {
      return state.filter((_s) => _s.bookId !== data.bookId);
    }
  }),
  on(addBookWinter, (state, data) => {
    if (state.findIndex(_s => _s.bookId == data.bookId) > -1) return state;
    return [...state, data];
  }),
);
