// import { TConfig } from "../module"
/**
 * Module Interface
 * API for shared engine/module interaction
 */
export interface IModule {
    /**
     * called to initialise the module for use
     * @param {TConfig} config the config object for this module
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Init: (config: TConfig) => Promise<any>,

    /**
     * called to clean up this modules resources on shutdown
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Shutdown: () => Promise<any>,

    /**
     * called to load a group resources, give a url for a resources manifest file
     * @param { string } manifestURL the URL to load this manifest file from
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    LoadResourceManifest: (manifestURL: string) => Promise<any>,

    /**
     * called to load a single resource give that resources direct url
     * @param { string } resourceURL the url for the specific resource
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    LoadResource: (resourceURL: string) => Promise<any>
}