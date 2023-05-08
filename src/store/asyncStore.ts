import { AsyncStore, AsyncCallback } from "../types"

export const createAsyncStore = <T>(initialValue: T): AsyncStore<T> => {
    let value: T = initialValue
    const subscribers: AsyncCallback<T>[] = []
    const notifications: T[] = []

    const notify = () => {
        notifications.push(value)
    }

    const store = {
        get() {
            return value
        },
        set(newValue: T) {
            value = newValue
            notify()
        },
        subscribe(callback: AsyncCallback<T>) {
            const idx = subscribers.length
            subscribers.push(callback)
            return () => {
                subscribers.splice(idx, 1)
            }
        },
        complete() {
            if (subscribers.length > 0) for(const i of subscribers) i(notifications)
            notifications.length = 0
            subscribers.length = 0
        }
    }

    return store
}