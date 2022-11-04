import { createAction, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const addBookSummer = createAction(
  '[Book List] Add Book Summer',
  props<{ bookId: string, season: string }>()
);

export const addBookWinter = createAction(
  '[Book List] Add Book Winter',
  props<{ bookId: string, season: string }>()
);

export const removeBook = createAction(
  '[Book List] Remove Book',
  props<{ bookId: string }>()
);



export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);
