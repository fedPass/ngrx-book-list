import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../book-list/book.model';

// describe the book actions

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retry Books': emptyProps(),
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});