#### Customizing Parameters

The code includes the following customizable parameters:

    const deployment = 'YOUR_MODEL_NAME'; 
    const apiVersion = 'YOUR_API_VERSION'; 
    const endpoint = 'YOUR_ENDPOINT'; 
    const apiKey = 'YOUR_API_KEY'; 

- `deployment`: Model name.
- `apiVersion`: API version. Ensure compatibility with your model.
- `endpoint`: Your unique URI from **Keys and Endpoint** in the Azure OpenAI resource, typically in the `https://<your-resource-name>.openai.azure.com/` format, or configured as a proxy if you set up your own access point.
- `apiKey`: Secret key for accessing the Azure OpenAI API.

#### Azure OpenAI Initialization

The code creates an Azure OpenAI instance:

    const chatService = new AzureOpenAI({ 
        dangerouslyAllowBrowser: true, 
        deployment, 
        endpoint, 
        apiVersion, 
        apiKey, 
    }); 

Setting `dangerouslyAllowBrowser: true` lets the browser send requests directly to the Azure OpenAI API. Use this with caution since the key will be visible in the client code. For production, route requests to Azure OpenAI through your backend.

#### Sending and Receiving Messages

The `processMessageSending` function is called when a user sends a new message. The main purpose of this function is the following: 

- To call Azure OpenAI Chat Completion API for a response based on the dialog history.
- To add the received reply to the message list and display it in the chat.

The `getAIResponse` function handles the primary interaction with the API:

    async function getAIResponse(messages) { 
        const params = { 
            messages, 
            model: ‘your_model_from_deployment’, 
            max_tokens: 1000, 
            temperature: 0.7,  
        }; 

        const response = await chatService.chat.completions.create(params); 
        const data = { choices: response.choices }; 

        return data.choices[0].message?.content; 
    }; 

Key parameters:

- `messages`: The chat history (`role: 'user'` for the user, `role: 'assistant'` for the assistant). 
- `model`: The model in use.
- `max_tokens` and `temperature` control the length and the creativity of the answer. 

The function returns the assistant’s new response text.

`DevExpress.data.CustomStore` and `DevExpress.data.DataSource` manage and render message states. The functions `renderAssistantMessage` and `updateLastMessage` insert or update messages in the interface, and adjust button states (copy text, regenerate response).

The "Regenerate" button allows you to request a new response from the assistant for the last message. This replaces the previous unsuccessful response. The `regenerate` function calls `getAIResponse` again. 