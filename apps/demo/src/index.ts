import '@Boom/Core/src/types';
import { logger, lazyLoader } from './utils';
import { waitOnWindowProperty } from './utils/Wait';
import Router from './services/Router';
import HomePage from './components/HomePage';



const init = async function () {
    logger.log('loading dynamic dependencies');
    lazyLoader('js/engine.bundle.js');

    await waitOnWindowProperty('BOOM');

    logger.log('Engine loaded');

    logger.log('Initialising the engine');
    window.BOOM.init();
    
    logger.log('Initialising web app');

    const RoutesMap = [
        {
            path: '/',
            component: HomePage
        }
    ]
    Router.init(RoutesMap);
}

logger.log('initialising...');

init();