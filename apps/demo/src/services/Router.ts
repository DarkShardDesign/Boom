import DSDRouter from '@boom/core/src/Web/Router';

const init = (RoutesMap) => {
    const router = new DSDRouter();
    RoutesMap.forEach(route => {
        router.set(route.path, route.component);
    });
    router.init();
}

export default {
    init
}