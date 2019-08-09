const express = require('express');
const {createHandler} = require('azure-function-express');
const {actionssdk, SignIn} = require('actions-on-google');

const app = actionssdk({
    debug: true,
    clientId: "abcdefg12345r678"
});
app.intent('actions.intent.MAIN', (conv) => {
    conv.ask(`Howdy!`);
    conv.ask(new SignIn('To get your account details'));
});
app.intent('actions.intent.TEXT', (conv,input) => {
    if (input == "test")
        conv.ask(`Uups. I didn't prepared`);
    else
        conv.ask(`I don't understant: ${input}`);
});
app.intent('actions.intent.SIGN_IN', (conv, params, signin) => {
    conv.ask(`Signed in result: ${JSON.stringify(signin)}!`);
    conv.ask(`Got your data: ${JSON.stringify(conv.user)}!`);
});

const expressApp = express();
expressApp.post('/api/webhook', (request,response)=>{ 
    request.context.log('Request body: ' + JSON.stringify(request.body));
    return app(request,response); 
});

module.exports = createHandler(expressApp);