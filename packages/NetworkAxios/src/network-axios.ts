import { INetwork, INetworkBypass } from '@Boom/Core/src/Interfaces/Network/INetwork';
import ServerBypass from './utils/ServerBypass';
import axios from 'axios';

export default class NetworkAxios implements INetwork {
    private _endpoints: Array<any> = [];

    constructor () {
        window.BOOM.log('Network Library loaded using NetworkAxios')
    }
    /**
     * called to initialise the module for use
     * @param {TConfig} config the config object for this module
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Init(config: TConfig): Promise<any> {
        if (config.endpoints) {
            config.endpoints.forEach(endpoint => {
                this.CreateObject(endpoint);
            });
        }
        return Promise.resolve();
    }

    /**
     * called to clean up this modules resources on shutdown
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Shutdown(): Promise<any> {
        // nothing to do at the moment (for websockets)
        return Promise.resolve();
    }

    /**
     * called to load a group resources, give a url for a resources manifest file
     * @param { string } manifestURL the URL to load this manifest file from
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    LoadResourceManifest(manifestURL: string): Promise<any> {
        return Promise.reject('not implemented');
    }

    /**
     * called to load a single resource give that resources direct url
     * @param { string } resourceURL the url for the specific resource
     * @returns { Promise<any> } a a promise resolving for success or rejecting with any error messages
     */
    LoadResource(resourceURL: string): Promise<any> {
        return Promise.reject('not implemented');
    }

    // Generic CRUD interface
    /**
     * called to create a new resource object on the module
     * @param { TConfig } objectConfig the config object describing this resource, used to control object creation
     * @returns { Promise<TResourceHandle> } a promise resolving for success or rejecting with any error messages
     */
    CreateObject(objectConfig: TConfig): Promise<TResourceHandle> {
        return new Promise(resolve => {
            resolve(this._endpoints
                .push(axios.create(objectConfig)) - 1
            );
        });
    }

    /**
     * called to replace an existing resource with a new resource object on the module
     * object types should match and may cause errors in the module if they do not.
     * @param { TResourceHandle } objectHandle the ResourceHandle to the object that needs to be replaced
     * @param { TConfig } objectConfig the config object describing this resource, used to control object creation
     * @returns { Promise<TResourceHandle> } a promise resolving for success or rejecting with any error messages
     */
    ReplaceObject(objectHandle: TResourceHandle, objectConfig: TConfig): Promise<TResourceHandle> {
        return new Promise(res => {
            this._endpoints[objectHandle] = axios.create(objectConfig);
            res(objectHandle)
        });
    }

    /**
     * called to update an existing resource object on the module
     * @param { TResourceHandle } objectHandle for the target object
     * @param { TConfig } objectConfig the config object describing this resource, used to update or recreate this object
     * @returns { Promise<TResourceHandle> } a promise resolving for success or rejecting with any error messages
     */
    UpdateObject(objectHandle: TResourceHandle, objectConfig: TConfig): Promise<TResourceHandle> {
        return new Promise(res => {
            this._endpoints[objectHandle] = axios.create(objectConfig);
            res(objectHandle);
        });
    }

    /**
     * called to destroy a resource object
     * @param { TResourceHandle } objectHandle the handle for the target resource
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    DestroyObject(objectHandle: TResourceHandle): Promise<any> {
        this._endpoints[objectHandle] = undefined;
        return Promise.resolve();
    }

    // These should work with sockets or http servers
    /**
     * Used to send data to a server instance
     * This can be a websocket or http server type
     * POST will be used if the server type is http
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data the data to send
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Send(serverHandle: TResourceHandle, data: TDataPacket): Promise<TResponse> {
        const server = this._endpoints[serverHandle];
        return server.post(server.defaults.url, data);
    }

    /**
     * Used to send a GET message to a server instance
     * This can be used only with HTTP servers
     * Appends any provided data object as query string params
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data any data as { [key]:[value] } to be used in the query string params
     * @returns { Promise<TResponse> } a promise resolving with this servers response
     */
    Get(serverHandle: TResourceHandle, data: TDataPacket): Promise<TResponse> {
        const server = this._endpoints[serverHandle];
        return server.get(server.defaults.url, { params: data });
    }

    /**
     * Used to send a POST message to a server instance
     * This can only be used with HTTP Servers
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data the data to send with this message body (as json object)
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Post(serverHandle: TResourceHandle, data: TDataPacket): Promise<TResponse> {
        const server = this._endpoints[serverHandle];
        return server.post(server.defaults.url, data);
    }

    /**
     * Used to send a PATCH message to a server instance
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TdataPacket } data the data to send with this messages body (as json object)
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Patch(serverHandle: TResourceHandle, data: TDataPacket): Promise<TResponse> {
        const server = this._endpoints[serverHandle];
        return server.patch(server.defaults.url, data);
    }

    /**
     * Used to subscribe to a message type
     * expected use case with websockets, support for any other case will be dependant on the module implementation
     * @param { TResourceHandle } serverHandler the resource handle for the server to use
     * @param { TEventHandler } handler the handler to call when a message is received on this server
     * @param { string } type the optional type to filter messages to this handler
     * @returns { TUnsubscriber } an unsubscriber function to stop listening for these messages/types
     */
    Subscribe(serverHandle: TResourceHandle, handler: TEventHandler, type?:string): TUnsubscriber {
        return () => Promise.reject('not implemented')
    }

    /**
     * Used to explicitly unsubscribe a given handler from a servers messages
     * expected use case with websockets, support for any other case will be dependant on the module implementation
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TEventHandler } handler the handler to unsubscribe from this servers messages
     * @param { string } type the optional type filter this handler was using
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    Unsubscribe(serverHandle: TResourceHandle, handler: TEventHandler, type?: string): Promise<any> {
        return Promise.reject('not implemented');
    }

    /**
     * Used to unsubscribe all messages from this server instance, or all listeners on all server instances
     * expected use case with websockets, support for any other case will be dependant on the module implementation
     * @param { TResourceHandle } serverHandle optional server handle to remove listeners from, all listeners on all servers are unsubscribed if this is ommited
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    UnsubscribeAll(serverHandle?: TResourceHandle): Promise<any> {
        return Promise.reject('not implemented');
    }

    // optional
    /**
     * used to create an interceptor for a specific server instance
     * Can be used for both http api endpoint servers and specific websocket message types
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TEventHandler } handler the handler to pass this message to instead of the server
     * @param { string } target the optional the message type to intercept, ignored for http servers
     * @returns { TUnsubscriber } an unsubscriber function to remove this interceptor when invoked
     */
    CreateInterceptor(serverHandle: TResourceHandle, handler: TEventHandler, target?: string): TUnsubscriber {
        return () => Promise.reject('not implemented')
    }

    /**
     * used to unsubscribe a handler from a server/target instance
     * Can be used for both http api endpoint servers and specific websocket message types
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TEventHandler } handler the event hander this interceptor was using
     * @param { string } target the optional message type this interceptor was using, ignored for http servers
     * @returns { Promise<any> } a promise resolving for success or rejecting with any error messages
     */
    RemoveInterceptor(serverHandle: TResourceHandle, handler: TEventHandler, target?: string): Promise<any> {
        return Promise.reject('not implemented');
    }

    /**
     * function intended for use by interceptor handlers to be able to then continue with the original function
     * intended so the interceptor can log/amend/update/replace the data packet before sending to the server
     * Can be used for both HTTP API Endpoint servers and websocket servers
     * @param { TResourceHandle } serverHandle the resouce handle for the server to use
     * @param { string } method the original method that was being called on this server
     * @param { TDataPacket } data the data packet to use with this request
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    BypassInterceptor(serverHandle: TResourceHandle): INetworkBypass {
        return  new ServerBypass();
    }
    // curry function returning a version of the api who's methods will bypass the interceptors
    // BypassInterceptor : (serverHandle: TResourceHandle) => INetwork
}