import { Logger, lazyLoader, waitOnWindowProperty } from '@Boom/Core/src/Shared/Utils';
import Router from './services/Router';
import HomePage from './components/HomePage';

const LOG_PREFIX = 'DEMO - ';
let appLogger = new Logger(LOG_PREFIX);

const init = async function () {
    appLogger.log('loading dynamic dependencies');
    await lazyLoader('js/engine.bundle.js');

    appLogger.log('Engine loaded');

    appLogger.log('Initialising the engine');
    window.BOOM.init({});
    
    appLogger.log('loading network library');
    const networkLoader = window.BOOM.addModule('network', 'js/network-axios.bundle.js');

    appLogger.log('loading the graphics library');
    await window.BOOM.addModule('graphics', 'js/graphics-pixi.bundle.js');
    
    appLogger.log('Initialising web app');

    const RoutesMap = [
        {
            path: '/',
            component: HomePage
        }
    ]
    Router.init(RoutesMap);

    // test some api calls.
    // wait for the network module to complete loading (this will be handled inside the getter on the engine at a later date)
    await networkLoader;
    // set a new endpoint for the memory game new game call
    const memoryNewGameAPI = await window.BOOM.modules.network.CreateObject({ baseUrl: 'http://localhost', url: '/api/games/memory/newgame' });

    // make a call to the endpoint to get a new game
    window.BOOM.modules.network.Get(memoryNewGameAPI)
        .then(result => appLogger.log(`received a new game response for the memory games new game api call: `, result))
}

appLogger.log('initialising...');

init();