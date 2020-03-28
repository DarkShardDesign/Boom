import ObservableMixin from "../Shared/Mixins/ObservableMixin";

export class Store {
    /**
     * adds a new observable property to this store
     * @param { string } name the name for this property
     * @param { any } value the value for this property
     */
    add(name, value) {
        ObservableMixin(this, name, value);
    }

    /**
     * saves this store to localStorage
     */
    saveToLocal() {}
}

/**
 * object containing the currently loaded stores
 * 
 * @example
 * const MyStore = new Stores()
 * MyStore.createStore({ freeGames: 10 });
 * MyStore.freeGames.listen((newVal, oldVal) => console.log('freeGames count changed', newVal, oldVal))
 */
export class Stores {
    /**
     * creates a store with the given name and initialises it with the given values
     * @param {object}  config config object for this store
     * @param {string}  config.name the name for this store
     * @param {object?} config.values an object of name:value pairs
     */
    createStore(config) {
        // create a new store
        this[config.name] = new Store();
        // if we have initial properties
        if (config.values) {
            // for each one
            Object.keys(config.values).forEach(key => {
                // add it to the store (key === name, values[key] === value);
                this[config.name].add(key, config.values[key]);
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
};

export default Stores;