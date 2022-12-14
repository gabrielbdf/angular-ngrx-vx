import { createReducer, on } from '@ngrx/store';
import { Book } from '../book-list/books.model';

import { retrievedBookList } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => {
    return books;
  })
);
