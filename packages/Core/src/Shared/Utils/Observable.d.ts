declare class Observable implements IObservable {
    private _observableListeners;
    private _internalValue;
    constructor(value: any, listenOnSubProperties?: boolean);
    /**
     * This is for internal use to invoke each listener when the observable changes.
     * Needed to support listening to changes on sub properties
     * @param val the new value for each listener, this is always this._internalValue
     * @param old the old value for each listener
     * @param prop the property that triggered this listener, this is always 'this'
     */
    _invokeListeners(val: any, old: any, prop: any): void;
    /**
     * unsubscribe a handler from this observable
     * @param { TListener } listener the handler to unsubscribe from this observable
     */
    unsubscribe(listener: TListener): Promise<unknown>;
    /**
     * the listener to add to this observable
     * @param { TListener } listener the listener to add to this observable
     * @return { TUnsubscriber } the unsubscriber function, when invoked it will unsubscribe this listener
     */
    listen(listener: TListener): any;
    /**
     * sets the value of this observable with the one provided and invokes all the listener functions
     * @param { any } val the new value for this observable
     */
    set(val: any): void;
    /**
     * returns the current value of this observable
     * @returns { any } the current value of this observable
     */
    get(): any;
}
/**
 * Creates an observable object and assigns it to a property with 'name' on the 'parent'
 * @param parent the parent object for this observable
 * @param name the name for this observables property key (the name on the parent)
 * @param value the value of this observable
 * @returns { any } the parent object provided (for chaining)
 */
declare function createOnParent(parent: any, name?: string, value?: any): any;
export { createOnParent, Observable };
