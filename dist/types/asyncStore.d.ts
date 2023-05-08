export type AsyncStore<T> = {
    get(): T;
    set(newValue: T): void;
    subscribe(callback: AsyncCallback<T>): () => void;
    complete(): void;
};
export type AsyncCallback<T> = (values: T[]) => void;
