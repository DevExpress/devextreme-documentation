A single-action FAB represents the primary action of a screen. According to the [guidelines](https://material.io/design/components/buttons-floating-action-button.html#usage), this action should be constructive, such as, create, share, explore, or edit, as in the following example:

<div class="simulator-desktop-container" style="height:362px" data-view="/Content/Applications/20_2/GettingStartedWith/FloatingActionButton/SingleAction/index.html, /Content/Applications/20_2/GettingStartedWith/FloatingActionButton/SingleAction/index.js, /Content/Applications/20_2/GettingStartedWith/FloatingActionButton/SingleAction/index.css"></div>

To create a single-action FAB, add one [SpeedDialAction](/api-reference/10%20UI%20Widgets/dxSpeedDialAction '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/') to your page and specify its [onClick](/api-reference/10%20UI%20Widgets/dxSpeedDialAction/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/Configuration/#onClick') and [icon](/api-reference/10%20UI%20Widgets/dxSpeedDialAction/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/Configuration/#icon') options. Setting other options is not required, but we also specify a [hint](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/hint.md '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/Configuration/#hint').

To position the FAB, use the [floatingActionButtonConfig](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/').[position](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig/position.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/#position') option in the [globalConfig](/api-reference/50%20Common/Object%20Structures/globalConfig '/Documentation/ApiReference/Common/Object_Structures/globalConfig/') object.

The following code, which configures the example above, illustrates the described techniques:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        DevExpress.config({
            floatingActionButtonConfig: {
                position: {
                    my: "right bottom",
                    at: "right bottom",
                    of: "#app-container",
                    offset: "-16 -16"
                }
            }
        });

        $("#action-edit").dxSpeedDialAction({
            hint: "Edit",
            icon: "icon ion-md-create",
            onClick: function() {
                showNotification("Edit is clicked");
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
                width: $("#app-container").width() * 0.7
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
                <div id="action-edit"></div>
            </div>
        </body>
    </html>

    <!-- tab: index.css -->
    .dx-fa-button-icon {
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
            hint="Edit"
            icon="icon ion-md-create"
            (onClick)="showNotification('Edit is clicked')">
        </dx-speed-dial-action>
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';
    import config from 'devextreme/core/config';

    config({
        floatingActionButtonConfig: {
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
    ::ng-deep .dx-fa-button-icon {
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
                hint="Edit"
                icon="icon ion-md-create"
                @click="showNotification('Edit is clicked')"
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
                }, 'info', 1000);
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
                        hint="Edit"
                        icon="icon ion-md-create"
                        onClick={() => showNotification('Edit is clicked')}
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