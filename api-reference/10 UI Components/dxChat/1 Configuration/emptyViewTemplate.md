---
id: dxChat.Options.emptyViewTemplate
type: template | null
default: null
---
---
##### shortDescription
Specifies a custom template for the Chat message container when the component displays no messages.

##### param(data): Object
Empty view data.

##### field(data.component): dxChat
The Chat instance.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "empty view" }

##### return: String | Element | jQuery
A template name or container.

##### field(data.texts): Object
<!-- Description goes here -->

---
When the Chat data source contains no messages, the component displays an empty chat view. To specify custom empty view markup, implement this property. To retain localized empty view texts, integrate the `data.texts.message` and `data.texts.prompt` properties in your markup:

---

##### jQuery

    <!-- tab: index.js -->
    $('#chat-container').dxChat({
        emptyViewTemplate(data) {
            return $('<div>').append(
                $('<div>').addClass('empty-view-message').text(data.texts.message),
                $('<div>').addClass('empty-view-prompt').text(data.texts.prompt),
            )
        },
    })

##### Angular

    <!-- tab: app.component.html -->
     <dx-chat ...
        emptyViewTemplate="emptyViewTemplate"
    >
        <div *dxTemplate="let data of 'emptyViewTemplate'">
            <div>{{ data.texts.message }}</div>
            <div>{{ data.texts.prompt }}</div>
        </div>
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatModule, DxTemplateModule } from 'devextreme-angular'

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { DxChat } from 'devextreme-vue/chat';

    </script>

    <template>
        <DxChat ...
            empty-view-template="empty-view-template"
        >
            <template #empty-view-template="{ data }">
                <div>{{ data.texts.message }}</div>
                <div>{{ data.texts.prompt }}</div>
            </template>
        </DxChat>
    </template>

##### React

    <!-- tab: App.tsx -->
    import { Chat, type ChatTypes } from 'devextreme-react/chat';

    function emptyViewRender(data: ChatTypes.EmptyViewData) {
        return (
            <>
                <div>{ data.texts.message }</div>
                <div>{ data.texts.prompt }</div>
            </>
        );
    }

    function App() {
        return (
            <>
                <Chat ...
                    emptyViewRender={emptyViewRender}
                />
            </>
        );
    }

---
