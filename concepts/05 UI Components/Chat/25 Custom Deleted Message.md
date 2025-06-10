To change the "This message was deleted" text in deleted messages, create a [messageTemplate](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate). The following code snippet shows how to replace the default text with a "trash" icon:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const chat = $("#chat").dxChat({
            messageTemplate: (data, $container) => {
                if (data.message.isDeleted) {
                    return `<i class="dx-icon-trash"></i>`;
                }
                return data.message.text;
            },
        }).dxChat('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat 
        messageTemplate="message"
    >
        <div *dxTemplate="let data of 'message'">
            <i *ngIf="data.message.isDeleted" class="dx-icon-trash"></i>
            <span *ngIf="!data.message.isDeleted">{{data.message.text}}</span>
        </div>
    </dx-chat>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat message-template="message">
        <template #message="{ data }">
            <i v-if="data.message.isDeleted" class="dx-icon-trash"></i>
            <span v-if="!data.message.isDeleted">{{ data.message.text }}</span>
        </template>
    </DxChat>
    </template>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Chat from "devextreme-react/chat";

    const messageRender = (data) => {
        if (data.message.isDeleted) {
            return <i class="dx-icon-trash"></i>;
        }
        return <div>{data.message.text}</div>;
    }

    const App = () => {
        return (
            <Chat
                messageRender={messageRender}
            />
        );
    };

---
