
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

## NgRx - Effects
Effects are an RxJS powered side effect (external interactions such as network requests, web socket messages and time-based events) model for Store.

  - Install NgRx Effects
```bash
  ng add @ngrx/effects@latest
```

  - replace direct call from component to service with action dispatch: src/app/app.component.ts

  - create effects file: src/app/state/books.effects.ts

  - register EffectsModule.forRoot([]) between AppModule imports: src/app/app.module.ts