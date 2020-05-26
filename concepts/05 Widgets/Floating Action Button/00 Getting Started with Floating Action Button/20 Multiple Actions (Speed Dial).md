The FAB can open a menu with several related actions (speed dial).

<div class="simulator-desktop-container" style="height:362px" data-view="/Content/Applications/20_2/GettingStartedWith/FloatingActionButton/MultipleActions/index.html, /Content/Applications/20_2/GettingStartedWith/FloatingActionButton/MultipleActions/index.js, /Content/Applications/20_2/GettingStartedWith/FloatingActionButton/MultipleActions/index.css"></div>

To create a FAB that opens a speed dial, add up to five [SpeedDialAction](/api-reference/10%20UI%20Widgets/dxSpeedDialAction '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/') components to a page, each with an individual [icon](/api-reference/10%20UI%20Widgets/dxSpeedDialAction/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/Configuration/#icon') and [onClick](/api-reference/10%20UI%20Widgets/dxSpeedDialAction/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/Configuration/#onClick') event handler. The actions are sorted according to their [indexes](/api-reference/10%20UI%20Widgets/dxSpeedDialAction/1%20Configuration/index.md '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/Configuration/#index').

FAB parameters are configured in the [floatingActionButtonConfig](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/') object. Use it to change the FAB's [position](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig/position.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/#position'), [maximum number of actions](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig/maxSpeedDialActionCount.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/#maxSpeedDialActionCount'), icons in the [open](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig/icon.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/#icon') and [close](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig/closeIcon.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/#closeIcon') states, and other parameters.

The following code configures the example above and shows how to set the described options:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
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

        $("#action-copy").dxSpeedDialAction({
            hint: "Copy to clipboard",
            icon: "icon ion-md-copy",
            onClick: function() {
                showNotification("Copied to clipboard");
            }
        });

        $("#action-mail").dxSpeedDialAction({
            hint: "Send by email",
            icon: "icon ion-md-mail",
            onClick: function() {
                showNotification("Sent by email");
            }
        });

        $("#action-facebook").dxSpeedDialAction({
            hint: "Share on Facebook",
            icon: "icon ion-logo-facebook",
            onClick: function() {
                showNotification("Shared on Facebook");
            }
        });

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
                <p>View's content</p>
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

    #app-container {
        height: 360px;
        width: 320px;
    }

    p {
        text-align: center;
    }

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <p>View's content</p>
        <dx-speed-dial-action
            hint="Copy to clipboard"
            icon="icon ion-md-copy"
            (onClick)="showNotification('Copied to clipboard')">
        </dx-speed-dial-action>
        <dx-speed-dial-action
            hint="Send by email"
            icon="icon ion-md-mail"
            (onClick)="showNotification('Sent by email')">
        </dx-speed-dial-action>
        <dx-speed-dial-action
            hint="Share on Facebook"
            icon="icon ion-logo-facebook"
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

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
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

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxSpeedDialActionModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
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
            <p>View's content</p>
            <DxSpeedDialAction
                hint="Copy to clipboard"
                icon="ion ion-md-copy"
                @click="showNotification('Copied to clipboard')"
            />
            <DxSpeedDialAction
                hint="Send by email"
                icon="ion ion-md-mail"
                @click="showNotification('Sent by email')"
            />
            <DxSpeedDialAction
                hint="Share on Facebook"
                icon="ion ion-logo-facebook"
                @click="showNotification('Shared on Facebook')"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.material.blue.light.css';
    // Custom icons by Ionicons
    import 'ionicons/dist/css/ionicons.css';

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
            DxSpeedDialAction
        },
        methods: {
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
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.material.blue.light.css';
    // Custom icons by Ionicons
    import 'ionicons/dist/css/ionicons.css';
    import './App.css';

    import SpeedDialAction from 'devextreme-react/speed-dial-action';
    import config from 'devextreme/core/config';
    import notify from 'devextreme/ui/notify';

    class App extends React.Component {
        constructor(props) {
            super(props);
            config({
                floatingActionButtonConfig: {
                    icon: 'icon ion-md-share',
                    closeIcon: 'icon ion-md-close',
                    position: {
                        of: '#app-container',
                        my: 'right bottom',
                        at: 'right bottom',
                        offset: '-16 -16'
                    }
                }
            });
        }

        render() {
            return (
                <div id="app-container">
                    <p>View's content</p>
                    <SpeedDialAction
                        hint="Copy to clipboard"
                        icon="icon ion-md-copy"
                        onClick={() => showNotification('Copied to clipboard')}
                    />
                    <SpeedDialAction
                        hint="Send by email"
                        icon="icon ion-md-mail"
                        onClick={() => showNotification('Sent by email')}
                    />
                    <SpeedDialAction
                        hint="Share on Facebook"
                        icon="icon ion-logo-facebook"
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

---
