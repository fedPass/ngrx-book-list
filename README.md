
## NgRx - Store
Store is a RxJS powered global state management, inspired by Redux.

  - Install NgRx Store
```bash
  ng add @ngrx/store@latest
```

  - Create model: src/app/book-list/books.model.ts

  - Create actions: src/app/state/books.actions.ts
  - Create reducers: 
  
      src/app/state/books.reducer.ts

      src/app/state/books.reducer.ts

  - Import StoreModule e reducers into AppModule
  - Create selectors: src/app/state/books.selectors.ts
  - Create service: src/app/book-list/books.service.ts
  - Create components and dispatch actions