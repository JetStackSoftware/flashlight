import { createAsyncStore } from '../dist';
import { describe, it, expect } from 'vitest'

describe('AsyncStore', () => {
    const store = createAsyncStore(0)

    store.set(0)

    it('Get and set work properly', () => {
        expect(store.get()).toBe(0)
        store.set(10)
        expect(store.get()).toBe(10)
    })

    it('Subscribe and complete works properly', () => {
        const unsub = store.subscribe(value => {
            expect(value).toStrictEqual([0, 10])
        })

        store.complete()
        unsub()
    })

    it('Multiple subscriptions work properly', () => {
        const secondStore = createAsyncStore(0)

        secondStore.set(0)
        secondStore.set(10)

        const unsub = secondStore.subscribe(value => {
            expect(value).toStrictEqual([0, 10])
        })

        const unsub2 = secondStore.subscribe(value => {
            expect(value).toStrictEqual([0, 10])
        })

        secondStore.subscribe(() => {})()

        secondStore.complete()

        unsub2()
        unsub()
    })
})