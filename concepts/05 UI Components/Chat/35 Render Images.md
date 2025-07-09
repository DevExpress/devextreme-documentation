To render an image in a Chat, set the message [type](/Documentation/ApiReference/UI_Components/dxChat/Types/Message/#type) to "image" and specify the [src](/Documentation/ApiReference/UI_Components/dxChat/Types/Message/#src) field with the image URL. In the following example, AI sends a message with the "imageResponse" type, which is then converted into an image in Chat.

[note] Chat displays either images or text in a single message. Specify [messageTemplate](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate) to display custom messages.

---
##### jQuery

	<!-- tab: index.js -->
    const chat = $("#chatContainer").dxChat("instance");
	const handleAIResponse() {
		if (aiResponse.type === "imageResponse") {
			chat.renderMessage({
				type: "image",
				src: aiResponse.imageUrl,
				author: "bot"
			});
		}
	}

##### Angular

	<!-- tab: app.component.ts -->
	export class AppComponent {
		handleAIResponse() {
			if (aiResponse.type === "imageResponse") {
				const imageMessage = ({
					type: "image",
					src: aiResponse.imageUrl,
					author: "bot"
				});
			}
			this.messages = [...this.messages, imageMessage];
		}
	}

##### Vue

	<!-- tab: App.vue -->
	function handleAIResponse() {
		if (aiResponse.type === "imageResponse") {
			const imageMessage = ({
				type: "image",
				src: aiResponse.imageUrl,
				author: "bot"
			});
		}
		messages.value = [...messages.value, imageMessage];
	}

##### React

	<!-- tab: App.tsx -->
	export default function App() {
		const handleAIResponse() => {
			if (aiResponse.type === "imageResponse") {
				const imageMessage = ({
					type: "image",
					src: aiResponse.imageUrl,
					author: "bot"
				});
			}
			setMessages((prevMessages) => [...prevMessages, imageMessage]);
		};

	}

---