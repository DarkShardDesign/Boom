import { TResourceHandle, TEventHandler, TConfig } from '../../types';
import { IResourceModule } from '../IResourceModule';
import { IModule } from '../IModule';

/**
 * render mode to switch to
 * options dependant on module implementation
 * Ex. Fullscreen, Windowed, Framed
 */
type TRenderMode = string;

/**
 * Interface defining the API between the Engine and Graphics module
 * Ensuring required features
 */
export interface IGraphics extends IModule, IResourceModule {
    // Graphics Module Interactions
    /**
     * Used to resize the renderer and/or renderer
     * @param { TConfig } targetConfig the config with the changes defined
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Resize: (targetConfig: TConfig) => Promise<any>,

    /**
     * Used to change the render resolution settings
     * @param { TConfig } targetConfig the config object with the changes defined
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    ResizeRenderResolution: (targetConfig: TConfig) => Promise<any>,

    /**
     * Reset the graphics module to new configuration
     * @param { TConfig } newConfig the new configuration for the graphics module
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    ResetRenderTarget: (newConfig: TConfig) => Promise<any>,

    /**
     * Used to switch to full screen mode
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SwitchFullScreen: () => Promise<any>,

    /**
     * Used to switch to full window mode
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SwitchFullWindow: () => Promise<any>,
    
    /**
     * Used to switch to framed mode (confined inside an elements dimensions)
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SwitchFramed: () => Promise<any>,

    /**
     * Used to switch screen mode
     * @param { TRenderMode } mode the target mode to switch to
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SetRenderMode: (mode: TRenderMode) => Promise<any>,

    /**
     * Used to show a specified graphics object
     * @param { TResourceHandle } objectHandle the resource handle for the object to show
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Show: (objectHandle: TResourceHandle) => Promise<any>,

    /**
     * Used to hide a specified graphics object
     * @param { TResourceHandle } objectHandle the resource handle for the object to hide
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Hide: (objectHandle: TResourceHandle) => Promise<any>,

    /**
     * Used to play a specified graphics object
     * Intended for use with animation type objects
     * @param { TResourceHandle } objectHandle the resource handle for the object to 'play'
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Play: (objectHandle: TResourceHandle) => Promise<any>,

    /**
     * Used to play a specified graphics object from a given time interval in its animation
     * @param { TResourceHandle } objectHandle the resource handle for the object to call 'play' on
     * @param { number } milliseconds the time interval to start the animation from
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    PlayFrom: (objectHandle: TResourceHandle, milliseconds: number) => Promise<any>,

    /**
     * Used to call a handler when an animation completes
     * @param { TResourceHandle } objectHandle the resource handle for the object to listen on
     * @param { TEventHandler } handler the handler function to call when the animation completes
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    OnComplete: (objectHandle: TResourceHandle, handler: TEventHandler) => Promise<any>
}