import { describe, it, expect } from 'vitest'
import { type Store, createStore } from '../src'

describe('Store', () => {
    const store: Store<number> = createStore<number>(0)

    it('Get and set work properly', () => {
        expect(store.get()).toBe(0)
        store.set(10)
        expect(store.get()).toBe(10)
    })

    it('Subscribe works properly', () => {
        const unsub = store.subscribe(val => {
            expect(val).toBe(5)
        })
        store.set(5)
        unsub()
    })
})