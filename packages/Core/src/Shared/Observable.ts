import { TObservable, TListener, ObservableConstants } from '../types';

/**
 * Simple Observable object
 * either returns the observable or defines it on a parent if provided
 * @param { object? } parent the object to create this observable on
 * @param { string } name the name of this observale property
 * @param { any } value the value of this observable property
 * @returns { TObservable } the observable property created
 */
const Observable = (parent = {}, name, value = undefined): TObservable => {
    const _parent = parent;
    this.b = value;
    this._observableListeners = <Array<TListener>>[];
    if (!this._observableListeners) this._observableListeners = [];

    /**
     * used to unsubscribe a listener from this observable
     * @param { TListener } listener the listener to remove
     */
    this.__proto__.unsubscribe = (listener: TListener) => {
      return new Promise((resolve, reject) => {
        if ( this._observableListeners.indexOf(listener) !== -1) {
          this._observableListeners.splice(this._observableListeners.indexOf(listener), 1);
          resolve(ObservableConstants.ListenerRemoved); // resolve as removed
        }
        resolve(ObservableConstants.ListenerNotFound); // resolve as not removed
      })
    }
    
    /**
     * used to register a new listener to this observable
     * @param { TListener } listener the listener to register
     */
    this.__proto__.listen = (listener: TListener) => {
      this._observableListeners.push(listener);
      return this.__proto__.unsubscribe.bind(this, listener);
    }


    this.__proto__.destroy = () => {
        this._observableListeners.forEach((listener: TListener) => {
          this._unsubscribe(listener);
        });
    }

    Object.defineProperty(_parent, name, {
      set(val) {
        const old = this.b;
        // assign the new value
        this.b = val;
  
        // inform any listeners of the new value
        this._observableListeners.forEach((listener: TListener) => listener(this.b, old, this));
      },
  
      // return the value property
      get()  { return this.b; },
    })

    // if we have an initial value use it
    if (value) this.set(value);

    return this;
  }

  export default Observable;