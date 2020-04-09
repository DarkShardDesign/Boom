import './Logger';
/**
 * a simple wait function, delays the given time before resolving
 * @param { number? } timeout the time in ms to wait before resolving, defaults to 50ms
 * @returns { Promise<any> } a promise resolving after the given time expires
 */
export declare const delay: (timeout?: number) => Promise<unknown>;
/**
 * wait for a property to appear on window
 * @param { string } property the property name to wait for
 * @param { number? } timeout the maximum time to wait before failing in milliseconds (defaults to 30 seconds)
 * @param { number? } waitTime the time between checks in ms, defaults to 50 milliseconds (1 javascript process slice)
 * @returns { Promise<any> } promise with the property in question or a reject message
 */
export declare const waitOnWindowProperty: (property: string, timeout?: number, waitTime?: number) => Promise<unknown>;
