[note]

Review this demo for **client-side** Azure OpenAI integration:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/"
}

[/note]

Use [onMessageEntered](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered) to sends user messages to the backend and update the Chat UI with assistant responses. Disable [reloadOnChange](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#reloadOnChange) to allow the handler to [push updates directly to the store](/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services) without reloading the entire data source.

For additional configuration options, refer to the [Additional Configuration](/concepts/05%20UI%20Components/Chat/15%20Integrate%20with%20AI%20Service/05%20OpenAI/20%20Additional%20Configuration.md '/Documentation/Guide/UI_Components/Chat/Integrate_with_AI_Service/#OpenAI/Additional_Configuration') help topic.