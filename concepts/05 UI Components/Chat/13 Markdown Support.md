You often need to convert Chat messages from Markdown to HTML since Chat supports HTML. This is useful when using OpenAI or supporting Markdown in user inputs.

To support Markdown, use a third-party library for conversion. The [unified](https://unifiedjs.com/explore/package/unified/) + [remark](https://unifiedjs.com/explore/package/remark/) + [rehype](https://unifiedjs.com/explore/package/rehype/) stack is a good option, as shown in our AI integration demo:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/"
}

This powerful stack supports various extensions and allows control over different conversion stages. For a simpler, lightweight solution, you can use libraries such as [micromark](https://github.com/micromark/micromark).

Regardless of the library choice, convert the message text within the [messageTemplate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/messageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate') property:

---
##### jQuery

    <!-- tab: index.html -->
    <script type="module">
        import {
            micromark
        } from 'https://esm.sh/micromark@3?bundle';
        window.micromark = micromark;
    </script>

    <div id="chat"></div>

    <!-- tab: index.js -->
    $(() => {
        const chat = $("#chat")
            .dxChat({
                onMessageEntered: ({ component, message }) => {
                    component.renderMessage(message);
                },
                messageTemplate: (e, element) => {
                    const htmlText = $(micromark(e.message.text)).html();
                    $("<div>").html(htmlText).appendTo(element);
                }
            })
        .dxChat("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat
        [items]="messages"
        (onMessageEntered)="onMessageEntered($event)"
        messageTemplate="messageTemplate"
    >
        <div *dxTemplate="let data of 'messageTemplate'">
            <div [innerHTML]="convertToHtml(data.message.text)"></div>
        </div>
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    import { micromark } from 'micromark';
    // ...
    export class AppComponent {
        messages: DxChatTypes.Message[] = [];

        onMessageEntered(e: DxChatTypes.MessageEnteredEvent) {
            if (e.message) {
                this.messages = [...this.messages, e.message];
            }
        }
        convertToHtml(text: string) {
            let html = micromark(text);
            return html.replace(/^<p>/, '').replace(/<\/p>$/, '');
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat
        :items="messages"
        @message-entered="onMessageEntered"
        message-template="message"
    >
        <template #message="{ data }">
            <div v-html="convertToHtml(data.message.text)"></div>
        </template>
    </DxChat>
    </template>

    <script setup lang="ts">
    import { DxChat } from 'devextreme-vue';
    import type { DxChatTypes } from 'devextreme-vue/cjs/chat';
    import { micromark } from 'micromark';
    import { ref, type Ref } from 'vue';

    const messages: Ref<DxChatTypes.Message[]> = ref([]);

    const onMessageEntered = (e: DxChatTypes.MessageEnteredEvent) => {
        if (e.message) {
            messages.value = [...messages.value, e.message];
        }
    }
    const convertToHtml = (text: string) => {
        let html = micromark(text);
        return html.replace(/^<p>/, '').replace(/<\/p>$/, '');
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Chat } from 'devextreme-react';
    import { ChatTypes } from 'devextreme-react/cjs/chat';
    import 'devextreme/dist/css/dx.light.css'
    import { useCallback, useState } from 'react';
    import HTMLReactParser from 'html-react-parser';
    import { micromark } from 'micromark';

    const convertToHtml = (text: string) => {
        let html = micromark(text);
        return html.replace(/^<p>/, '').replace(/<\/p>$/, '');
    }
    const messageRender = (data: ChatTypes.MessageTemplateData) => {
        return (HTMLReactParser(convertToHtml(data.message!.text!)));
    }

    export default function App() {
        const [messages, setMessages] = useState<ChatTypes.Message[]>([]);
        const onMessageEntered = useCallback((e: ChatTypes.MessageEnteredEvent) => {
            setMessages((prevMessages) => [...prevMessages, e.message!]);
        }, []);
        return(
            <Chat 
                items={messages}
                onMessageEntered={onMessageEntered}
                messageRender={messageRender}
            />
        );
    }

---