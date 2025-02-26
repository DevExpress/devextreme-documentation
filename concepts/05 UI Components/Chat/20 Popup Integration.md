A common way to add a chat assistant to your website is by embedding it in a modal at the bottom right corner. Follow these steps:

- Place DevExtreme [Floating Action Button](/concepts/05%20UI%20Components/Floating%20Action%20Button/00%20Getting%20Started%20with%20Floating%20Action%20Button '/Documentation/Guide/UI_Components/Floating_Action_Button/Getting_Started_with_Floating_Action_Button/') at the bottom right of the window. Users can click it to open the popup.
- Position our [Popup](/concepts/05%20UI%20Components/Popup/02%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/Popup/Overview/') at the bottom right (or another preferred location).
- Add the Chat component for the virtual assistant.

The following code snippet demonstrates this scenario. Check the `CSS` tab for instructions on how to integrate Popup and Chat.

---
##### jQuery

    <!-- tab: index.html -->
    <div id="action"></div>
    <div id="popup"></div>

    <!-- tab: index.js -->
    const assistant = {
        id: "02",
        name: "Assistant"
    };

    const messages = [{
        id: 1,
        timestamp: new Date(),
        author: assistant,
        text: "Hello! How can I help you?"
    }];

    $(() => {
        $("#action").dxSpeedDialAction({
            label: "Chat",
            icon: "send",
            onClick() {
                popup.show();
            }
        });

        const popup = $("#popup").dxPopup({
            position: "right bottom",
            width: 400,
            height: 650,
            shading: false,
            dragEnabled: false,
            contentTemplate: function (contentElement) {
                contentElement.append(
                $("<div />")
                    .attr("id", "chat")
                    .dxChat({
                        width: 400,
                        height: 600,
                        onMessageEntered: (e) => {
                            e.component.renderMessage(e.message);
                        },
                        items: messages
                    })
                );
            }
        }).dxPopup("instance");
    });

    <!-- tab: index.css -->
    #chat {
        border: none;
    }

    .dx-popup-content-scrollable {
        padding: 0;
        overflow: hidden;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-speed-dial-action
        label="Chat"
        icon="send"
        (onClick)="showPopup()"
    >
    </dx-speed-dial-action>
    <dx-popup
        [(visible)]="popupVisible"
        [width]="400"
        [height]="650"
        [shading]="false"
        [dragEnabled]="false"
        position="right bottom"
    >
        <dx-chat #chat
            [width]="400"
            [height]="600"
            [items]="messages"
            (onMessageEntered)="onMessageEntered($event)"
        >
        </dx-chat>
    </dx-popup>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxChatModule, DxSpeedDialActionModule, DxPopupModule } from 'devextreme-angular';
    import { DxChatTypes } from "devextreme-angular/ui/chat";

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxChatModule, DxSpeedDialActionModule, DxPopupModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })

    export class AppComponent {
        assistant: DxChatTypes.User = {
            id: '02',
            name: "Assistant"
        };

        messages: DxChatTypes.Message[] = [{
            id: 1,
            timestamp: new Date(),
            author: this.assistant,
            text: "Hello! How can I help you?"
        }];

        popupVisible = false;

        showPopup() {
            this.popupVisible = true;
        }

        onMessageEntered(e: DxChatTypes.MessageEnteredEvent) {
            this.messages = [...this.messages, e.message];
        }
    }

    <!-- tab: app.component.css -->
    #chat {
        border: none;
    }

    .dx-popup-content-scrollable {
        padding: 0;
        overflow: hidden;
    }

##### Vue

    <!-- App.vue -->
    <template>
    <DxSpeedDialAction 
        label="Chat"
        icon="send"
        @click="showPopup"
    />
    <DxPopup
        v-model:visible="popupVisible"
        :width="400"
        :height="650"
        :shading="false"
        :drag-enabled="false"
        position="right bottom"
    >
        <DxChat #chat
            :width="400"
            :height="600"
            :items="messages"
            @message-entered="onMessageEntered"
        >
        </DxChat>
    </DxPopup>
    </template>

    <script setup lang="ts">
    import { DxChat, DxSpeedDialAction, DxPopup } from 'devextreme-vue';
    import type { DxChatTypes } from 'devextreme-vue/chat';
    import { ref, type Ref } from 'vue';

    const assistant: DxChatTypes.User = {
        id: "02",
        name: "Assistant",
    };
    const messages: Ref<DxChatTypes.Message[]> = ref([{
        id: 1,
        timestamp: new Date(),
        author: assistant,
        text: "Hello! How can I help you?"
    }]);
    const popupVisible = ref(false);
    const onMessageEntered = (e: DxChatTypes.MessageEnteredEvent) => {
        messages.value = [...messages.value, e.message];
    }
    const showPopup = () => {
        popupVisible.value = true;
    }
    </script>

    <style>
    #chat {
        border: none;
    }
    .dx-popup-content-scrollable {
        padding: 0;
        overflow: hidden;
    }
    </style>

##### React

    <!-- tab: App.tsx -->
    import { Chat, SpeedDialAction, Popup } from 'devextreme-react';
    import { ChatTypes } from 'devextreme-react/chat';
    import 'devextreme/dist/css/dx.light.css'
    import { useCallback, useState } from 'react';
    import './App.css';

    const assistant = {
        id: "02",
        name: "Assistant",
    };
    
    export default function App() {
        const [popupVisible, setPopupVisible] = useState(false);
        const [messages, setMessages] = useState<ChatTypes.Message[]>([{
            id: 1,
            timestamp: new Date(),
            author: assistant,
            text: "Hello! How can I help you?"
        }]);
        const onMessageEntered = useCallback((e: ChatTypes.MessageEnteredEvent) => {
            setMessages((prevMessages) => [...prevMessages, e.message]);
        }, []);
        const showPopup = () => {
            setPopupVisible(true);
        }
        const hidePopup = () => {
            setPopupVisible(false);
        }
        return(
            <>
                <SpeedDialAction 
                    label="Chat"
                    icon="send"
                    onClick={showPopup}
                />
                <Popup
                    visible={popupVisible}
                    width={400}
                    height={650}
                    shading={false}
                    dragEnabled={false}
                    onHiding={hidePopup}
                    position="right bottom"
                >
                    <Chat
                        id="chat"
                        width={400}
                        height={600}
                        items={messages}
                        onMessageEntered={onMessageEntered} 
                    />
                </Popup>
            </>
        );
    }

    <!-- tab: App.css -->
    #chat {
        border: none;
    }

    .dx-popup-content-scrollable {
        padding: 0;
        overflow: hidden;
    }

---