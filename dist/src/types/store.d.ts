export type Store<T> = {
    get(): T;
    set(newValue: T): void;
    subscribe(callback: Callback<T>): () => void;
};
export type Callback<T> = (value: T) => void;
