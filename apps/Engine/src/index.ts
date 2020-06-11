
import { ENGINE_LOG_PREFIX } from './constants';
import { Logger, lazyLoader } from '@Boom/Core/src/Shared/Utils';

declare global {
    interface Window { BOOM: TBOOM }
}

window.BOOM = {
    name: 'boom',
    init: (config?:any):void => {
        let entry = document.getElementById(config && config.appElement ? config.appElement : 'app');
        if (!entry) {
            entry = document.createElement('div');
            entry.id = 'app';
            document.body.append(entry);
        }
    },
    addModule: async (name, url) => {
        await lazyLoader(url);
        /* ts-ignore */
        window.BOOM.modules[name] = new window.BOOM.modules[name]();
    },
    logger: new Logger(ENGINE_LOG_PREFIX),
    modules: {}
}
