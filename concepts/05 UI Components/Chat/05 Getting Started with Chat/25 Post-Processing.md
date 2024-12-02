Use [onMessageEntered](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/onMessageEntered.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered') to perform message post processing (like sending the message to the server for storage). This tutorial simulates sending a message to a backend:

1. The Feedback Bot user is added to the [typingUsers](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/typingUsers.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers') array to show them typing.
2. After one second, the **typingUsers** array is emptied, and Chat displays the answer message.
3. After that, an [alert](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/alerts.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#alerts') is displayed, and Chat is disabled. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        function sendToBackend() {
            setTimeout(() => {
                chat.option("typingUsers", []);
                chat.renderMessage({
                    text: "Thanks for helping us improve!",
                    author: secondUser,
                    timestamp: Date.now()
                });
                chat.option("alerts", [{
                    id: 1,
                    message: "Session expired"
                }]);
                chat.option("disabled", true);
            }, 1000);
        }
        $("#chat").dxChat({ 
            // ...
            onMessageEntered: ({ component, message }) => {
                //...
                chat.option("typingUsers", [secondUser]);
                sendToBackend();
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ...
        [(alerts)]="alerts"
        [(disabled)]="disabled"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        messages: DxChatTypes.Message[] = [...];
        alerts: DxChatTypes.Alert[] = [];
        disabled: boolean = false;

        onMessageEntered({ message }) {
            // ...
            this.typingUsers = [this.secondUser];
            this.sendToBackend();
        }

        sendToBackend() {
            setTimeout(() => {
                this.typingUsers = [];
                this.messages = [
                    ...this.messages,
                    {
                        text: "Thanks for helping us improve!",
                        author: this.secondUser,
                        timestamp: Date.now(),
                    },
                ];
                this.alerts = [
                    ...this.alerts,
                    {
                        id: 1,
                        message: "Session expired",
                    },
                ];
                this.disabled = true;
            }, 1000);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat ...
            v-model:alerts="alerts"
            v-model:disabled="disabled"
        />
    </template>

    <script setup>
    import { ref } from "vue";
    // ...

    const messages = ref([]);
    const alerts = ref([]);
    const disabled = ref(false);

    const onMessageEntered = ({ message }) => {
        // ...
        typingUsers.value = [secondUser];
        sendToBackend();
    };

    const sendToBackend = () => {
        setTimeout(() => {
            typingUsers.value = [];
            messages.value = [
                ...messages.value,
                {
                    text: "Thanks for helping us improve!",
                    author: secondUser,
                    timestamp: Date.now(),
                },
            ];
            alerts.value = [
                ...alerts.value,
                {
                    id: 1,
                    message: "Session expired",
                },
            ];
            disabled.value = true;
        }, 1000);
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from "react";
    function App() {
        const [messages, setMessages] = useState([]);
        const [alerts, setAlerts] = useState([]);
        const [disabled, setDisabled] = useState(false);

        const onMessageEntered = useCallback(({ message }) => {
            // ...
            setTypingUsers([secondUser]);
            sendToBackend();
        }, []);

        const sendToBackend = () => {
            setTimeout(() => {
                setTypingUsers([]);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        text: "Thanks for helping us improve!",
                        author: secondUser,
                        timestamp: Date.now(),
                    },
                ]);
                setAlerts([
                    {
                        id: 1,
                        message: "Session expired",
                    },
                ]);
                setDisabled(true);
            }, 3000);
        };

        return (
            <Chat ...
                alerts={alerts}
                disabled={disabled}
            />
        );
    }

    export default App;

---