Configure a Chat to send user messages to your backend endpoint and render responses.

[important] Azure OpenAI credentials must remain on the server. Do not call Azure OpenAI directly from client code.

Use [onMessageEntered](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered) to send a message to your API and push the response to the data store:

    <!-- tab: TypeScript -->
    async function onMessageEntered(e) {
        const userMessage = e.message;
        dataSource.store().push([{ type: "insert", data: userMessage }]);

        const response = await fetch("http://localhost:5005/api/Chat/GetAIResponse", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userMessage)
        });

        const assistantMessage = await response.json();
        dataSource.store().push([{ type: "insert", data: assistantMessage }]);
    }

Review this demo for Chat UI integration. The demo uses a DevExpress-hosted API:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/"
}