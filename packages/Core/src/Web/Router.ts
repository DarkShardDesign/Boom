import { isString, isFunction } from '../Shared/Utils';
import WebComponent from './WebComponent';

export default class Router {
    private currentComponent: any;
    private routes: Array<any>;

    constructor () {
        this.currentComponent = {};
        this.routes = [];
    }

    /**
     * Register a new route uri and component
     * @param {string} uri the uri to match against for the given route
     * @param {Component} component the component to create and mount when we match the route
     */
    set(uri, component) {
        // we need to have values for both uri and component
        if (!uri || !component) throw new Error('uri and component must be given');

        // they need to be the correct types
        if (!isString(uri)) throw new Error('uri must be a string');
        if (!isFunction(component)) throw new Error('component must be a function');

        // we dont want conflicting routes, so if we already have it throw an error
        if (this.routes.find(route => route.uri === uri)) throw new Error(`the uri ${uri} already exists`);

        // add the new route
        this.routes.push({
            uri,
            component
        });
    }

    /**
     * Register and mount the given route/component
     * @param {Object} route the route object that holds the component to use
     * @param {string} path the path that triggered this component
     */
    mountComponent(route, path) {
        if(this.currentComponent.unmount) this.currentComponent.unmount();
        this.currentComponent = new route.component();
        WebComponent.register(this.currentComponent);
        this.currentComponent.mount(this.currentComponent, path);
    }

    /**
     * initialise the router and mount the matching component
     */
    init() {
        // process routes until we find a match
        this.routes.some(route => {
            // setup our regex to match with
            let regEx = new RegExp(`^${route.uri}$`);
            // get our current path
            let path = window.location.pathname;

            // if the path matches our route then invoke its callback
            if (path.match(regEx)) return this.mountComponent(route, path);
        });
    }
}
