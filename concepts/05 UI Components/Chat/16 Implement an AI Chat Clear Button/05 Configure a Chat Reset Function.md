To clear messages in DevExtreme Chat, follow these steps:

1. Get the component [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance and call **store**.[push()](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges') to clear messages in the UI.
2. Empty the dxChat's data source array.
3. If you use a separate array to store AI messages, empty this array.

<nbsp>

    <!-- tab: JavaScript -->
    function clearChat(chatInstance) {
        const removals = chatInstance.getDataSource().items().map((item) => ({ type: 'remove', key: item.id }));
        chatInstance.getDataSource().store().push(removals);

        chatMessages.length = 0;
        aiMessages.length = 0;

        // Clear typingUsers indicators and alerts if any are displayed
        chatInstance.option({ alerts: [], typingUsers: [] });
    }

This tutorial uses the same approach as the following technical demo to store messages:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/",
    name: "AI and Chatbot Integration"
}

Call `clearChat()` in the [onClick](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') handler of a DevExtreme [Button](/concepts/05%20UI%20Components/Button/02%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/Button/Overview/') to clear messages. You can initialize this button in the [disabled](/api-reference/10%20UI%20Components/Widget/1%20Configuration/disabled.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#disabled') state and enable the button in Chat's [onMessageEntered](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/onMessageEntered.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered') handler:

    <!-- tab: JavaScript -->
    function handleClearChatButtonClick(e) {
        e.component.option('disabled', true);
        clearChat(chatInstance);
    }

    function handleMessageEntered() {
        clearChatButtonInstance.option('disabled', false);
    }

If a user clicks the **Clear Chat** button while an AI request is in progress, you must abort the request to ensure the button works as expected. This tutorial passes an `AbortSignal` from an [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to [AzureOpenAI](https://developers.openai.com/api/reference/typescript#microsoft-azure-openai) and calls [abort()](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) in the button's **onClick** handler:

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

Assign a new **AbortController** to the `controller` variable in **onMessageEntered** to allow subsequent requests:

    function handleMessageEntered() {
        // ...

        controller = new AbortController();
    }
