import { Logger } from '@Boom/Core/Shared/Utils';
import { ENGINE_LOG_PREFIX } from './constants';

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
    logger: new Logger(ENGINE_LOG_PREFIX)
}