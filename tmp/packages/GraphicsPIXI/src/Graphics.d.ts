import { IGraphics } from '@Boom/Core/src/Interfaces/Graphics/IGraphics';
import { TConfig, TResourceHandle, TEventHandler } from '@Boom/Core/src/types';
export declare class GraphicsPIXI implements IGraphics {
    /**
     * called to initialise the module for use
     * @param {TConfig} config the config object for this module
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Init(config: TConfig): Promise<void>;
    /**
     * called to clean up this modules resources on shutdown
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Shutdown(): Promise<void>;
    /**
     * called to load a group resources, give a url for a resources manifest file
     * @param { string } manifestURL the URL to load this manifest file from
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    LoadResourceManifest(manifestURL: string): Promise<void>;
    /**
     * called to load a single resource give that resources direct url
     * @param { string } resourceURL the url for the specific resource
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    LoadResource(resourceURL: string): Promise<void>;
    /**
 * called to create a new resource object on the module
 * @param { TConfig } objectConfig the config object describing this resource, used to control object creation
 * @returns { Promise<TResourceHandle> } a promise resolving with any error messages or on success the handle for the new resource
 */
    CreateObject(objectConfig: TConfig): Promise<number>;
    /**
     * called to replace an existing resource with a new resource object on the module
     * object types should match and may cause errors in the module if they do not.
     * @param { TResourceHandle } objectHandle the ResourceHandle to the object that needs to be replaced
     * @param { TConfig } objectConfig the config object describing this resource, used to control object creation
     * @returns { Promise<TResourceHandle> } a promise resolving with any error messages or on success the handle for the new resource
     */
    ReplaceObject(objectHandle: TResourceHandle, objectConfig: TConfig): Promise<number>;
    /**
     * called to update an existing resource object on the module
     * @param { TResourceHandle } objectHandle for the target object
     * @param { TConfig } objectConfig the config object describing this resource, used to update or recreate this object
     * @returns { Promise<TResourceHandle> } a promise resolving with any error messages or on success the handle for the new resource
     */
    UpdateObject(objectHandle: TResourceHandle, objectConfig: TConfig): Promise<number>;
    /**
     * called to destroy a resource object
     * @param { TResourceHandle } objectHandle the handle for the target resource
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    DestroyObject(objectHandle: TResourceHandle): Promise<void>;
    /**
     * Used to resize the renderer and/or renderer
     * @param { TConfig } targetConfig the config with the changes defined
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Resize(targetConfig: TConfig): Promise<void>;
    /**
     * Used to change the render resolution settings
     * @param { TConfig } targetConfig the config object with the changes defined
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    ResizeRenderResolution(targetConfig: TConfig): Promise<void>;
    /**
     * Reset the graphics module to new configuration
     * @param { TConfig } newConfig the new configuration for the graphics module
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    ResetRenderTarget(newConfig: TConfig): Promise<void>;
    /**
     * Used to switch to full screen mode
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SwitchFullScreen(): Promise<void>;
    /**
     * Used to switch to full window mode
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SwitchFullWindow(): Promise<void>;
    /**
     * Used to switch to framed mode (confined inside an elements dimensions)
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SwitchFramed(): Promise<void>;
    /**
     * Used to switch screen mode
     * @param { string } mode the target mode to switch to
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SetRenderMode(mode: string): Promise<void>;
    /**
     * Used to show a specified graphics object
     * @param { TResourceHandle } objectHandle the resource handle for the object to show
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Show(objectHandle: TResourceHandle): Promise<void>;
    /**
     * Used to hide a specified graphics object
     * @param { TResourceHandle } objectHandle the resource handle for the object to hide
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Hide(objectHandle: TResourceHandle): Promise<void>;
    /**
     * Used to play a specified graphics object
     * Intended for use with animation type objects
     * @param { TResourceHandle } objectHandle the resource handle for the object to 'play'
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Play(objectHandle: TResourceHandle): Promise<void>;
    /**
     * Used to play a specified graphics object from a given time interval in its animation
     * @param { TResourceHandle } objectHandle the resource handle for the object to call 'play' on
     * @param { number } milliseconds the time interval to start the animation from
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    PlayFrom(objectHandle: TResourceHandle, milliseconds: number): Promise<void>;
    /**
     * Used to call a handler when an animation completes
     * @param { TResourceHandle } objectHandle the resource handle for the object to listen on
     * @param { TEventHandler } handler the handler function to call when the animation completes
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    OnComplete(objectHandle: TResourceHandle, handler: TEventHandler): Promise<void>;
}
export default GraphicsPIXI;
