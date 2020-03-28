
import { ObservableConstants, TListener } from "../../types";

export default function (parent, name?: string, value?:any) {
    Object.defineProperty(parent, name, {
        value: Object.create({
            unsubscribe: (listener: TListener) => {
                return new Promise((resolve, reject) => {
                    if ( parent[name]._observableListeners.indexOf(listener) !== -1) {
                        parent[name]._observableListeners.splice(parent[name]._observableListeners.indexOf(listener), 1);
                    resolve(ObservableConstants.ListenerRemoved); // resolve as removed
                    }
                    resolve(ObservableConstants.ListenerNotFound); // resolve as not removed
                })
            },
            listen: (listener: TListener) => {
                parent[name]._observableListeners.push(listener);
                return parent[name].unsubscribe.bind(parent[name], listener);
            },
            set: function(val) {
                const old = parent[name]._internalValue;
                // assign the new value
                parent[name]._internalValue = val;

                // inform any listeners of the new value
                parent[name]._observableListeners.forEach((listener: TListener) => listener(parent[name]._internalValue, old, parent[name]));
            },
            get: function() { 
                return parent[name]._internalValue;
            }
        }, {
            _internalValue: {
                writable: true,
                value: 0
            },
            _observableListeners: {
                writable: true,
                value: <Array<TListener>>[]
            },
        })
    });

    if (value) parent[name].set(value);
}