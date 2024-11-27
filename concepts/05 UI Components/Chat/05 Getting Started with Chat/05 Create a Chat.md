---
##### jQuery
[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a Chat component:

    <!-- tab: index.js -->
    $(function() {
        $("#chat").dxChat({ });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_24_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_24_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="chat"></div>
        </body>
    </html>


##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a Chat component:

    <!-- tab: app.component.html -->
    <dx-chat></dx-chat>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {

    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxChatModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChatModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a Chat component:

    <!-- tab: App.vue -->
    <template>
        <DxChat />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import { DxChat } from 'devextreme-vue/chat';
    </script>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a Chat component:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { Chat } from 'devextreme-react/chat';

    function App() {
        return (
            <Chat />
        );
    }

    export default App;

---

To limit the Chat size, use the [width](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#width) and [height](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#height) properties:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chat").dxChat({ 
            width: 400,
            height: 450,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat
        [width]="400"
        [height]="450"
    >
    </dx-chat>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat 
            width="400"
            height="450"
        />
    </template>

##### React

    <!-- tab: App.js -->
    function App() {
        return (
            <Chat
                width={400}
                height={450}
            />
        );
    }

    export default App;

---