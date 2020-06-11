export declare class Store {
    private _storePrefix;
    constructor(config?: any);
    /**
     * adds a new observable property to this store
     * @param { string } name the name for this property
     * @param { any } value the value for this property
     */
    add(name: any, value?: any): void;
    /**
     * saves this store to localStorage
     */
    saveToLocal(): void;
    /**
     * loads the store values from localstorage and creates new observables for them on this Store instance
     */
    loadFromLocal(): void;
}
/**
 * object containing the currently loaded stores
 *
 * @example
 * const MyStore = new Stores()
 * MyStore.add('freegames', 10);
 * MyStore.freeGames.listen((newVal, oldVal) => console.log('freeGames count changed', newVal, oldVal))
 */
export declare class Stores {
    /**
     * creates a store with the given name and initialises it with the given values
     * @param {object}  config config object for this store
     * @param {string}  config.storeName the name for this store
     * @param {object?} config.values an object of name:value pairs
     */
    createStore(config: any): void;
    /**
     * removes the given store from local storage
     * all values will be lost
     * @param {string} name name of the store to remove
     * @returns {Store} the store that has been removed
     */
    removeStore(name: any): any;
    /**
     *
     * @param config config object for the store to load from local storage
     */
    loadFromLocal(config?: {
        storeName: string;
    }): void;
}
export default Stores;
