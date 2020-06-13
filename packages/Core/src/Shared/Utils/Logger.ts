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
        this.prefix = PREFIX;
    }

    get prefix () { return this._prefix; }
    set prefix (val) { this._prefix = val; }

    /**
     * the logger function for use by Logger instances
     * will use the prefix provided during initialisation
     * @param { any } message the message(s) to log
     */
    log (...message) {
        // TODO: add analytics and tracking code here
        console.log(`${this.prefix}`, ...message)
    }
}
