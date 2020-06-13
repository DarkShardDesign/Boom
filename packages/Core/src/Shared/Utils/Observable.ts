class Observable implements IObservable {
    private _observableListeners: Array<TListener> = [];
    private _internalValue: any;

    constructor (value, listenOnSubProperties:boolean = false) {
        this._internalValue = value;

        if (listenOnSubProperties) {
            // if value is a complex object
            Object.keys(value).forEach(key => {
                // then for each property make a new observable for it
                this._internalValue[key] = new Observable(value[key])
                // assign an internal listener function to listen for changes
                this._internalValue[key].listen(this._invokeListeners);
            });
        }
    }

    /**
     * This is for internal use to invoke each listener when the observable changes.
     * Needed to support listening to changes on sub properties
     * @param val the new value for each listener, this is always this._internalValue
     * @param old the old value for each listener
     * @param prop the property that triggered this listener, this is always 'this'
     */
    _invokeListeners (val, old, prop) {
        this._observableListeners.forEach((listener: TListener) => listener(this._internalValue, old, <IObservable>this));
    }

    /**
     * unsubscribe a handler from this observable
     * @param { TListener } listener the handler to unsubscribe from this observable
     */
    unsubscribe (listener:TListener) {
        return new Promise((resolve, reject) => {
            if ( this._observableListeners.indexOf(listener) !== -1) {
                this._observableListeners.splice(this._observableListeners.indexOf(listener), 1);
            resolve(ObservableConstants.ListenerRemoved); // resolve as removed
            }
            resolve(ObservableConstants.ListenerNotFound); // resolve as not removed
        })
    }

    /**
     * the listener to add to this observable
     * @param { TListener } listener the listener to add to this observable
     * @return { TUnsubscriber } the unsubscriber function, when invoked it will unsubscribe this listener
     */
    listen (listener:TListener) {
        this._observableListeners.push(listener);
        return this.unsubscribe.bind(this, listener);
    }

    /**
     * sets the value of this observable with the one provided and invokes all the listener functions
     * @param { any } val the new value for this observable
     */
    set (val) {
        const old = this._internalValue;
        // assign the new value
        this._internalValue = val;

        // inform any listeners of the new value
        this._invokeListeners(this._internalValue, old, <IObservable>this);
    }

    /**
     * returns the current value of this observable
     * @returns { any } the current value of this observable
     */
    get() {
        return this._internalValue;
    }
}

/**
 * Creates an observable object and assigns it to a property with 'name' on the 'parent'
 * @param parent the parent object for this observable
 * @param name the name for this observables property key (the name on the parent)
 * @param value the value of this observable
 * @returns { any } the parent object provided (for chaining)
 */
function createOnParent (parent, name?: string, value?:any) {
    Object.defineProperty(parent, name, {
        value: new Observable(value)
    });

    if (value) parent[name].set(value);

    return parent;
}

export {
    createOnParent,
    Observable
}