import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './books.actions';
import { Book } from '../book-list/book.model';

export const initialState: ReadonlyArray<Book> = [];

/* 
  define a reducer function 
  to handle the retrieval of the book list from the state 
  and consequently, update the state 
*/

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);