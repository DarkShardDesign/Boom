import '@Boom/Core/types';
import { Logger, lazyLoader, waitOnWindowProperty } from '@Boom/Core/Shared/Utils';
import Router from './services/Router';
import HomePage from './components/HomePage';
const LOG_PREFIX = 'DEMO - ';
let appLogger = new Logger(LOG_PREFIX);
const init = async function () {
    appLogger.log('loading dynamic dependencies');
    lazyLoader('js/engine.bundle.js');

    await waitOnWindowProperty('BOOM');

    appLogger.log('Engine loaded');

    appLogger.log('Initialising the engine');
    window.BOOM.init({});
    
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