import type { Store, Callback } from "../types"

export const createStore = <T>(initialValue: T): Store<T> => {
    let value: T = initialValue
    const subscriptions: Callback<T>[] = []

    const notify = () => {
        if (subscriptions.length > 0) for (const i of subscriptions) i(value)
    }

    const store = {
        get() {
            return value
        },
        set(newValue: T) {
            value = newValue
            notify()
        },
        subscribe(callback: Callback<T>) {
            const idx = subscriptions.length
            subscriptions.push(callback)
            return () => {
                subscriptions.splice(idx, 1)
            }
        }
    }

    return store
}