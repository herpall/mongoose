const app = require('./src/app');

async function main (){
        await app.listen(app.get('port'));
        console.log('Listen server port', app.get('port'))
}

main();