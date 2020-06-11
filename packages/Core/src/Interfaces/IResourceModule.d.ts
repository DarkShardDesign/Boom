/**
 * interface for engine modules that have CRUD interfaces for their resources
 */
export interface IResourceModule {
    /**
     * called to create a new resource object on the module
     * @param { TConfig } objectConfig the config object describing this resource, used to control object creation
     * @returns { Promise<TResourceHandle> } a promise resolving for success or rejecting with any error messages
     */
    CreateObject: (objectConfig: TConfig) => Promise<TResourceHandle>;
    /**
     * called to replace an existing resource with a new resource object on the module
     * object types should match and may cause errors in the module if they do not.
     * @param { TResourceHandle } objectHandle the ResourceHandle to the object that needs to be replaced
     * @param { TConfig } objectConfig the config object describing this resource, used to control object creation
     * @returns { Promise<TResourceHandle> } a promise resolving for success or rejecting with any error messages
     */
    ReplaceObject: (objectHandle: TResourceHandle, objectConfig: TConfig) => Promise<TResourceHandle>;
    /**
     * called to update an existing resource object on the module
     * @param { TResourceHandle } objectHandle for the target object
     * @param { TConfig } objectConfig the config object describing this resource, used to update or recreate this object
     * @returns { Promise<TResourceHandle> } a promise resolving for success or rejecting with any error messages
     */
    UpdateObject: (objectHandle: TResourceHandle, objectConfig: TConfig) => Promise<TResourceHandle>;
    /**
     * called to destroy a resource object
     * @param { TResourceHandle } objectHandle the handle for the target resource
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    DestroyObject: (objectHandle: TResourceHandle) => Promise<any>;
}
