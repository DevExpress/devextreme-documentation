#### Customizing Parameters

The `dialogflow.js` includes the following customizable parameters:

    const keyFilePath = path.join(__dirname, '../your_json_key.json');
    const projectId = 'your_project_id'; 

- `keyFilePath`: Path to your service account key. 
- `projectId`: Identifier of your GCP project in which the Dialogflow agent is created. 

#### Configure Requests to Dialogflow

The `dialogflow.js` file contains the `detectIntent(message, sessionId)` function:

    async function detectIntent(message, sessionId) { 
        const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId); 

        const params = { 
            session: sessionPath, 
            queryInput: { 
                text: { 
                    text: message, 
                    languageCode: 'en', 
                }, 
            }, 
        }; 

        const responses = await sessionClient.detectIntent(params); 
        const result = responses[0]?.queryResult; 

        if (!result || !result.fulfillmentText) { 
            throw new Error('No response from Dialogflow'); 
        } 

        return result.fulfillmentText; 
    } 

The function performs the following steps:

- Forms a request to Dialogflow API with the received message and `sessionId`.
- Sets the request language to `'en'`.
- Generates `fulfillmentText` as the agent response.

`sessionId` saves the dialog context. In this example (in `index.html`), a random string serves this purpose.

#### Using Server

With Dialogflow, use a server layer to ensure application security and reliability. You cannot use this library only on the client due to Google's CORS policy blocking all requests.

To send a POST request to `/webhook`, the server calls `detectIntent` and returns the agent's response:

    <!-- tab: server.js -->
    app.post('/webhook', async (request, response) => { 
        const { message, sessionId } = request.body; 
        if (!message || !sessionId) { 
            return response.status(400).json({ error: 'Message and sessionId are required' }); 
        } 

        try { 
            const result = await detectIntent(message, sessionId); 
            response.json({ response: result }); 
        } catch (error) { 
            console.error(error); 
            response.status(500).send('Error processing request'); 
        } 
    });

#### Sending and Receiving Messages

The `processMessageSending` function is called when a user sends a new message. The main purpose of this function is the following: 

- To send a request for the server to get a response from Dialogflow.
- To add the received reply to the message list and display it in the chat.

The `getAIResponse` function handles the primary interaction with the API:

    async function getAIResponse(messages) { 
        const response = await fetch(`${YOUR_SERVER_URI}/webhook`, { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({ message: text, sessionId }), 
        }); 

        const data = await response.json(); 

        return data.response; 
    }; 

The user message and `sessionId` are passed in the body of the request. The function returns the assistant’s new response text.

`DevExpress.data.CustomStore` and `DevExpress.data.DataSource` manage and render message states. The functions `renderAssistantMessage` and `updateLastMessage` insert or update messages in the interface, and adjust button states (copy text, regenerate response).

The "Regenerate" button allows you to request a new response from the assistant for the last message. This replaces the previous unsuccessful response. The `regenerate` function calls `getAIResponse` again. 