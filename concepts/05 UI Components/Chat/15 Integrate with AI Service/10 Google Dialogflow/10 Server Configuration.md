Google recommends to implement a server layer when you use Dialogflow to ensure the security and reliability of the application. You cannot use this library on the client exclusively since Google's CORS policy blocks the necessary requests. 

To create a server layer, perform the following steps:

1. Create a `server` folder. It should include your `key.json`, `server.js`, and `dialogflow.js` files (see the configuration in the [GitHub example repository](https://github.com/DevExpress-Examples/devextreme-chat-google-dialogflow/tree/25.1.2%2B/server)).

2. Create `package.json`:

        <!-- tab: package.json -->
        {
            "name": "dx-server",
            "type": "module",
            "scripts": {
                "start:server": "node server.js"
            },
            "dependencies": {
                "browser-sync": "^3.0.2",
                "path": "^0.12.7"
            }
        }

3. Install the necessary dependencies:

        npm i @google-cloud/dialogflow
        npm i express body-parser

4. Use the following command to deploy the server:

        npm run start:server

[note]

Ensure that the key path matches the passed parameter in `dialogflow.js`: 
 
    <!-- tab: dialogflow.js -->
    const keyFilePath = path.join(__dirname, 'key.json');

[/note]