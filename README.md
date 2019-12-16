
# cypress-redux
Unofficial Cypress utilities for testing Redux stores.

```
npm i -D cypress-redux
```

## Configuration

### 1. Expose the Redux store for your application

Assign your redux store to `window.store` so Cypress can access it. We've included a utility that does this automatically when the Cypress runner is detected.

```js
// in your entrypoint file
import registerStore from 'cypress-redux/registerStore'
const store = createStore()
registerStore(store)
```

### 2. Import Cypress commands

Import this library in one of your support files, and you'll be good to go!

```js
// cypress/support/index.(ts|js)
import 'cypress-redux'
```
