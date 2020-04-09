/**
 * Dynamic object
 * any properties any structure
 */
export declare type TDynamicType = {
    [key: string]: any;
};
/**
 * A primitive number type to represent a resource in context
 */
export declare type TResourceHandle = number;
/**
 * Dynamic config object used to pass configuration objects to modules
 */
export declare type TConfig = TDynamicType;
/**
 * Dynamic data object, used to pass data into event handlers
 */
export declare type TEventData = TDynamicType;
/**
 * event handler function signature
 */
export declare type TEventHandler = (data: TEventData) => Promise<any>;
/**
 * Dynamic type used to represent network data packets
 */
export declare type TDataPacket = TDynamicType;
/**
 * Dynamic type used to represent server response packets
 */
export declare type TResponse = TDynamicType;
/**
 * Type for a function returned from a subscriber function
 * This will unsubscribe from the event being listened to when invoked
 */
export declare type TUnsubscriber = () => Promise<any>;
/**
 * Type for the internal Observable objects
 */
export declare type IObservable = TDynamicType & {
    _internalValue: any;
    listen: (newVal?: any, oldVal?: any, observable?: IObservable) => TUnsubscriber;
    unsubscribe: (listener: TListener) => any;
};
/**
 * Type for the function used as a listener
 */
export declare type TListener = (newValue: any, oldValue: any, observable: IObservable) => undefined;
export declare const enum ObservableConstants {
    ListenerRemoved = 0,
    ListenerNotFound = 1
}
export interface ILogger {
    log: (message: string) => void;
}
export declare type TBOOM = {
    name: string;
    logger: ILogger;
    init: (config?: any) => void;
};
declare global {
    interface Window {
        BOOM: TBOOM;
    }
}
