import { TResourceHandle, TEventHandler, TDataPacket, TResponse, TUnsubscriber } from '../../types';
import { IResourceModule } from '../IResourceModule';
import { IModule } from '../IModule';

/**
 * Interface defining the API between the Network manager and the engine
 * Ensuring required functionality
 * 
 * Server instances should either be websocket instances
 * Or HTTP API endpoints, so each end point will be treated as a separate server in this context
 */
declare interface INetwork extends IResourceModule, IModule {
    // These should work with sockets or http servers
    /**
     * Used to send data to a server instance
     * This can be a websocket or http server type
     * POST will be used if the server type is http
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data the data to send
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Send: (serverHandle: TResourceHandle, data: TDataPacket) => Promise<TResponse>,

    /**
     * Used to send a GET message to a server instance
     * This can be used only with HTTP servers
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data any data to include in the message body
     * @returns { Promise<TResponse> } a promise resolving with this servers response
     */
    Get: (serverHandle: TResourceHandle, data: TDataPacket) => Promise<TResponse>,

    /**
     * Used to send a POST message to a server instance
     * This can only be used with HTTP Servers
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data the data to send with this message body
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Post: (serverHandle: TResourceHandle, data: TDataPacket) => Promise<TResponse>,

    /**
     * Used to send a PATCH message to a server instance
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TdataPacket } data the data to send with this messages body
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Patch: (serverHandle: TResourceHandle, data: TDataPacket) => Promise<TResponse>,

    /**
     * Used to subscribe to a message type
     * expected use case with websockets, support for any other case will be dependant on the module implementation
     * @param { TResourceHandle } serverHandler the resource handle for the server to use
     * @param { TEventHandler } handler the handler to call when a message is received on this server
     * @param { string } type the optional type to filter messages to this handler
     * @returns { TUnsubscriber } an unsubscriber function to stop listening for these messages/types
     */
    Subscribe: (serverHandle: TResourceHandle, handler: TEventHandler, type?:string) => TUnsubscriber,

    /**
     * Used to explicitly unsubscribe a given handler from a servers messages
     * expected use case with websockets, support for any other case will be dependant on the module implementation
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TEventHandler } handler the handler to unsubscribe from this servers messages
     * @param { string } type the optional type filter this handler was using
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Unsubscribe: (serverHandle: TResourceHandle, handler: TEventHandler, type?: string) => Promise<any>,

    /**
     * Used to unsubscribe all messages from this server instance, or all listeners on all server instances
     * expected use case with websockets, support for any other case will be dependant on the module implementation
     * @param { TResourceHandle } serverHandle optional server handle to remove listeners from, all listeners on all servers are unsubscribed if this is ommited
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    UnsubscribeAll: (serverHandle?: TResourceHandle) => Promise<any>

    // optional
    /**
     * used to create an interceptor for a specific server instance
     * Can be used for both http api endpoint servers and specific websocket message types
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TEventHandler } handler the handler to pass this message to instead of the server
     * @param { string } target the optional the message type to intercept, ignored for http servers
     * @returns { TUnsubscriber } an unsubscriber function to remove this interceptor when invoked
     */
    CreateInterceptor: (serverHandle: TResourceHandle, handler: TEventHandler, target?: string) => TUnsubscriber,

    /**
     * used to unsubscribe a handler from a server/target instance
     * Can be used for both http api endpoint servers and specific websocket message types
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TEventHandler } handler the event hander this interceptor was using
     * @param { string } target the optional message type this interceptor was using, ignored for http servers
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    RemoveInterceptor: (serverHandle: TResourceHandle, handler: TEventHandler, target?: string) => Promise<any>

    /**
     * function intended for use by interceptor handlers to be able to then continue with the original function
     * intended so the interceptor can log/amend/update/replace the data packet before sending to the server
     * Can be used for both HTTP API Endpoint servers and websocket servers
     * @param { TResourceHandle } serverHandle the resouce handle for the server to use
     * @param { string } method the original method that was being called on this server
     * @param { TDataPacket } data the data packet to use with this request
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    BypassInterceptor: (serverHandle: TResourceHandle, method: string, data: TDataPacket) => Promise<TResponse>
    // curry function returning a version of the api who's methods will bypass the interceptors
    // BypassInterceptor : (serverHandle: TResourceHandle) => INetwork
}