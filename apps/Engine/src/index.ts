console.log('inside Engine')
interface Window {
    BOOM: any
};

window.BOOM = {
    name: 'boom',
    init: (config:any) => {
        let entry = document.getElementById(config && config.appElement ? config.appElement : 'app');
        if (!entry) {
            entry = document.createElement('div');
            entry.id = 'app';
            document.body.append(entry);
        }
    }
}