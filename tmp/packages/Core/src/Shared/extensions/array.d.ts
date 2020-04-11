/**
 * Helper function extensions to the standard javascript array object
 */
declare global {
    interface Array<T> {
        cut: (element: T) => Array<T>;
        last: () => T;
    }
}
export {};
