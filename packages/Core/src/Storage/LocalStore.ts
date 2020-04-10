import { createOnParent } from "../Shared/Utils/Observable";
import { STRING_DIVIDER } from '../constants';

export class Store {
    private _storePrefix:string = '';

    constructor (config:any = {}) {
        this._storePrefix = config.storeName || '';
    }

    /**
     * adds a new observable property to this store
     * @param { string } name the name for this property
     * @param { any } value the value for this property
     */
    add(name, value:any = 0) {
        createOnParent(this, name, value);
    }

    /**
     * saves this store to localStorage
     */
    saveToLocal() {
        Object.getOwnPropertyNames(this).forEach(name => {
            localStorage.setItem(`${this._storePrefix}${STRING_DIVIDER}${name}`, JSON.stringify(this[name]));
        });
    }

    /**
     * loads the store values from localstorage and creates new observables for them on this Store instance
     */
    loadFromLocal() {
        const allValues = Object.keys(localStorage);
        allValues.forEach(name => {
            if (name.startsWith(this._storePrefix)) {
                this.add(name.substring(name.indexOf(STRING_DIVIDER), name.length), JSON.parse(localStorage.getItem(name)));
            }
        })
    }
}

/**
 * object containing the currently loaded stores
 * 
 * @example
 * const MyStore = new Stores()
 * MyStore.add('freegames', 10);
 * MyStore.freeGames.listen((newVal, oldVal) => console.log('freeGames count changed', newVal, oldVal))
 */
export class Stores {
    /**
     * creates a store with the given name and initialises it with the given values
     * @param {object}  config config object for this store
     * @param {string}  config.storeName the name for this store
     * @param {object?} config.values an object of name:value pairs
     */
    createStore(config) {
        // create a new store
        this[config.storeName] = new Store(config);
        // if we have initial properties
        if (config.values) {
            // for each one
            Object.keys(config.values).forEach(key => {
                // add it to the store (key === name, values[key] === value);
                this[config.storeName].add(key, config.values[key]);
            });
        }
    }

    /**
     * removes the given store from local storage
     * all values will be lost
     * @param {string} name name of the store to remove
     * @returns {Store} the store that has been removed
     */
    removeStore(name) {
        const store = this[name];
        store.destroy();
        delete this[name];

        return store;
    }

    /**
     * 
     * @param config config object for the store to load from local storage
     */
    loadFromLocal(config = { storeName: 'default' }) {
        this[config.storeName] = new Store(config);
        this[config.storeName].loadFromLocal();
    }
};

export default Stores;