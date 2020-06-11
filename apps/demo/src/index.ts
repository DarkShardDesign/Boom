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
    window.BOOM.addModule('network', 'js/network-axios.bundle.js');

    appLogger.log('loading the graphics library');
    window.BOOM.addModule('graphics', 'js/graphics-pixi.bundle.js');
    
    appLogger.log('Initialising web app');

    const RoutesMap = [
        {
            path: '/',
            component: HomePage
        }
    ]
    Router.init(RoutesMap);
}

appLogger.log('initialising...');

init();