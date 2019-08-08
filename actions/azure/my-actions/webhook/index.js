const express = require('express');
const {createHandler} = require('azure-function-express');
const {actionssdk} = require('actions-on-google');

const app = actionssdk({debug: true});
app.intent('actions.intent.MAIN', (conv) => {
    conv.ask(`Howdy!`);
});
app.intent('actions.intent.TEXT', (conv,input) => {
    if (input == "test")
        conv.ask(`Uups. I didn't prepared`);
    else
        conv.ask(`I don't understant: ${input}`);
});

const expressApp = express();
expressApp.post('/api/webhook', (request,response)=>{ 
    request.context.log('Request body: ' + JSON.stringify(request.body));
    return app(request,response); 
});

module.exports = createHandler(expressApp);