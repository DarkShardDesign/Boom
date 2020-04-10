/**
 * Helper function extensions to the standard javascript array object
 */
declare global {
    interface Array<T> {
        cut: (element:T) => Array<T>
        last: () => T
    }
}

 /**
  * remove a single element from an array
  * returns the NEW array
  * @param { any } element the element to remove from the array
  * @returns { Array<any> } a new copy of the array with the element removed.
  */
Array.prototype.cut = function(element) {
    const newArray = this.slice();
    newArray.slice(newArray.indexOf(element), 1);
    return newArray
}

/**
 * get the last element in the array
 * @returns { any } the last element in the array else undefined
 */
Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : undefined
}

// force typescript to compile as external module
export {}