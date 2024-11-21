---
id: dxChat.Options.alerts
type: Array<Alert>
default: []
---
---
##### shortDescription
A list of available alerts.

---
The code snippet below produces the following result:

![The alert message in the Chat component](/images/Chat/alerts.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#chat').dxChat({
            onMessageEntered: (e) => {
                setTimeout(() => {
                    e.component.option("alerts", alerts);
                }, 1000);
            }
        });
    });

    const alerts = [
        {
            id: 1,
            message: "You have been disconnected"
        }
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat 
        [alerts]="alerts"
        (onMessageEntered)="onMessageEntered($event)"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        alerts: DxChatTypes.Alert[] = [];
        newAlert: DxChatTypes.Alert =
        {
            id: 1,
            message: "You have been disconnected"
        };
        onMessageEntered() {
            setTimeout(() => {
                this.alerts = [...this.alerts, newAlert];
            }, 1000);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat
        :alerts="alerts"
        @message-entered="onMessageEntered"
    />
    </template>

    <script setup>
    import DxChat from "devextreme-vue/chat";
    const alerts = [];
    const newAlert =
    {
        id: 1,
        message: "You have been disconnected"
    };
    const onMessageEntered = () => {
        setTimeout(() => {
            this.alerts = [...this.alerts, newAlert];
        }, 1000);
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from "react";
    import Chat from "devextreme-react/chat";

    const newAlert =
    {
        id: 1,
        message: "You have been disconnected"
    };

    const App = () => {
        const [alerts, setAlerts] = useState();
        const onMessageEntered = () => {
            setTimeout(() => {
                setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
            }, 1000);
        };
        return (
            <Chat
                onMessageEntered={onMessageEntered}
                alerts={alerts}
            />
        );
    };

---