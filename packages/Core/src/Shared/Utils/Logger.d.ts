/**
 * Logger class
 * Intended to coordinate user feedback with analytics services
 * Logging and tracking feedback and errors.
 * TODO: update with additional services
 * time logging, message history, analytics integration etc
 */
export declare class Logger {
    private _prefix;
    constructor(PREFIX: any);
    /**
     * the logger function for use by Logger instances
     * will use the prefix provided during initialisation
     * @param { string } message the message to log
     */
    log(message: any, prefix?: string): void;
}
