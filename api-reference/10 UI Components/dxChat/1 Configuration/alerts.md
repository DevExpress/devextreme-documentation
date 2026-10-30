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
        [alerts]="alerts()"
        (onMessageEntered)="onMessageEntered()"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    import { Component, signal } from '@angular/core';
    import { DxChatModule, type DxChatTypes } from 'devextreme-angular/ui/chat';

    @Component({
        // ...
        standalone: true,
        imports: [DxChatModule]
    })
    export class AppComponent {
        alerts = signal<DxChatTypes.Alert[]>([]);
        newAlert: DxChatTypes.Alert = {
            id: 1,
            message: 'You have been disconnected'
        };

        onMessageEntered() {
            setTimeout(() => {
                this.alerts.update((alerts) => [...alerts, this.newAlert]);
            }, 1000);
        }
    }

#include ng-zoneless-async-note

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