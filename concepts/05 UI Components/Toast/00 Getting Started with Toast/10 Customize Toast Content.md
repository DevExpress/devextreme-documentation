To customize toast content, either specify a [contentTemplate](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#contentTemplate) function or a custom template inside a component. Use `.dx-toast-custom` CSS class for the template and set the [type](/Documentation/ApiReference/UI_Components/dxToast/Configuration/#type) property to `custom`.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...
        $("#show-custom-message").dxButton({
            text: "Show custom message",
            onClick: function() {
                DevExpress.ui.notify(
                    {
                        width: 230,
                        height: 50,
                        position: {
                            my: "bottom",
                            at: "bottom",
                            of: "#container"
                        },
                        contentTemplate: function () {
                            return $('.dx-toast-custom')
                            .append('<p>You have a new message</p> &nbsp;')
                            .append('<i class="dx-icon-email icon-style"></i>');
                        }
                    }, 
                    "custom", 
                    500
                );
            },
        });
        
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
        </head>
        <body>
            <div id="container">
                <div id="buttons">
                    <!-- ... -->
                    <div id="show-custom-message"></div>
                </div>
            </div>
        </body>
    </html>

    <!-- tab: index.css -->
    /*  */

    .dx-toast-custom {
        background-color: #F05B41;
        color: white;
        border-radius: 5px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-style {
        margin-top: 3px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <div id="container">
        <div id="buttons">
            <!-- ... -->
            <dx-button
                text="Show custom message"
                (onClick)="showCustomMessage()"
            >
            </dx-button>
            <dx-toast
                [(visible)]="isVisible"
                [width]="230"
                [height]="50"
                type="custom"
            >  
                <dxo-position
                    my="bottom"
                    at="bottom"
                    of="#container">
                </dxo-position>
                <div *dxTemplate="let data of 'content'" class="dx-toast-custom">
                    <span>You have a new message &nbsp;</span><i class="dx-icon-email icon-style"></i>
                </div>
            </dx-toast>
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
        // ...
        isVisible: boolean = false;
        showCustomMessage() {
            this.isVisible = true;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxButtonModule, DxToastModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxButtonModule,
            DxToastModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    /*  */

    .dx-toast-custom {
        background-color: #F05B41;
        color: white;
        border-radius: 5px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-style {
        margin-top: 3px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="container">
            <div id="buttons">
                <!-- ... -->
                <dxButton
                    text="Show custom message"
                    @click="showCustomMessage"
                >
                </dxButton>
            </div>
            <dxToast
                v-model:visible="isVisible"
                content-template="custom-template"
                :width="230"
                :height="50"
                type="custom"    
            >   
                <DxPosition
                    my="bottom"
                    at="bottom"
                    of="#container"
                />
                <template #custom-template>
                    <span>You have a new message &nbsp;</span><i class='dx-icon-email icon-style'></i>
                </template>
            </dxToast>
            </div>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxButton } from 'devextreme-vue/button';
    import { DxToast, DxPosition } from 'devextreme-vue/toast';
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxButton,
            DxToast,
            DxPosition
        }
        data() {
            return {
                // ...
                isVisible: false
            };
        },
        methods: {    
            // ...
            showCustomMessage() {
                this.isVisible = true;
            }
        }
    }
    </script>

    <style>
        /*  */

        .dx-toast-custom {
            background-color: #F05B41;
            color: white;
            border-radius: 5px;
            padding: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-style {
            margin-top: 3px;
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { Button } from 'devextreme-react/button';
    import { Toast, Position } from 'devextreme-react/toast';
    import notify from 'devextreme/ui/notify';

    function App() {
        const [isVisible, setIsVisible] = useState(false);
        const showCustomMessage = () => {
            setIsVisible(true);
        }
        const onHiding = () => {
            setIsVisible(false);
        }
        const contentRender = () => {
            return (
                <div class="flexbox"><span>You have a new message &nbsp;</span><i class='dx-icon-email icon-style'></i></div>
            );
        }
        return (
            <div id="container">
                <div id="buttons">
                    <!-- ... -->
                    <Button
                        text="Show custom message"
                        onClick={showCustomMessage}
                    >
                    </Button>
                </div>
                <Toast
                    visible={isVisible}
                    width={230}
                    height={50}
                    type="custom"
                    contentRender={contentRender}
                    onHiding={onHiding}    
                >   
                    <Position
                        my="bottom"
                        at="bottom"
                        of="#container"
                    />
                </Toast>
            </div>
        );
    }

    export default App;

    <!-- tab: index.css -->
        /*  */

    .dx-toast-custom {
        background-color: #F05B41;
        color: white;
        border-radius: 5px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
        
    .flexbox {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-style {
        margin-top: 3px;
    }

---