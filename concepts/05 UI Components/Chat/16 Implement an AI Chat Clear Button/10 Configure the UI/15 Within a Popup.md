This section configures a **Clear Chat** button in the built-in toolbar of DevExtreme [Popup](/Documentation/Guide/UI_Components/Popup/Overview/).

<div class="simulator-desktop-container" data-view="/Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/popup.html, /Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/popup.js, /Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/popup.css" style="border-radius: 12px;"></div>

Configure a DevExtreme Popup and define a Chat component within the Popup's [contentTemplate](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#contentTemplate) as follows:

---

##### jQuery

    <!-- tab: popup.js -->
    $('#open-popup-button').dxButton({
        text: 'Reveal AI Chat',
        icon: 'chatsparkleoutline',
        // ...
    })

    $('#ai-chat-popup').dxPopup({
        wrapperAttr: { id: 'ai-chat-popup-wrapper' },
        toolbarItems: [{
            location: 'before',
            text: 'AI Assistant',
        }, {
            widget: 'dxButton',
            location: 'after',
            options: {
                icon: 'clearhistory',
                disabled: true,
                // ...
            }
        }],
        contentTemplate() {
            return $('<div>').dxChat({
                elementAttr: { id: 'dx-ai-chat' },
                // ...
            });
        },
    });

    <!-- tab: popup.html -->
    <!-- ... -->
    <div class="demo-container">
        <div id="open-popup-button"></div>
        <div id="ai-chat-popup"></div>
    </div>

##### ASP.NET Core Controls

    <!-- tab: Popup.cshtml -->
    @(Html.DevExtreme().Button()
        .ID("open-popup-button")
        .Text("Reveal AI Chat")
        .Icon("chatsparkleoutline")
        @* ... *@
    )

    @(Html.DevExtreme().Popup()
        .ID("ai-chat-popup")
        .WrapperAttr(new { id = "ai-chat-popup-wrapper" })
        .ToolbarItems(t => {
            t.Add().Location(ToolbarItemLocation.Before).Text("AI Assistant");
            t.Add().Location(ToolbarItemLocation.After).Widget(w => w.Button()
                .Icon("clearhistory")
                .Disabled(true)
                @* ... *@
            );
        })
        .ContentTemplate(@<text>
            @(Html.DevExtreme().Chat()
                .ID("dx-ai-chat")
                @* ... *@
            )
        </text>)
    )

##### Angular

    <!-- tab: popup.component.html -->
    <div class="demo-container">
        <dx-button
            id="open-popup-button"
            text="Reveal AI Chat"
            icon="chatsparkleoutline"
        ></dx-button>
        <dx-popup
            contentTemplate="popupTemplate"
            [wrapperAttr]="popupWrapperAttr"
        >
            <dxi-popup-toolbar-item
                location="before"
                text="AI Assistant"
            ></dxi-popup-toolbar-item>
            <dxi-popup-toolbar-item
                location="after"
                widget="dxButton"
                [options]="clearButtonOptions"
            ></dxi-popup-toolbar-item>
            <div *dxTemplate="let data of 'popupTemplate'" style="height: 100%">
                <dx-chat
                    #aiChat
                >
                    <!-- ... -->
                </dx-chat>
            </div>
        </dx-popup>
    </div>


    <!-- tab: popup.component.ts -->
    import { DxButtonModule, DxChatModule, DxToolbarModule, DxPopupModule } from 'devextreme-angular';

    // ...
    export class PopupComponent {
        clearButtonOptions = {
            icon: 'clearhistory',
            disabled: true,
        }
    }

##### Vue

    <!-- tab: popup.vue -->
    <template>
        <div class="demo-container">
            <DxButton
                id="open-popup-button"
                text="Reveal AI Chat"
                icon="chatsparkleoutline"
            />
            <DxPopup
                :wrapper-attr="popupWrapperAttr"
                content-template="popupContent"
            >
                <DxToolbarItem
                    text="AI Assistant"
                    location="before"
                />
                <DxToolbarItem
                    widget="dxButton"
                    location="after"
                    :options="clearButtonOptions"
                />
                <template #popupContent>
                    <div>
                        <DxChat
                            ref="chatInstance"
                        >
                            <!-- ... -->
                        </DxChat>
                    </div>
                </template>
            </DxPopup>
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxChat } from 'devextreme-vue/chat';
    import { DxButton } from 'devextreme-vue/button';
    import { DxPopup, DxToolbarItem } from 'devextreme-vue/popup';

    const clearButtonOptions = ref<DxButtonTypes.Properties>({
        icon: 'clearhistory',
        disabled: true,
        // ...
    })

    // ...
    </script>

##### React

    <!-- tab: Popup.tsx -->
    import { Chat, type ChatRef } from 'devextreme-react/chat';
    import { Popup, ToolbarItem } from 'devextreme-react/popup';
    import { type ButtonTypes } from 'devextreme-react/button';

    const clearButtonOptions: ButtonTypes.Properties = {
        icon: 'clearhistory',
        disabled: true,
        // ...
    };

    export default function PopupExample(): JSX.Element {
        // ...

        const renderPopup = useCallback(() => (
            <Chat
                id='dx-ai-chat'
            >
                {/* ... */}
            </Chat>
        ), [/* ... */]);

        return (
            <div className='popup demo-container'>
                <Button
                    id='open-popup-button'
                    text='Reveal AI Chat'
                    icon='chatsparkleoutline'
                />
                <Popup
                    wrapperAttr={popupWrapperAttr}
                    contentRender={renderPopup}
                >
                    <ToolbarItem
                        text='AI Assistant'
                        location='before'
                    />
                    <ToolbarItem
                        widget='dxButton'
                        location='after'
                        options={clearButtonOptions}
                    />
                </Popup>
            </div>
        );
    }

---

To visually integrate DevExtreme Chat in the Popup, define styles as follows:

- **Popup content element**: Set padding to 0.
- **Chat element**: Disable the built-in border.

<nbsp>

    <!-- tab: CSS -->
    .demo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: calc(100% - 24px);
        padding: 12px;
    }

    #open-popup-button {
        display: inline-flex;
    }

    #ai-chat-popup-wrapper .dx-popup-content {
        padding: 0;
    }

    #dx-ai-chat {
        border: none;
    }
