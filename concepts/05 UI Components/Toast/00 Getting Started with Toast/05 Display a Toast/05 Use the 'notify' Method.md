When you need to display a notification, call the [notify(message, type, displayTime)](/Documentation/ApiReference/Common/Utils/ui/#notifymessage_type_displayTime) method with values for the [message](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#message), [type](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#type), and [displayTime](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#displayTime) properties passed as arguments.

You can specify one of the four predefined types of notifications, depending on the mood of the message:

- *'info'*   
A blue toast with a message bubble icon.

- *'warning'*   
A yellow toast with an exclamation mark icon.

- *'error'*   
A red toast with an **X** icon.

- *'success'*   
A green toast with a check mark icon.

If you need to specify other Toast properties in addition to [type](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#type) and [displayTime](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#displayTime), call the [notify(options, type, displayTime)](/Documentation/ApiReference/Common/Utils/ui/#notifyoptions_type_displayTime) method and pass an object as the argument. This tutorial uses the second approach.

You can specify the [width](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#width) and [height](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#height) properties to resize a toast. Use the [position](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#position) property to specify toast location. The configuration of the **position** property in the example reads as follows: "place **my** *bottom* side **at** the *bottom* side **of** the *"#container"*.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const types = ['error', 'info', 'success', 'warning'];

        $("#show").dxButton({
            text: "Show message",
            onClick: function() {
                DevExpress.ui.notify({
                    message: "You have a new message", 
                    width: 230,
                    position: {
                        my: "bottom",
                        at: "bottom",
                        of: "#container"
                    }
                }, 
                types[Math.floor(Math.random() * 4)], 
                500
                );
            },
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_21_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_21_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <link rel="stylesheet" type="text/css" href="index.css">
        </head>
        <body>
            <div id="container">
                <div id="buttons">
                    <div id="show"></div>
                </div>
            </div>
        </body>
    </html>

    <!-- tab: index.css -->
    #container {
        width: 300px;
        height: 120px;
        margin: 5px;
    }

    #buttons {
        display: flex;
    }

##### Angular

    <!-- tab: app.component.html -->
    <div id="container">
        <div id="buttons">
            <dx-button
                text="Show message"
                (onClick)="showMessage()"
            >
            </dx-button>
        </div>
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        types = ['error', 'info', 'success', 'warning'];
        showMessage() {
            notify({
                message: "You have a new message", 
                width: 230,
                position: {
                    at: "bottom",
                    my: "bottom",
                    of: "#container"
                }
            }, 
            this.types[Math.floor(Math.random() * 4)], 
            500
            );
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxButtonModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxButtonModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    #container {
        width: 300px;
        height: 120px;
        margin: 5px;
    }

    #buttons {
        display: flex;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="container">
            <div id="buttons">
                <dxButton
                    text="Show message"
                    @click="showMessage"
                >
                </dxButton>
            </div>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxButton } from 'devextreme-vue/button';
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxButton
        }
        data() {
            return {
                types: ['error', 'info', 'success', 'warning']
            };
        },
        methods: {    
            showMessage() {
                notify({
                message: "You have a new message", 
                width: 230,
                position: {
                    at: "bottom",
                    my: "bottom",
                    of: "#container"
                }
                }, 
                this.types[Math.floor(Math.random() * 4)], 
                500
                );
            }
        }
    }
    </script>

    <style>
        #container {
            width: 300px;
            height: 120px;
            margin: 5px;
        }

        #buttons {
            display: flex;
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { Button } from 'devextreme-react/button';
    import notify from 'devextreme/ui/notify';

    const types = ['error', 'info', 'success', 'warning'];

    const showMessage = () => {
        notify({
            message: "You have a new message", 
            width: 230,
            position: {
                at: "bottom",
                my: "bottom",
                of: "#container"
            }
            }, 
            types[Math.floor(Math.random() * 4)], 
            500
        );
    }

    function App() {
        return (
            <div id="container">
                <div id="buttons">
                    <Button
                        text="Show message"
                        onClick={showMessage}
                    >
                    </Button>
                </div>
            </div>
        );
    }

    export default App;

    <!-- tab: index.css -->
    #container {
        width: 300px;
        height: 120px;
        margin: 5px;
    }

    #buttons {
        display: flex;
    }
    
---

