export default class Router {
    private currentComponent;
    private routes;
    constructor();
    /**
     * Register a new route uri and component
     * @param {string} uri the uri to match against for the given route
     * @param {Component} component the component to create and mount when we match the route
     */
    set(uri: any, component: any): void;
    /**
     * Register and mount the given route/component
     * @param {Object} route the route object that holds the component to use
     * @param {string} path the path that triggered this component
     */
    mountComponent(route: any, path: any): void;
    /**
     * initialise the router and mount the matching component
     */
    init(): void;
}
