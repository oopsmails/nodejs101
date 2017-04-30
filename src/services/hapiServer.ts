import * as Hapi from 'hapi';
import * as Inert from 'inert';
import { join } from 'path';
import { goodPluginConfig } from './config';
import handleErrorPlugin from '../plugins/handleError';
import { routeConfig } from '../api/routes/todoListTSRoutes';
// import {JwtAuthScheme} from './services/authToken';

// register hook for source map support, this will translate stack traces provide line numbers in TS files
require('source-map-support/register');

export function init(configs: any = {}) {
    const port = configs.port;
    const server = new Hapi.Server({ debug: false });

    server.connection({
        port: port,
        routes: {
            cors: true,
            files: {
                relativeTo: join(__dirname, '../../public')
            }
        }
    });

    server.register([
        goodPluginConfig,
        handleErrorPlugin,
        Inert
    ], err => {
        if (err) {
            server.log('error', err);
            throw err;
        }
    });

    // server.auth.scheme('jwtScheme', JwtAuthScheme);
    // server.auth.strategy('jwt', 'jwtScheme');
    // server.auth.default('jwt');

    server.route(routeConfig);

    return server;
}
