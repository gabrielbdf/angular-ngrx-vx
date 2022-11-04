import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const selectBooks =
  createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionStateSummer =
  createFeatureSelector<ReadonlyArray<{ bookId: string, season: string }>>('collectionSummer');

export const selectCollectionStateWinter =
  createFeatureSelector<ReadonlyArray<{ bookId: string, season: string }>>('collectionWinter');

export const selectBookCollectionSummer = createSelector(
  selectBooks,
  selectCollectionStateSummer,
  (books, collectionSummer) => {
    return collectionSummer.map((_f) => {
      return books.find((book) => book.id === _f.bookId);
    });
  }
);

export const selectBookCollectionWinter = createSelector(
  selectBooks,
  selectCollectionStateWinter,
  (books, collectionWinter) => {
    return collectionWinter.map((_f) => {
      return books.find((book) => book.id === _f.bookId);
    });
  }
);


