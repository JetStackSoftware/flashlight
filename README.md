# Flashlight
Reactivity made simple
## Installation
```
# via npm
npm i --save flashlight-reactivity

# via yarn
yarn add flashlight-reactivity

# via pnpm
pnpm i flashlight-reactivity
```
## Usage
```typescript
import { store } from 'flashlight-reactivity'

// Create a store
const myStore = store(0)

// Get store value
myStore.get()

// Set value
myStore.set(10)

// Subscribe
const unsubscribe = myStore.subscribe(value => {
	// Do something with the value...
})

// Unsubscribe
unsubscribe()
```
## ToDo

 - [x] Reactive store
 - [ ] Async store
 - [ ] Operators :(
 - [ ] Other stuff