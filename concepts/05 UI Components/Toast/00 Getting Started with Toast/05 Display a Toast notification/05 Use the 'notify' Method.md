Call the **notify** method to display a Toast. This method can accept four different sets of arguments. 

The basic syntax is [notify(message, type, displayTime)](/api-reference/50%20Common/utils/ui/notify(message_type_displayTime).md '/Documentation/ApiReference/Common/Utils/ui/#notifymessage_type_displayTime'). You should specify the [message](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/message.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#message'), [type](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#type'), and [displayTime](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/displayTime.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#displayTime').

To specify additional Toast properties, call the [notify(options, type, displayTime)](/api-reference/50%20Common/utils/ui/notify(options_type_displayTime).md '/Documentation/ApiReference/Common/Utils/ui/#notifyoptions_type_displayTime') method and pass an object as the first argument. The example below uses this syntax.

To stack Toasts, call the [notify(message, stack)](/api-reference/50%20Common/utils/ui/notify(message_stack).md '/Documentation/ApiReference/Common/Utils/ui/#notifymessage_stack') or [notify(options, stack)](/api-reference/50%20Common/utils/ui/notify(options_stack).md '/Documentation/ApiReference/Common/Utils/ui/#notifyoptions_stack') method (depending on the complexity of the notification content). The first method accepts only the [message](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/message.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#message') as the first argument, while the second method accepts a Toast configuration object. The second argument in both methods specifies stacking settings.

For more information about stacking Toasts, refer to the following online demo: [Toast Stack Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toast/Stack/).

You can specify one of the four predefined types of notifications, depending on the message:

- *'info'*   
A blue toast with a message bubble icon.

- *'warning'*   
A yellow toast with an exclamation mark icon.

- *'error'*   
A red toast with an **X** icon.

- *'success'*   
A green toast with a check mark icon.

If you call the method that allows additional options, you can set the [width](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#width'), [height](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#height') [position](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/position.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#position'), and [other options](/api-reference/10%20UI%20Components/dxToast/1%20Configuration '/Documentation/ApiReference/UI_Components/dxToast/Configuration/'). The configuration of the **position** property in the example below reads as follows: "place **my** *bottom* side **at** the *bottom* side **of** the *"#container"*.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const types = ['error', 'info', 'success', 'warning'];

        $("#show-message").dxButton({
            text: "Show message",
            onClick: function() {
                DevExpress.ui.notify(
                    {
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
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <link rel="stylesheet" type="text/css" href="index.css">
        </head>
        <body>
            <div id="container">
                <div id="buttons">
                    <div id="show-message"></div>
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
            notify(
                {
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
                notify(
                    {
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
        notify(
            {
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

