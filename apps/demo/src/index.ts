import { Logger, lazyLoader } from '@Boom/Core/src/Shared/Utils';
import Router from './app/services/Router';
import HomePage from './app/components/HomePage';
import GamesPage from './app/components/GamesPage';

const MODULES = {
    NETWORK: 'network'
}

const LOG_PREFIX = 'DEMO - ';
let appLogger = new Logger(LOG_PREFIX);

const init = async function () {
    appLogger.log('loading dynamic dependencies');
    await lazyLoader('js/engine.bundle.js');
    const BOOM = window.BOOM;

    appLogger.log('Engine loaded');

    appLogger.log('Initialising the engine');
    BOOM.init({});
    
    appLogger.log('loading network library');
    BOOM.addModule(MODULES.NETWORK, 'js/network-axios.bundle.js');

    appLogger.log('loading the graphics library');
    BOOM.addModule('graphics', 'js/graphics-pixi.bundle.js');
    
    appLogger.log('Initialising web app');

    const RoutesMap = [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/games',
            component: GamesPage
        },
        
        {
            path: '/games/memory',
            component: HomePage
        }
    ]
    Router.init(RoutesMap);

    // test some api calls.
    // wait for the network module to complete loading (this will be handled inside the getter on the engine at a later date)
    const NetworkModule = await BOOM.getModule(MODULES.NETWORK);
    // set a new endpoint for the memory game new game call
    const memoryNewGameAPI = await NetworkModule.CreateObject({ baseUrl: 'http://127.0.0.1', url: '/api/games/memory/newgame' });

    // make a call to the endpoint to get a new game
    NetworkModule.Get(memoryNewGameAPI)
        .then(result => appLogger.log(`received a new game response for the memory games new game api call: `, result))
}

appLogger.log('initialising...');

init();