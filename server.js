// Start script is a plain js file due to Azure constraint,
// azure looks for startup script, before TypeScript gets chance to get compiled to ts

// not implented yet in node 6  import * as Server from "./build/service/server";
let Server = require("./build/services/hapiServer");
const Config = require('./build/services/config').Config;

console.log(`Running environment ${Config.NODE_ENV}`);

const serverConfigs = {
    "port": Config.PORT
};

const server = Server.init(serverConfigs);


process.on('uncaughtException', function () {
  console.log('uncaught exception');
})


server.start(() => {
    console.log('Server running at:', server.info.uri);
});

