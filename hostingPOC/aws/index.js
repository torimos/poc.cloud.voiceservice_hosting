exports.handler =  async function(event, context) {
  console.log("Body: \n" + JSON.stringify(event));
  var name = event.request.intent != null ? event.request.intent.name : "unk";
  return {
    "version": "1.0",
    "response": {
      "outputSpeech": {
        "type": "SSML",
        "ssml": `<speak>Welcome to Sample. <amazon:effect name="whispered">Intent name is ${name}</amazon:effect></speak>`
      },
      "reprompt": {
        "outputSpeech": {
          "type": "SSML",
          "ssml": "<speak>I didn't catch that. What can I help you with?</speak>"
        }
      },
      "shouldEndSession": false
    },
    "userAgent": "ask-node/2.3.0 Node/v8.10.0",
    "sessionAttributes": {}
  };
  return {
    "expectUserResponse": true,
    "expectedInputs": [
      {
        "inputPrompt": {
          "richInitialPrompt": {
            "items": [
              {
                "simpleResponse": {
                  "textToSpeech": "Howdy! ",
                  "displayText": "Howdy! 12345"
                }
              }
            ]
          }
        },
        "possibleIntents": [
          {
            "intent": "actions.intent.TEXT"
          }
        ]
      }
    ]
  };
}