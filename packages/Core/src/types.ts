// Abstract types
/**
 * Dynamic object
 * any properties any structure
 */
export type TDynamicType =  {
    [key:string]: any
}

/**
 * A primitive number type to represent a resource in context
 */
export type TResourceHandle = number;

/**
 * Dynamic config object used to pass configuration objects to modules
 */
export type TConfig = TDynamicType;

// Event types
/**
 * Dynamic data object, used to pass data into event handlers
 */
export type TEventData = TDynamicType;

/**
 * event handler function signature
 */
export type TEventHandler = (data: TEventData) => Promise<any>;

// Network types
/**
 * Dynamic type used to represent network data packets
 */
export type TDataPacket = TDynamicType;

/**
 * Dynamic type used to represent server response packets
 */
export type TResponse = TDynamicType;

/**
 * Type for a function returned from a subscriber function
 * This will unsubscribe from the event being listened to when invoked
 */
export type TUnsubscriber = () => Promise<any>;

/**
 * Type for the internal Observable objects
 */
export type IObservable = TDynamicType & {
    _internalValue: any;
    listen: (newVal?: any, oldVal?: any, observable?: IObservable) => TUnsubscriber;
    unsubscribe: (listener: TListener) => any;
}

/**
 * Type for the function used as a listener
 */
export type TListener = (newValue: any, oldValue: any, observable: IObservable) => undefined;

export const enum ObservableConstants {
    ListenerRemoved = 0,
    ListenerNotFound = 1
}

export interface ILogger {
    log: (message:string) => void;
}

export type TBOOM = {
    name: string,
    logger: ILogger,

    init: (config?:any) => void
}

declare global {
    interface Window { BOOM: TBOOM }
}