// Abstract types
/**
 * Dynamic object
 * any properties any structure
 */
type TDynamicType =  {
    [key:string]: any
}

/**
 * A primitive number type to represent a resource in context
 */
type TResourceHandle = number;

/**
 * Dynamic config object used to pass configuration objects to modules
 */
type TConfig = TDynamicType;

// Event types
/**
 * Dynamic data object, used to pass data into event handlers
 */
type TEventData = TDynamicType;

/**
 * event handler function signature
 */
type TEventHandler = (data: TEventData) => Promise<any>;

// Network types
/**
 * Dynamic type used to represent network data packets
 */
type TDataPacket = TDynamicType;

/**
 * Dynamic type used to represent server response packets
 */
type TResponse = TDynamicType;

/**
 * Type for a function returned from a subscriber function
 * This will unsubscribe from the event being listened to when invoked
 */
type TUnsubscriber = () => Promise<any>;

/**
 * Type for the internal Observable objects
 */
interface IObservable {
    listen: (listener:TListener) => TUnsubscriber;
    unsubscribe: (listener: TListener) => Promise<any>;
}

/**
 * Type for the function used as a listener
 */
type TListener = (newValue: any, oldValue: any, observable: IObservable) => undefined;

declare const enum ObservableConstants {
    ListenerRemoved = 0,
    ListenerNotFound = 1
}

interface ILogger {
    log: (message:string) => void;
}

type TBOOM = TDynamicType & {
    addModule: (name, url) => Promise<any>,
    name: string,
    logger: ILogger,

    init: (config?:any) => void,
    modules: TDynamicType,

    getModule: (name: string) => any
}
