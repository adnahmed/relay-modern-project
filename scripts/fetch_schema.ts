import spawnCommand from 'spawn-command'
const child = spawnCommand(`gq ${process.env.SCHEMA_ENDPOINT} -H 'Content-Type: application/json' --introspect > schema.graphql`)

child.stdout.on('data', function (data) {
    console.log('data', data.toString());
});

child.on('exit', function (exitCode) {
    console.log('exit', exitCode);
});

child.stderr.on('data', function (error) {
    console.error('error', error.message)
});