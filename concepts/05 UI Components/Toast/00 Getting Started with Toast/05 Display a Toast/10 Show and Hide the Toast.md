When you need to show a notification in Angular, Vue, or React, you can use one of the **notify** methods described in the section above. If you want to customize Toast content, bind the [visible](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#visible') property of the Toast component to a component (Button in the example) property. After that, you can change this property to show or hide the Toast notification.

---
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
                type="info"
                message="You have a new message"
            >  
                <dxo-position
                    my="bottom"
                    at="bottom"
                    of="#container">
                </dxo-position>
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
                type="info"
                message="You have a new message"    
            >   
                <DxPosition
                    my="bottom"
                    at="bottom"
                    of="#container"
                />
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
                    type="info"
                    message="You have a new message"
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

---