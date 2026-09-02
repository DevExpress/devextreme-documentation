This section configures a **Clear Chat** button with a standalone Chat component.

<div class="simulator-desktop-container" data-view="/Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/fullpage.html, /Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/fullpage.js, /Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/fullpage.css" style="border-radius: 12px;"></div>

Define DevExtreme Chat and [Toolbar](/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/) components in a container. Configure a the clear chat button within the Toolbar as follows:

---

##### jQuery

    <!-- tab: full-page.js -->
    $('#dx-ai-chat').dxChat({
        // ...
    });

    $('#ai-chat-toolbar').dxToolbar({
        items: [{
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
        }]
    })

    <!-- tab: full-page.html -->
    <!-- ... -->
    <div class="demo-container">
        <div class="ai-chat-container">
            <div id="ai-chat-toolbar"></div>
            <div id="dx-ai-chat"></div>
        </div>
    </div>

##### ASP.NET Core Controls

    <!-- tab: FullPage.cshtml -->
    <div class="ai-chat-container">
        @(Html.DevExtreme().Toolbar()
            .ID("ai-chat-toolbar")
            .Items(i => {
                i.Add().Location(ToolbarItemLocation.Before).Text("AI Assistant");
                i.Add().Location(ToolbarItemLocation.After).Widget(w => w.Button()
                    .Icon("clearhistory")
                    .Disabled(true)
                    @* ... *@
                );
            })
        )

        @(Html.DevExtreme().Chat()
            .ID("dx-ai-chat")
            @* ... *@
        )
    </div>

##### Angular

    <!-- tab: full-page.component.html -->
    <div class="demo-container">
        <div class="ai-chat-container">
            <dx-toolbar id="ai-chat-toolbar">
            <dxi-toolbar-item
                location="before"
                text="AI Assistant"
            ></dxi-toolbar-item>
            <dxi-toolbar-item
                location="after"
                widget="dxButton"
                [options]="clearButtonOptions"
            ></dxi-toolbar-item>
            </dx-toolbar>
            <dx-chat
                #aiChat
            >
                <!-- ... -->
            </dx-chat>
        </div>
    </div>

    <!-- tab: full-page.component.ts -->
    import { DxButtonModule, DxChatModule, DxToolbarModule } from 'devextreme-angular';

    // ...
    export class FullPageComponent {
        clearButtonOptions = {
            icon: 'clearhistory',
            disabled: true,
        }
    }

##### Vue

    <!-- tab: full-page.vue -->
    <template>
        <div class="demo-container">
            <div class="ai-chat-container">
            <DxToolbar
                id="ai-chat-toolbar"
            >
                <DxItem
                    location="before"
                    text="AI Assistant"
                />
                <DxItem
                    location="after"
                    widget="dxButton"
                    :options="clearButtonOptions"
                />
            </DxToolbar>
                <DxChat
                    ref="chatInstance"
                >
                    <!-- ... -->
                </DxChat>
            </div>
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxChat } from 'devextreme-vue/chat';
    import { type DxButtonTypes } from 'devextreme-vue/button';
    import { DxToolbar, DxItem } from 'devextreme-vue/toolbar';

    const clearButtonOptions = ref<DxButtonTypes.Properties>({
        icon: 'clearhistory',
        disabled: true,
        // ...
    })

    // ...
    </script>

##### React

    <!-- tab: FullPage.tsx -->
    import { Chat, type ChatRef } from 'devextreme-react/chat';
    import { Toolbar, Item } from 'devextreme-react/toolbar';
    import { type ButtonTypes } from 'devextreme-react/button';

    const clearButtonOptions: ButtonTypes.Properties = {
        icon: 'clearhistory',
        disabled: true,
        // ...
    };

    export default function FullPageExample(): JSX.Element {
        // ...

        return (
            <div className='full-page demo-container'>
                <div className='ai-chat-container'>
                    <Toolbar id='ai-chat-toolbar'>
                        <Item
                            location='before'
                            text='AI Assistant'
                        />
                        <Item
                            location='after'
                            widget='dxButton'
                            options={clearButtonOptions}
                        />
                    </Toolbar>
                    <Chat
                        ref={chatInstance}
                    >
                        {/* ... */}
                    </Chat>
                </div>
            </div>
        );
    }

---

To visually combine Chat and Toolbar components, define styles as follows:

- **Container element**: Define background color and border styles following DevExtreme component styling.
- **Chat element**: Disable the built-in border.
- **Toolbar element**: Add a lower border following DevExtreme component styling. Omit this style if you want to mirror the built-in header appearance of the DevExpress Blazor AI Chat control.

<nbsp>

    <!-- tab: CSS -->
    .demo-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ai-chat-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        background-color: var(--dx-component-color-bg);
        width: 50%;
        min-width: 22.45em;
        max-width: 900px;
        border-radius: 12px;
        border: var(--dx-border-width) solid var(--dx-color-border);
    }

    .dx-chat {
        border: none;
    }

    #ai-chat-toolbar.dx-toolbar {
        border-bottom: var(--dx-border-width) solid var(--dx-color-border);
        padding: 0 20px;
    }
