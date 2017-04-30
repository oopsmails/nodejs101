import { Server } from 'hapi';
import * as Boom from 'boom';

let handleError: any = {
    register: (server: Server, options: any, next: any) => {

        server.ext('onPreResponse', function (request: any, reply) {
            const res = request.response;
            const req = request.raw.req;

            if (res.isBoom) {
                const hasAxiosErrors = res.data !== undefined && res.data !== null;

                if (hasAxiosErrors) {
                    server.log(['error', 'axios'], res.data);
                }
            }

            return reply.continue();
        });

        next();
    }
};

handleError.register.attributes = {
    name: 'handleError',
    version: '1.0.0'
};

export default handleError;
