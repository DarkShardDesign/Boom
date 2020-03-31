'use strict'

const Hapi = require('@hapi/hapi');
const Path = require('path');

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: "0.0.0.0",
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'dist')
            }
        }
    });

    await server.register(require('@hapi/inert'));

    server.route({
        method: 'GET',
        path: '/{filename}',
        handler: {
            file: function (request) {
                return request.params.filename;
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (req, h) {
            return h.file('index.html');
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();