/**
 * Logger class
 * Intended to coordinate user feedback with analytics services
 * Logging and tracking feedback and errors.
 * TODO: update with additional services
 * time logging, message history, analytics integration etc
 */
export class Logger {
    private _prefix:string;

    constructor (PREFIX) {
        this._prefix = PREFIX;
    }

    /**
     * the logger function for use by Logger instances
     * will use the prefix provided during initialisation
     * @param { string } message the message to log
     */
    log (message, prefix = this._prefix) {
        // TODO: add analytics and tracking code here
        console.log(`${prefix}${message}`)
    }
}
