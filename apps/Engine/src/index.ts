
import { ENGINE_LOG_PREFIX } from './constants';
import { Logger, lazyLoader } from '@Boom/Core/src/Shared/Utils';

declare global {
    interface Window { BOOM: TBOOM }
}

const _modules = {};

// window.BOOM = {
//     name: 'boom',
//     init: (config?:any):void => {
//         let entry = document.getElementById(config && config.appElement ? config.appElement : 'app');
//         if (!entry) {
//             entry = document.createElement('div');
//             entry.id = 'app';
//             document.body.append(entry);
//         }
//     },
//     addModule: async (name, url) => {
//         // TODO investigate synchronus loading options
//         // module will need to provide its contructor function that it loads with (currently window.BOOM.modules.[module name])
//         await lazyLoader(url);
//         /* ts-ignore */
//         _modules[name] = new window.BOOM.modules[name]();
//     },
//     getModule: async (name) => {
//         return await _modules[name];
//     },
//     logger: new Logger(ENGINE_LOG_PREFIX),
//     modules: {}
// }

const BOOM: TDynamicType = {};
const _logger = new Logger(ENGINE_LOG_PREFIX)

Object.defineProperties(BOOM, {
    name: {
        get: () => 'boom'
    },
    init: {
        value: (config?:any):void => {
            let entry = document.getElementById(config && config.appElement ? config.appElement : 'app');
            if (!entry) {
                entry = document.createElement('div');
                entry.id = 'app';
                document.body.append(entry);
            }
        }
    },
    addModule: {
        value: async (name, url) => {
            // TODO investigate synchronus loading options
            // module will need to provide its contructor function that it loads with (currently window.BOOM.modules.[module name])
            
            /* ts-ignore */
            _modules[name] = new Promise(async res => {
                await lazyLoader(url);
                res(new window.BOOM.modules[name]())
            });
        },
    },
    getModule: {
        value: async (name) => {
            _logger.log(_modules['network'])
            return await _modules[name];
        },
    },
    log: {
        get: () => _logger.log,
    },
    modules: {
        value: {}
    }
});

Object.defineProperty(window, 'BOOM', {
    get: () => BOOM
})