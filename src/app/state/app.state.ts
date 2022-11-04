import { Book } from '../book-list/books.model';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<{ bookdId: string, season: string }>;
}
