import { logger } from ".";

/**
 * a simple wait function, delays the given time before resolving
 * @param { number? } timeout the time in ms to wait before resolving, defaults to 50ms
 * @returns { Promise<any> } a promise resolving after the given time expires
 */
const delay = (timeout:number = 50) => {
    return new Promise(res => {
        setTimeout(res, timeout)
    });
}

/**
 * wait for a property to appear on window
 * @param { string } property the property name to wait for
 * @param { number? } timeout the maximum time to wait before failing in milliseconds (defaults to 30 seconds)
 * @param { number? } waitTime the time between checks in ms, defaults to 50 milliseconds (1 javascript process slice)
 * @returns { Promise<any> } promise with the property in question or a reject message
 */
const waitOnWindowProperty = function (property: string, timeout: number = 30000, waitTime: number = 50) {
    return new Promise(async (resolve, reject) => {
        const startTime = Date.now();
        const message = `property ${property} not found within timeout ${timeout}`;
        while(!window[property]) {
            if (Date.now() - startTime > timeout) {
                logger.log(message);
                reject(message);
                break;
            }
            await delay(waitTime);
        }
        if (window[property]) { resolve(window[property]) }
        else { logger.log(message); reject(message) }
    });
}

export {
    waitOnWindowProperty,
    delay
}