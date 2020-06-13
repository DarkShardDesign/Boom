import { INetworkBypass } from "@Boom/Core/src/Interfaces/Network/INetwork";
// import { TConfig, TResourceHandle, TDataPacket, TResponse, TEventHandler, TUnsubscriber } from '@Boom/Core'

export default class ServerBypass implements INetworkBypass {
    /**
     * Used to send data to a server instance
     * This can be a websocket or http server type
     * POST will be used if the server type is http
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data the data to send
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Send(serverHandle: TResourceHandle, data: TDataPacket): Promise<TResponse> {
        return Promise.resolve({});
    }

    /**
     * Used to send a GET message to a server instance
     * This can be used only with HTTP servers
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data any data to include in the message body
     * @returns { Promise<TResponse> } a promise resolving with this servers response
     */
    Get(serverHandle: TResourceHandle, data: TDataPacket): Promise<TResponse> {
        return Promise.resolve({});
    }

    /**
     * Used to send a POST message to a server instance
     * This can only be used with HTTP Servers
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TDataPacket } data the data to send with this message body
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Post(serverHandle: TResourceHandle, data: TDataPacket): Promise<TResponse> {
        return Promise.resolve({});
    }

    /**
     * Used to send a PATCH message to a server instance
     * @param { TResourceHandle } serverHandle the resource handle for the server to use
     * @param { TdataPacket } data the data to send with this messages body
     * @returns { Promise<TResponse> } a promise resolving with the servers response
     */
    Patch(serverHandle: TResourceHandle, data: TDataPacket): Promise<TResponse> {
        return Promise.resolve({});
    }
}