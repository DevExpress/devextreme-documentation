This section configures a **Clear Chat** button in a DevExtreme [Drawer](/Documentation/Guide/UI_Components/Drawer/Getting_Started_with_Navigation_Drawer/).

<div class="simulator-desktop-container" data-view="/Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/drawer.html, /Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/drawer.js, /Content/Applications/26_1/UIWidgets/Chat/AIClearButtonExamples/drawer.css" style="border-radius: 12px;"></div>

Define a Drawer component and configure DevExtreme [Toolbar](/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/) and Chat in the Drawer's [template](/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#template) as follows:

---

##### jQuery

    <!-- tab: drawer.js -->
    $('#toggle-drawer-button').dxButton({
        text: 'Reveal AI Chat',
        icon: 'showpanel',
        // ...
    });

    $('#drawer').dxDrawer({
        position: 'right',
        template() {
            return $('<div>').addClass('drawer-ai-chat-container').append(
                $('<div>').dxToolbar({
                    elementAttr: { id: 'ai-chat-drawer-toolbar' },
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
                    }, /* ... */ ]
                }),
                $('<div>').dxChat({
                    elementAttr: { id: 'dx-ai-chat'},
                    // ...
                }),
            )
        },
    })

    <!-- tab: drawer.html -->
    <!-- ... -->
    <div class="demo-container">
        <div id="drawer">
            <div id="toggle-drawer-button"></div>
        </div>
    </div>

##### ASP.NET Core Controls

    <!-- tab: Drawer.cshtml -->
    @(Html.DevExtreme().Drawer()
        .ID("ai-chat-drawer")
        .Position(DrawerPosition.Right)
        .Template(new TemplateName("DrawerAIChatTemplate"))
        .Content(@<text>
            @(Html.DevExtreme().Button()
                .ID("toggle-drawer-button")
                .Text("Reveal AI Chat")
                .Icon("showpanel")
                @* ... *@
            )
        </text>)
    )

    @using (Html.DevExtreme().NamedTemplate("DrawerAIChatTemplate")) {
        <div class="drawer-ai-chat-container">
            @(Html.DevExtreme().Toolbar()
                .ID("ai-chat-drawer-toolbar")
                .Width("100%")
                .Items(i => {
                    i.Add().Location(ToolbarItemLocation.Before).Text("AI Assistant");
                    i.Add().Location(ToolbarItemLocation.After).Widget(w => w.Button()
                        .ElementAttr("id", @ChatData.ClearButtonId)
                        .Icon("clearhistory")
                        .Disabled(true)
                        @* ... *@
                    );
                    @* ... *@
                })
            )

            @(Html.DevExtreme().Chat()
                .ID("dx-ai-chat")
                @* ... *@
            )
        </div>
    }

##### Angular

    <!-- tab: drawer.component.html -->
    <div class="demo-container">
        <dx-drawer
            id="ai-chat-drawer"
            template="drawerTemplate"
            position="right"
        >
            <dx-button
                id="toggle-drawer-button"
                text="Reveal AI Chat"
                icon="showpanel"
            ></dx-button>
            <div *dxTemplate="let data of 'drawerTemplate'" style="height: 100%">
                <div class="drawer-ai-chat-container">
                    <dx-toolbar id="ai-chat-drawer-toolbar">
                        <dxi-toolbar-item
                            location="before"
                            text="AI Assistant"
                        ></dxi-toolbar-item>
                        <dxi-toolbar-item
                            location="after"
                            widget="dxButton"
                            [options]="clearButtonOptions"
                        ></dxi-toolbar-item>
                        <!-- ... -->
                    </dx-toolbar>
                    <dx-chat
                        #aiChat
                    >
                        <!-- ... -->
                    </dx-chat>
                </div>
            </div>
        </dx-drawer>
    </div>

    <!-- tab: drawer.component.ts -->
    import { DxButtonModule, DxChatModule, DxToolbarModule, DxDrawerModule } from 'devextreme-angular';

    // ...
    export class DrawerComponent {
        clearButtonOptions = {
            icon: 'clearhistory',
            disabled: true,
        }
    }

##### Vue

    <!-- tab: drawer.vue -->
    <template>
        <div class="demo-container">
            <DxDrawer
                id="ai-chat-drawer"
                template="drawerTemplate"
                position="right"
            >
                <DxButton
                    id="toggle-drawer-button"
                    text="Reveal AI Chat"
                    icon="showpanel"
                />
                <template #drawerTemplate>
                    <div class="drawer-ai-chat-container">
                        <DxToolbar id="ai-chat-drawer-toolbar">
                            <DxItem
                                location="before"
                                text="AI Assistant"
                            />
                            <DxItem
                                location="after"
                                widget="dxButton"
                                :options="clearButtonOptions"
                            />
                            <!-- ... -->
                        </DxToolbar>
                        <DxChat
                            ref="chatInstance"
                        >
                            <!-- ... -->
                        </DxChat>
                    </div>
                </template>
            </DxDrawer>
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxDrawer } from 'devextreme-vue/drawer';
    import { DxChat } from 'devextreme-vue/chat';
    import { DxButton, type DxButtonTypes } from 'devextreme-vue/button';
    import { DxToolbar, DxItem } from 'devextreme-vue/toolbar';

    const clearButtonOptions = ref<DxButtonTypes.Properties>({
        icon: 'clearhistory',
        disabled: true,
        // ...
    })

    // ...
    </script>

##### React

    <!-- tab: Drawer.tsx -->
    import { useCallback } from 'react';
    import { Chat, type ChatRef } from 'devextreme-react/chat';
    import { Toolbar, Item } from 'devextreme-react/toolbar';
    import { Drawer } from 'devextreme-react/drawer';
    import { Button, type ButtonTypes } from 'devextreme-react/button';

    const clearButtonOptions: ButtonTypes.Properties = {
        icon: 'clearhistory',
        disabled: true,
        // ...
    };

    export default function DrawerExample(): JSX.Element {
        // ...

        const renderDrawer = useCallback(() => (
            <div className='drawer-ai-chat-container'>
                <Toolbar id='ai-chat-drawer-toolbar'>
                    <Item
                        location='before'
                        text='AI Assistant'
                    />
                    <Item
                        location='after'
                        widget='dxButton'
                        options={clearButtonOptions}
                    />
                    {/* ... */}
                </Toolbar>
                <Chat
                    ref={chatInstance}
                />
            </div>
        ), [/* ... */]);

        return (
            <div className='drawer demo-container'>
                <Drawer
                    id='ai-chat-drawer'
                    render={renderDrawer}
                    position='right'
                >
                    <Button
                        id='toggle-drawer-button'
                        text='Reveal AI Chat'
                        icon='showpanel'
                    />
                </Drawer>
            </div>
        );
    }

---

To visually combine Chat and Toolbar components within the Drawer, define styles as follows:

- **Drawer container element**: Define background color and border styles following DevExtreme component styling.
- **Chat element**: Disable the built-in border.
- **Toolbar element**: Add a lower border following DevExtreme component styling.

<nbsp>

    <!-- tab: CSS -->
    .demo-container, .dx-drawer-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .drawer-ai-chat-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        min-width: 400px;
        background-color: var(--dx-component-color-bg);
        border-radius: 12px;
        border: var(--dx-border-width) solid var(--dx-color-border);
    }

    .drawer-ai-chat-container #ai-chat-drawer-toolbar.dx-toolbar {
        padding: 0 20px;
        border-bottom: var(--dx-border-width) solid var(--dx-color-border);
    }

    .drawer-ai-chat-container .dx-chat {
        border: none;
    }

    #toggle-drawer-button {
        display: inline-flex;
    }
