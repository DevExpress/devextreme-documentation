To clear messages in DevExtreme Chat, follow these steps:

1. Get the component [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance and call **store**.[push()](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges) to clear messages in the UI.
2. Empty the dxChat's data source array.
3. If you use a separate array to store AI messages, empty this array.

<nbsp>

    <!-- tab: JavaScript -->
    function clearChat(chatInstance) {
        const removals = chatInstance.getDataSource().items().map((item) => ({ type: 'remove', key: item.id }));
        chatInstance.getDataSource().store().push(removals);

        chatMessages.length = 0;
        aiMessages.length = 0;
    }

This tutorial uses the same approach as the following technical demo to store messages:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/",
    name: "AI and Chatbot Integration"
}

Call `clearChat()` in the [onClick](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick) handler of a DevExtreme [Button](/Documentation/Guide/UI_Components/Button/Overview/) to clear messages. You can initialize this button in the [disabled](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#disabled) state and enable the component in Chat's [onMessageEntered](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered) handler:

    <!-- tab: JavaScript -->
    function handleClearChatButtonClick() {
        e.component.option('disabled', true);
        clearChat(chatInstance);
    }

    function handleMessageEntered() {
        clearChatButtonInstance.option('disabled', false);
    }

If a user clicks the **Clear Chat** button while an AI request is in progress, you must abort this request to ensure the button works as expected. This tutorial passes an [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to [AzureOpenAI](https://developers.openai.com/api/reference/typescript#microsoft-azure-openai) and calls [abort()](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) in the button's **onClick** handler:

    <!-- tab: JavaScript -->
    let controller = new AbortController();

    async function getAIResponse() {
        const params = {
            messages,
            model,
            // ...
        };

        const signalObj = {
            signal: controller.signal,
        };

        const response = await chatService.chat.completions.create(params, signalObj);

        return response.choices[0]?.message?.content;
    }

    function handleClearChatButtonClick() {
        // ...

        controller.abort();
    }

Assign a new **AbortController** to the `controller` variable to reset the controller in **onMessageEntered**:

    function handleMessageEntered() {
        // ...

        controller = new AbortController();
    }
