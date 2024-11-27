Use [onMessageEntered](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered) to perform message post processing (like sending the message to the server for storage). This tutorial simulates sending a message to a backend:

1. The ChatBack user is added to the [typingUsers](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers) array to show them typing.
2. After one second, the **typingUsers** array is emptied, and Chat displays the answer message.
3. After 3 seconds, an [alert](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#alerts) is displayed, and Chat is disabled. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        function sendToBackend() {
            
            // Here go the sending to backend settings

            chat.option("typingUsers", [secondUser]);
            setTimeout(() => {
                chat.option("typingUsers", []);
                chat.renderMessage({
                    text: "Thanks for helping us improve!",
                    author: secondUser,
                    timestamp: Date.now()
                });
            }, 1000);
            setTimeout(() => {
                chat.option("alerts", [{
                    id: 1,
                    message: "You have been disconnected"
                }]);
                chat.option("disabled", true);
            }, 3000);
        }
        $("#chat").dxChat({ 
            // ...
            onMessageEntered: ({ component, message }) => {
                //...
                sendToBackend();
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ...
        [alerts]="alerts"
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
            this.sendToBackend();
        }

        sendToBackend() {

            // Here go the sending to backend settings

            this.typingUsers = [this.secondUser];

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
                }, 1000);

            setTimeout(() => {
            this.alerts = [
                ...this.alerts,
                {
                    id: 1,
                    message: "You have been disconnected",
                },
            ];
            this.disabled = true;
            }, 3000);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat ...
            :alerts="alerts"
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
        sendToBackend();
    };

    const sendToBackend = () => {

        // Here go the sending to backend settings

        typingUsers.value = [secondUser];
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
        }, 1000);
        setTimeout(() => {
            alerts.value = [
                ...alerts.value,
                {
                    id: 1,
                    message: "You have been disconnected",
                },
            ];
            disabled.value = true;
        }, 3000);
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
            sendToBackend();
        }, []);

        const sendToBackend = () => {
        
        // Here go the sending to backend settings

        setTypingUsers([secondUser]);
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
        }, 1000);
        setTimeout(() => {
            setAlerts([
                {
                    id: 1,
                    message: "You have been disconnected",
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