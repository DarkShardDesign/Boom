import { IResourceModule } from '../IResourceModule';
import { IModule } from '../IModule';

/**
 * simple string defining the sound mode
 * Mono, Stereo etc
 * Supported values will depend on the module implementation used
 */
type TSoundMode = string;

/**
 * Interface for sound manager modules
 * Defines the API between the sound manager and the engine to ensure functionality
 */
declare interface ISoundManager extends IResourceModule, IModule {
    // Sound manager interactions
    /**
     * called to set the volume level of the sound manager or sound
     * @param { number } volume the target volume level to set
     * @param { TResourceHandle } soundHandle the optional sound handle if setting volume on specific sound resource, volume is set globally if ommited
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SetVolume: (volume: number, soundHandle?: TResourceHandle ) => Promise<any>,

    /**
     * called to get the volume level of the sound manager or sound
     * @param { TResourceHandle } soundHandle the optional sound handle if getting volume of a specific sound resource, volume is global if ommited
     * @returns { Promise<number> } promise resolving with any error messages or on success the volume requested
     */
    GetVolume: (soundHandle?:TResourceHandle) => Promise<number>,
    
    /**
     * called to set the audio mode of the sound manager or sound resource
     * @param { TSoundMode } mode the target mode to set
     * @param { TResourceHandle } soundHandle the optional sound handle if setting the mode for a specific sound resource
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    SetMode: (mode: TSoundMode, soundHandle?:TResourceHandle) => Promise<any>,

    /**
     * Mute all sounds or a given sound if provided
     * @param { TResourceHandle } soundHandle the optional sound handle to mute
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    Mute: (soundHandle?:TResourceHandle) => Promise<any>,

    /**
     * UnMute all sounds or a given sound if provided
     * @param { TResourceHandle } soundHandle the optional resource handle for the sound to unmute
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    UnMute: (soundHandle?:TResourceHandle) => Promise<any>

    /**
     * used to play a specific sound resource
     * @param { TResourceHandle } soundHandle the sound resource handle to play
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    Play: (soundHandle: TResourceHandle) => Promise<any>,

    /**
     * used to que up sounds
     * @param { TResourceHandle } soundHandle   the sound object that will be played first,
     *                                          this can be waiting in a queue itself and does not need to be currently playing
     * @param { TResourceHandle } nextSoundHandle the sound to play after the first one
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    PlayNext: (soundHandle: TResourceHandle, nextsoundHandle: TResourceHandle) => Promise<any>,

    /**
     * used to set a list of sounds to play one after each other in order provided
     * @param { Array<TResourceHandle> } soundsList an array of resource handles to play in order provided
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    QueueSounds: (soundsList: Array<TResourceHandle>) => Promise<any>,

    /**
     * add a handler after a sound completes playing
     * @param { TResourceHandle } soundHandle the sound to listen on
     * @param { TEventHandler } handler the handler function to call when this event occurs
     */
    OnComplete: (soundHandle: TResourceHandle, handler: TEventHandler) => Promise<any>
}