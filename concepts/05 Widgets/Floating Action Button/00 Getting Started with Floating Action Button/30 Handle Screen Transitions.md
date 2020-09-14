Different screens use different FABs because a FAB should perform or contain only actions that can be performed on a particular screen. The DevExtreme [TabPanel](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview/jQuery/MaterialBlueLight) is used to emulate switching between screens.

<div class="simulator-desktop-container" style="height:362px" data-view="/Content/Applications/20_2/GettingStartedWith/FloatingActionButton/HandleScreenTransitions/index.html, /Content/Applications/20_2/GettingStartedWith/FloatingActionButton/HandleScreenTransitions/index.js, /Content/Applications/20_2/GettingStartedWith/FloatingActionButton/HandleScreenTransitions/index.css"></div>

To implement this behavior in Angular, Vue, and React, you can place the actions in separate components if the components have different URLs. No further configuration is required in this case.

The approach is different if the components have the same URL, or actions are in the same component, or when you configure this behavior in jQuery. Change the [visible](/api-reference/10%20UI%20Widgets/dxSpeedDialAction/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/Configuration/#visible') option of each **SpeedDialAction** when the screen is switched. Set this option to **true** if an action can be performed on the current screen. Otherwise, set it to **false**.

The following code shows the **TabPanel** configuration and an empty `switchSDA` function. This function controls the actions' visibility when it is implemented later.

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
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.material.blue.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx.all.js"></script>

            <!-- Custom icons by Ionicons -->
            <link rel="stylesheet" href="https://unpkg.com/ionicons@4.6.3/dist/css/ionicons.min.css">

            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
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

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTabPanelModule, DxSpeedDialActionModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTabPanelModule,
            DxSpeedDialActionModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: angular.json -->
    {
      // ...
      "projects": {
        "ng-app": {
          // ...
          "architect": {
            "build": {
              "options": {
                // ...
                "styles": [
                  "node_modules/devextreme/dist/css/dx.common.css",
                  "node_modules/devextreme/dist/css/dx.material.blue.light.css",
                  // Custom icons by Ionicons
                  "node_modules/ionicons/dist/css/ionicons.css",
                  "src/styles.css"
                ],
                // ...
              },
              // ...
            },
            // ...
          }
        },
        // ...
      },
      // ...
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

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.material.blue.light.css';
    // Custom icons by Ionicons
    import 'ionicons/dist/css/ionicons.css';

    import DxTabPanel, { DxItem } from 'devextreme-vue/tab-panel';

    export default {
        components: {
            DxTabPanel,
            DxItem,
        },
        methods: {
            switchSDAs(e) {
                // To be implemented
            }
        }
    }
    </script>
    <style>
    .dx-fa-button-icon {
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

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.material.blue.light.css';
    // Custom icons by Ionicons
    import 'ionicons/dist/css/ionicons.css';

    import './App.css';

    import TabPanel, { Item } from 'devextreme-react/tab-panel';

    class FAB extends React.Component {
        switchSDAs(e) {
            // To be implemented
        }
        
        render() {
            return (
                <div id="app-container">
                    <TabPanel
                        onSelectionChanged={this.switchSDAs}>
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
    }
    export default App;

    <!-- tab: App.css -->
    .dx-fa-button-icon {
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

The following code adds four **SpeedDialAction**s to the page, but only the "Edit" action is **visible** at launch. The `switchSDA` function changes the actions' visibility based on the selected tab:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // TabPanel is configured here
        // ...

        DevExpress.config({
            floatingActionButtonConfig: {
                icon: "icon ion-md-share",
                position: {
                    my: "right bottom",
                    at: "right bottom",
                    of: "#app-container",
                    offset: "-16 -16"
                }
            }
        });

        var editAction = $("#action-edit").dxSpeedDialAction({
            hint: "Edit",
            icon: "icon ion-md-create",
            onClick: function() {
                showNotification("Edit is clicked")
            }
        }).dxSpeedDialAction("instance");

        var copyAction = $("#action-copy").dxSpeedDialAction({
            hint: "Copy to clipboard",
            icon: "icon ion-md-copy",
            visible: false,
            onClick: function() {
                showNotification("Copied to clipboard")
            }
        }).dxSpeedDialAction("instance");

        var mailAction = $("#action-mail").dxSpeedDialAction({
            hint: "Send by email",
            icon: "icon ion-md-mail",
            visible: false,
            onClick: function() {
                showNotification("Sent by email")
            }
        }).dxSpeedDialAction("instance");

        var facebookAction = $("#action-facebook").dxSpeedDialAction({
            hint: "Share on Facebook",
            icon: "icon ion-logo-facebook",
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
    });

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <!-- TabPanel is configured here -->
        <!-- ... -->
        <dx-speed-dial-action
            hint="Edit"
            icon="icon ion-md-create"
            [visible]="currentTab === 'Edit tab'"
            (onClick)="showNotification('Edit is clicked')">
        </dx-speed-dial-action>

        <dx-speed-dial-action
            hint="Copy to clipboard"
            icon="icon ion-md-copy"
            [visible]="currentTab === 'Share tab'"
            (onClick)="showNotification('Copied to clipboard')">
        </dx-speed-dial-action>
        <dx-speed-dial-action
            hint="Send by email"
            icon="icon ion-md-mail"
            [visible]="currentTab === 'Share tab'"
            (onClick)="showNotification('Sent by email')">
        </dx-speed-dial-action>
        <dx-speed-dial-action
            hint="Share on Facebook"
            icon="icon ion-logo-facebook"
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
            icon: 'icon ion-md-share',
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
        constructor() {
            this.currentTab = 'Edit tab';
        }
        currentTab: string;
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
                icon="ion ion-md-create"
                :visible="currentTab === 'Edit tab'"
                @click="showNotification('Edit is clicked')"
            />
            <DxSpeedDialAction
                hint="Copy to clipboard"
                icon="ion ion-md-copy"
                :visible="currentTab === 'Share tab'"
                @click="showNotification('Copied to clipboard')"
            />
            <DxSpeedDialAction
                hint="Send by email"
                icon="ion ion-md-mail"
                :visible="currentTab === 'Share tab'"
                @click="showNotification('Sent by email')"
            />
            <DxSpeedDialAction
                hint="Share on Facebook"
                icon="ion ion-logo-facebook"
                :visible="currentTab === 'Share tab'"
                @click="showNotification('Shared on Facebook')"
            />
        </div>
    </template>

    <script>
    // ...
    import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';

    import notify from 'devextreme/ui/notify';
    import config from 'devextreme/core/config';

    config({
        floatingActionButtonConfig: {
            icon: 'icon ion-md-share',
            position: {
                my: 'right bottom',
                at: 'right bottom',
                of: '#app-container',
                offset: '-16 -16'
            }
        }
    });

    export default {
        components: {
            // ...
            DxSpeedDialAction
        },
        data() {
            return {
                currentTab: 'Edit tab'
            }
        },
        methods: {
            switchSDAs(e) {
                this.currentTab = e.addedItems[0].title;
            },
            showNotification(message) {
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
                }, "info", 1000);
            }
        }
    }
    </script>
    <style>
    /* ... */
    </style>


##### React

    <!-- tab: App.js -->
    // ...
    import SpeedDialAction from 'devextreme-react/speed-dial-action';
    import config from 'devextreme/core/config';
    import notify from 'devextreme/ui/notify';

    class FAB extends React.Component {
        constructor(props) {
            super(props);
            config({
                floatingActionButtonConfig: {
                    icon: 'icon ion-md-share',
                    position: {
                        my: 'right bottom',
                        at: 'right bottom',
                        of: '#app-container',
                        offset: '-16 -16'
                    }
                }
            });
            this.state = {
                currentTab: 'Edit tab'
            }
            this.switchSDAs = this.switchSDAs.bind(this);
        }

        switchSDAs(e) {
            this.setState({
                currentTab: e.addedItems[0].title
            });
        }
        
        render() {
            return (
                <div id="app-container">
                    {/* TabPanel is configured here */}
                    <SpeedDialAction
                        hint="Edit"
                        icon="icon ion-md-create"
                        visible={this.state.currentTab === 'Edit tab'}
                        onClick={() => showNotification('Edit is clicked')}
                    />
                    <SpeedDialAction
                        hint="Copy to clipboard"
                        icon="icon ion-md-copy"
                        visible={this.state.currentTab === 'Share tab'}
                        onClick={() => showNotification('Copied to clipboard')}
                    />
                    <SpeedDialAction
                        hint="Send by email"
                        icon="icon ion-md-mail"
                        visible={this.state.currentTab === 'Share tab'}
                        onClick={() => showNotification('Sent by email')}
                    />
                    <SpeedDialAction
                        hint="Share on Facebook"
                        icon="icon ion-logo-facebook"
                        visible={this.state.currentTab === 'Share tab'}
                        onClick={() => showNotification('Shared on Facebook')}
                    />
                </div>
            );
        }
    }

    function showNotification(message) {
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
    export default App;

---

For more information on the Floating Action Button's functionality, explore the following resources:

- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview) 
- [SpeedDialAction API Reference](/api-reference/10%20UI%20Widgets/dxSpeedDialAction '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/')
- [floatingActionButtonConfig API Reference](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/')
