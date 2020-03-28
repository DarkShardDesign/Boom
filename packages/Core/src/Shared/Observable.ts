/**
 * Simple Observable object
 * either returns the observable or defines it on a parent if provided
 * @param {object?} parent the object to create this observable on
 * @param {string} name the name of this observale property
 * @param {any} value the value of this observable property
 * @returns {Observable} the observable property created
 */
const Observable = (parent, name, value = undefined) => {
    const _parent = parent || {};
    Object.defineProperty(_parent, name, {
      set(val) {
        // assign the new value
        this.b = val;
  
        if (!this.observeListeners) this.observeListeners = [];
        // make sure we have the listen func defined
        this.__proto__.listen = func => this.observeListeners.push(func);
        // make sure we have the unsubscribe func defined
        this.__proto__.unsubscribe = func => {
          if ( this.observeListeners.indexOf(func) !== -1) {
              this.observeListeners.splice(this.observeListeners.indexOf(func), 1);
          }
        }
  
        // inform any listeners of the new value
        this.observeListeners.forEach(item => item(this.b));
      },
  
      // return the value property
      get()  { return this.b; }
    })

    // if we have an initial value use it
    if (value) this.set(value);

    return this;
  }

  export default Observable;