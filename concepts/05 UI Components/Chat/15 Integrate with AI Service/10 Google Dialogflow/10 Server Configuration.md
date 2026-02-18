Dialogflow requires a server layer. You cannot use this library on the client exclusively since Google's CORS policy blocks necessary requests. 

To create a server layer, perform the following steps:

1. Create a `server` folder. It should include your `key.json`, `server.js`, and `dialogflow.js` files (see the configuration in the [GitHub example repository](https://github.com/DevExpress-Examples/devextreme-chat-google-dialogflow/tree/25.1.2%2B/server)).

2. [Create `package.json`](https://docs.npmjs.com/creating-a-package-json-file) and add the following script:

        <!-- tab: package.json -->
        {
            // ...
            "scripts": {
                "start:server": "node server.js"
            }
        }

3. Install the following dependencies:

        npm i @google-cloud/dialogflow
        npm i path browser-sync body-parser express

4. Use the following command to deploy the server:

        npm run start:server

[note]

Ensure that the key path matches the passed parameter in `dialogflow.js`: 
 
    <!-- tab: dialogflow.js -->
    const keyFilePath = path.join(__dirname, 'key.json');

[/note]