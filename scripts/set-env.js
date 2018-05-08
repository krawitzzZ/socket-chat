const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.env || 'development';

const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = genrateEnvConfig();

writeFile(targetPath, envConfigFile, function(err) {
    if (err) {
        console.error(err);
    }

    console.log(`Output generated at ${targetPath}`);
});

function genrateEnvConfig() {
    const isProd = environment === 'production';
    const googleAPIKey = `'${process.env.GOOGLE_MAPS_API_KEY}'`;
    const socketUrl = `'${process.env.SOCKET_URL}'` || 'https://demo-chat-server.on.ag/';

    return `
export const environment = {
    production: ${isProd},
    socketUrl: ${socketUrl},
    googleAPIKey: ${googleAPIKey},
};
`;
}
