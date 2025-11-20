---
id: dxChat.Options.onAttachmentDownloadClick
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed after a user clicks the "Download" button.

##### param(e): ui/chat:AttachmentDownloadEvent
Information about the event.

##### field(e.attachment): Attachment
The downloaded file attachment.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
[note] If an event handler is not specified, the "Download" button is not rendered.

---

##### jQuery

    <!-- tab: index.js -->
    $('#chat-container').dxChat({
        // ...
        onAttachmentDownloadClick(e) {
            const { attachment } = e;

            if (!attachment?.url) { // attachment.url is a custom field
                return;             // See demo below for full implementation
            };

            const link = document.createElement('a');
            link.setAttribute('href', attachment.url);
            link.setAttribute('download', attachment.name);

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ... 
        (onAttachmentDownloadClick)="onAttachmentDownloadClick($event)"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {

        onAttachmentDownloadClick(e: DxChatTypes.AttachmentDownloadClickEvent): void {
            if (e.attachment) {
                if (!e.attachment?.url) { // attachment.url is a custom field
                    return;               // See demo below for full implementation
                };

                const link = document.createElement('a');
                link.setAttribute('href', e.attachment.url);
                link.setAttribute('download', e.attachment.name);

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat ...
            @attachment-download-click="onAttachmentDownloadClick($event)"
        />
    </template>

    <script setup lang="ts">
    import { DxChat, DxChatTypes } from 'devextreme-vue/chat';

    function onAttachmentDownloadClick({ attachment }: DxChatTypes.AttachmentDownloadClickEvent): void {
        if (!attachment?.url) { // attachment.url is a custom field
            return;             // See demo below for full implementation
        }

        const link = document.createElement('a');
        link.setAttribute('href', attachment.url);
        link.setAttribute('download', attachment.name);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';
    import { Chat, ChatTypes } from 'devextreme-react/chat';

     const onAttachmentDownloadClick = useCallback((
        { attachment }: ChatTypes.AttachmentDownloadClickEvent,
    ): void => {
        if (!attachment?.url) { // attachment.url is a custom field
            return;             // See demo below for full implementation
        }

        const link = document.createElement('a');
        link.setAttribute('href', attachment.url);
        link.setAttribute('download', attachment.name);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    function App() {
        return (
            <>
                <Chat ...
                    onAttachmentDownloadClick={onAttachmentDownloadClick}
                />
            </>
        );
    }

---