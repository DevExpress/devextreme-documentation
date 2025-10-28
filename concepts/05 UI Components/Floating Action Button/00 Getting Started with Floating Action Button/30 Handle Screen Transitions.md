In this example, each screen has a distinct FAB, as each FAB contains only actions for that screen. The DevExtreme [TabPanel](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview/) emulates screen switching:

<div class="simulator-desktop-container" style="height:362px" data-view="/Content/Applications/25_1/GettingStartedWith/FloatingActionButton/HandleScreenTransitions/index.html, /Content/Applications/25_1/GettingStartedWith/FloatingActionButton/HandleScreenTransitions/index.js, /Content/Applications/25_1/GettingStartedWith/FloatingActionButton/HandleScreenTransitions/index.css"></div>

---
##### jQuery

Change the [visible](/api-reference/10%20UI%20Components/dxSpeedDialAction/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#visible') property of each SpeedDialAction when the screen changes. Set **visible** to `true` if the action applies to the current screen. Otherwise, set it to `false`.

##### Angular

Separate actions into different components when components use different URLs. No extra configuration is needed.

If components share a URL or actions exist in the same component, update the [visible](/api-reference/10%20UI%20Components/dxSpeedDialAction/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#visible') property of each SpeedDialAction when the screen changes. Set **visible** to `true` if the action applies to the current screen. Otherwise, set it to `false`.

##### Vue

Separate actions into different components when components use different URLs. No extra configuration is needed.

If components share a URL or actions exist in the same component, update the [visible](/api-reference/10%20UI%20Components/dxSpeedDialAction/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#visible') property of each SpeedDialAction when the screen changes. Set **visible** to `true` if the action applies to the current screen. Otherwise, set it to `false`.

##### React

Separate actions into different components when components use different URLs. No extra configuration is needed.

If components share a URL or actions exist in the same component, update the [visible](/api-reference/10%20UI%20Components/dxSpeedDialAction/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#visible') property of each SpeedDialAction when the screen changes. Set **visible** to `true` if the action applies to the current screen. Otherwise, set it to `false`.

---

The following code includes the TabPanel configuration and an empty `switchSDA` function. Implement `switchSDA` to control action visibility:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tab-panel").dxTabPanel({
            items: [{
                title: "Edit Tab",
                template: function() {
                    return "<p>Edit tab's content</p>";
                }
            }, {
                title: "Share Tab",
                template: function() {
                    return "<p>Share tab's content</p>";
                }
            }],
            onSelectionChanged: function(e) {
                switchSDAs(e.addedItems[0].title);
            }
        });

        function switchSDAs(tabTitle) {
            // To be implemented
        }
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

            <!-- DevExtreme resources -->
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.material.blue.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>

            <link rel="stylesheet" href="index.css">
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="app-container">
                <div id="tab-panel"></div>
                <div id="action-edit"></div>
                <div id="action-mail"></div>
                <div id="action-copy"></div>
                <div id="action-facebook"></div>
            </div>
        </body>
    </html>

    <!-- tab: index.css -->
    .dx-fa-button-icon, .dx-fa-button-icon-close {
        text-align: center;
    }

    p {
        text-align: center;
    }

    #app-container {
        height: 360px;
        width: 320px;
    }

    .dx-tabpanel .dx-tabs-wrapper {
        display: flex;
        flex-flow: row nowrap;
    }

    .dx-tab {
        display: flex;
        flex-flow: row nowrap;
        flex: 1;
        justify-content: center;
    }

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <dx-tab-panel
            (onSelectionChanged)="switchSDAs($event)">
            <dxi-item title="Edit tab">
                <p>Edit tab's content</p>
            </dxi-item>
            <dxi-item title="Share tab">
                <p>Share tab's content</p>
            </dxi-item>
        </dx-tab-panel>
        <!-- To be implemented -->
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        switchSDAs(e) {
            // To be implemented
            this.currentTab = e.addedItems[0].title; 
        }
    }

    <!-- tab: app.component.css -->
    ::ng-deep .dx-fa-button-icon, .dx-fa-button-icon-close {
        text-align: center;
    }

    p {
        text-align: center;
    }

    #app-container {
        height: 360px;
        width: 320px;
    }

    ::ng-deep .dx-tabpanel .dx-tabs-wrapper {
        display: flex;
        flex-flow: row nowrap;
    }

    ::ng-deep .dx-tab {
        display: flex;
        flex-flow: row nowrap;
        flex: 1;
        justify-content: center;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTabPanel
                @selection-changed="switchSDAs">
                <DxItem title="Edit tab">
                    <template #default>
                        <p>Edit tab's content</p>
                    </template>
                </DxItem>
                <DxItem title="Share tab">
                    <template #default>
                        <p>Share tab's content</p>
                    </template>
                </DxItem>
            </DxTabPanel>
            <!-- To be implemented -->
        </div>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.material.blue.light.css';
    import DxTabPanel, { DxItem } from 'devextreme-vue/tab-panel';

    // switchSDAs to be implemented
    </script>

    <style>
    .dx-fa-button-icon, .dx-fa-button-icon-close {
        text-align: center;
    }
    
    p {
        text-align: center;
    }
    
    #app-container {
        height: 360px;
        width: 320px;
        border: 1px solid black;
    }

    .dx-tabpanel .dx-tabs-wrapper {
        display: flex;
        flex-flow: row nowrap;
    }
    
    .dx-tab {
        display: flex;
        flex-flow: row nowrap;
        flex: 1;
        justify-content: center;
    }
    </style>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.material.blue.light.css';
    import './App.css';

    import TabPanel, { Item } from 'devextreme-react/tab-panel';

    function App(): JSX.Element {
        // switchSDAs to be implemented

        return (
            <div id="app-container">
                <<TabPanel onSelectionChanged={switchSDAs}>
                    <Item title="Edit tab">
                        <p>Edit tab's content</p>
                    </Item>
                    <Item title="Share tab">
                        <p>Share tab's content</p>
                    </Item>
                </TabPanel>
                {/* To be implemented */}
            </div>
        );
    }

    export default App;

    <!-- tab: App.css -->
    .dx-fa-button-icon, .dx-fa-button-icon-close {
        text-align: center;
    }

    p {
        text-align: center;
    }

    #app-container {
        height: 360px;
        width: 320px;
    }

    .dx-tabpanel .dx-tabs-wrapper {
        display: flex;
        flex-flow: row nowrap;
    }
    
    .dx-tab {
        display: flex;
        flex-flow: row nowrap;
        flex: 1;
        justify-content: center;
    }

---

The following code creates four SpeedDialActions. At launch, only "Edit" appears. The `switchSDA` function displays or hides actions depending on the active tab:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // TabPanel is configured here
        // ...

        DevExpress.config({
            floatingActionButtonConfig: {
                icon: "share",
                position: {
                    my: "right bottom",
                    at: "right bottom",
                    of: "#app-container",
                    offset: "-16 -16"
                }
            }
        });

        const editAction = $("#action-edit").dxSpeedDialAction({
            hint: "Edit",
            icon: "edit",
            onClick: function() {
                showNotification("Edit is clicked")
            }
        }).dxSpeedDialAction("instance");

        const copyAction = $("#action-copy").dxSpeedDialAction({
            hint: "Copy to clipboard",
            icon: "copy",
            visible: false,
            onClick: function() {
                showNotification("Copied to clipboard")
            }
        }).dxSpeedDialAction("instance");

        const mailAction = $("#action-mail").dxSpeedDialAction({
            hint: "Send by email",
            icon: "email",
            visible: false,
            onClick: function() {
                showNotification("Sent by email")
            }
        }).dxSpeedDialAction("instance");

        const facebookAction = $("#action-facebook").dxSpeedDialAction({
            hint: "Share on Facebook",
            icon: "link",
            visible: false,
            onClick: function() {
                showNotification("Shared on Facebook")
            }
        }).dxSpeedDialAction("instance");

        function switchSDAs(tabTitle) {
            if(tabTitle === "Edit Tab") {
                editAction.option("visible", true);
                copyAction.option("visible", false);
                mailAction.option("visible", false);
                facebookAction.option("visible", false);
            }
            if(tabTitle === "Share Tab") {
                editAction.option("visible", false);
                copyAction.option("visible", true);
                mailAction.option("visible", true);
                facebookAction.option("visible", true);
            }
        }

        function showNotification(message) {
            DevExpress.ui.notify({
                message: message,
                position: {
                    my: "left bottom",
                    at: "left bottom",
                    of: "#app-container",
                    offset: "16 -16"
                },
                minWidth: null,
                width: function() {
                    return $("#app-container").width() * 0.7;
                }
            }, "info", 1000);
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <!-- TabPanel is configured here -->
        <!-- ... -->
        <dx-speed-dial-action
            hint="Edit"
            icon="edit"
            [visible]="currentTab === 'Edit tab'"
            (onClick)="showNotification('Edit is clicked')">
        </dx-speed-dial-action>

        <dx-speed-dial-action
            hint="Copy to clipboard"
            icon="copy"
            [visible]="currentTab === 'Share tab'"
            (onClick)="showNotification('Copied to clipboard')">
        </dx-speed-dial-action>
        <dx-speed-dial-action
            hint="Send by email"
            icon="email"
            [visible]="currentTab === 'Share tab'"
            (onClick)="showNotification('Sent by email')">
        </dx-speed-dial-action>
        <dx-speed-dial-action
            hint="Share on Facebook"
            icon="link"
            [visible]="currentTab === 'Share tab'"
            (onClick)="showNotification('Shared on Facebook')">
        </dx-speed-dial-action>
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';
    import config from 'devextreme/core/config';

    config({
        floatingActionButtonConfig: {
            icon: 'share',
            position: {
                my: 'right bottom',
                at: 'right bottom',
                of: '#app-container',
                offset: '-16 -16'
            }
        }
    });
    // ...
    export class AppComponent {
        currentTab: string;
        constructor() {
            this.currentTab = 'Edit tab';
        }
        switchSDAs(e) {
            this.currentTab = e.addedItems[0].title; 
        }
        showNotification(message: string) {
            notify({
                message: message,
                position: {
                    my: 'left bottom',
                    at: 'left bottom',
                    of: '#app-container',
                    offset: '16 -16'
                },
                minWidth: null,
                width: 320 * 0.7
            }, 'info', 1000);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <!-- TabPanel is configured here -->
            <DxSpeedDialAction
                hint="Edit"
                icon="edit"
                :visible="currentTab === 'Edit tab'"
                @click="showNotification('Edit is clicked')"
            />
            <DxSpeedDialAction
                hint="Copy to clipboard"
                icon="copy"
                :visible="currentTab === 'Share tab'"
                @click="showNotification('Copied to clipboard')"
            />
            <DxSpeedDialAction
                hint="Send by email"
                icon="email"
                :visible="currentTab === 'Share tab'"
                @click="showNotification('Sent by email')"
            />
            <DxSpeedDialAction
                hint="Share on Facebook"
                icon="link"
                :visible="currentTab === 'Share tab'"
                @click="showNotification('Shared on Facebook')"
            />
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxTabPanel, DxItem } from 'devextreme-vue/tab-panel';
    import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
    import type { DxTabPanelTypes } from 'devextreme-vue/tab-panel';
    import type { GlobalConfig } from 'devextreme/common';
    import type { Properties as ToastProperties } from 'devextreme/ui/toast';
    import notify from 'devextreme/ui/notify';
    import config from 'devextreme/core/config';
    import type { TabItem } from '../types';

    const floatingActionButtonConfig: GlobalConfig = {
        floatingActionButtonConfig: {
            icon: 'share',
            position: {
                my: 'right bottom',
                at: 'right bottom',
                of: '#app-container',
                offset: '-16 -16',
            },
        },
    };

    config(floatingActionButtonConfig);

    const currentTab = ref<string>('Edit tab');

    const switchSDAs = (e: DxTabPanelTypes.SelectionChangedEvent): void => {
        const addedItem = e.addedItems[0] as TabItem;
        currentTab.value = addedItem.title;
    };

    const showNotification = (message: string): void => {
        const options: ToastProperties = {
            message,
            position: {
                my: 'left bottom',
                at: 'left bottom',
                of: '#app-container',
                offset: '16 -16',
            },
            width: 320 * 0.7,
            minWidth: 0,
        };
        notify(options, 'info', 1000);
    };
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import { useCallback, useState } from 'react';
    import TabPanel, { Item } from 'devextreme-react/tab-panel';
    import SpeedDialAction from 'devextreme-react/speed-dial-action';
    import config from 'devextreme/core/config';
    import type { GlobalConfig } from 'devextreme/common';
    import notify from 'devextreme/ui/notify';
    import type { TabPanelTypes } from 'devextreme-react/tab-panel';
    import type { Properties as ToastProperties } from 'devextreme/ui/toast';

    const globalConfig: GlobalConfig = {
        floatingActionButtonConfig: {
            icon: 'share',
            position: {
                my: 'right bottom',
                at: 'right bottom',
                of: '#app-container',
                offset: '-16 -16',
            },
        },
    };

    config(globalConfig);

    function showNotification(message: string): void {
        const options: ToastProperties = {
            message,
            position: {
                my: 'left bottom',
                at: 'left bottom',
                of: '#app-container',
                offset: '16 -16',
            },
            width: 320 * 0.7,
            minWidth: 0,
        };

        notify(options, 'info', 1000);
    }

    function App(): JSX.Element {
        const [currentTab, setCurrentTab] = useState<string>('Edit tab');

        const switchSDAs = useCallback(
            (e: TabPanelTypes.SelectionChangedEvent): void => {
                setCurrentTab(e.addedItems[0].title);
            },
            [],
        );

        const handleEditClick = useCallback((): void => {
            showNotification('Edit is clicked');
        }, []);

        const handleCopyClick = useCallback((): void => {
            showNotification('Copied to clipboard');
        }, []);

        const handleMailClick = useCallback((): void => {
            showNotification('Sent by email');
        }, []);

        const handleSocialClick = useCallback((): void => {
            showNotification('Shared on Social Media');
        }, []);

        return (
            <div id="app-container">
                <!-- TabPanel configuration -->
                <SpeedDialAction
                    hint="Edit"
                    icon="edit"
                    visible={currentTab === 'Edit tab'}
                    onClick={handleEditClick}
                />
                <SpeedDialAction
                    hint="Copy to clipboard"
                    icon="copy"
                    visible={currentTab === 'Share tab'}
                    onClick={handleCopyClick}
                />
                <SpeedDialAction
                    hint="Send by email"
                    icon="email"
                    visible={currentTab === 'Share tab'}
                    onClick={handleMailClick}
                />
                <SpeedDialAction
                    hint="Share on Social Media"
                    icon="link"
                    visible={currentTab === 'Share tab'}
                    onClick={handleSocialClick}
                />
            </div>
        );
    }

    export default App;

---

You can find the full code in the following GitHub repository: 

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/getting-started-with-floating-action-button-screen-transitions/"
}

For more information on the Floating Action Button's functionality, explore the following resources:

- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview) 
- [SpeedDialAction API Reference](/api-reference/10%20UI%20Components/dxSpeedDialAction '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/')
- [floatingActionButtonConfig API Reference](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/')
