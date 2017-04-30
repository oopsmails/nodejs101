export const Config: any = {
    PORT: process.env.PORT || 3000,
    //KYC_BASE_URL: pess.env.KYC_BASE_URL || 'http://localhost:8080',
    NODE_ENV: process.env.NODE_ENV || 'dev',
};

// see: https://github.com/hapijs/good
export const goodPluginConfig: any = {
    register: require('good'),
    options: {
        includes: {
            // TODO: make this configurable - should only show in dev
            // response: ['payload']
        },
        reporters: {
            console: [
                {
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        log: '*',
                        error: '*',
                        response: '*',
                        request: '*',
                        // ops: '*' 
                    }]
                },
                { module: 'good-console' },
                'stdout'
            ]
        }
    }
};
