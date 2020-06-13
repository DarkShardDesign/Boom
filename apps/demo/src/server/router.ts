import api from './routes/api';

const routes = {
    api
}

export default function Router (req, res) {
    let queryParams = req.url;
    let _routes: any = routes;
    // detect type of route
    if (queryParams.startsWith('/api')) {
        _routes = _routes.api;
        queryParams = queryParams.substring(4);
    }

    // detect type of api call
    if (queryParams.startsWith('/games')) {
        _routes = _routes.games;
        queryParams = queryParams.substring(6);
    }

    // detect which game is being serviced
    if (queryParams.startsWith('/memory')) {
        _routes = _routes.memory;
        queryParams = queryParams.substring(7);
    }
    _routes.find(route => queryParams.startsWith(route.url) && req.method.toLowerCase() === route.method.toLowerCase())?.handler(req, res);
}