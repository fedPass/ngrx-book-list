import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from '../book-list/books.service';
import { BooksApiActions } from './books.actions';

@Injectable()
export class BooksEffects {

  /* 
    note: tried to use documentation formula (declare observable before constructor)
    but received this.actions$ undefined error 
  */
  loadBooks$;

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService
  ) {
    this.loadBooks$ = createEffect(() => this.actions$.pipe(
      ofType('[Books API] Retry Books'),
      exhaustMap(() => this.booksService.getBooks()
        .pipe(
          map(books => (BooksApiActions.retrievedBookList({books}))),
          catchError(() => EMPTY)
        ))
      )
    );
  }



}