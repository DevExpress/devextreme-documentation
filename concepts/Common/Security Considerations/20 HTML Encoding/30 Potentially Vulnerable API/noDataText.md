The [noDataText](/Documentation/ApiReference/UI_Components/dxList/Configuration/#noDataText) property specifies text to display when the UI component does not contain any data. This property can accept an HTML string that the component evaluates. This makes the **noDataText** property potentially vulnerable to XSS attacks. If the **noDataText** value comes from a third party (loaded from a data source, inputted by a user), encode this value to protect against harmful code.

The following example illustrates how an unsafe **noDataText** value can affect your application: <a href="https://codepen.io/romantsukanov/pen/vYmZzPR?editors=1010" target="_blank">noDataText - Potential XSS Vulnerability</a>. You should encode the value as follows:

---
##### jQuery

    <!-- tab: index.js -->
    const noDataTextUnsafe = "No data to display<img src=1 onerror=alert('XSS') \/>";
    const encodeMessage = (message) => {
        // ...
        // Encode the `message` string with your favorite sanitizing tool
        // ...
        return encodedMessage;
    };

    $(function() {
        $("#simpleList").dxList({
            // ...
            noDataText: encodeMessage(noDataTextUnsafe)
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-list ...
        [noDataText]="noDataTextEncoded">
    </dx-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        noDataTextEncoded: string;
        constructor() {
            const noDataTextUnsafe = "No data to display<img src=1 onerror=alert('XSS') \/>";
            this.noDataTextEncoded = this.encodeMessage(noDataTextUnsafe);
        }
        encodeMessage (message) {
            // ...
            // Encode the `message` string with your favorite sanitizing tool
            // ...
            return encodedMessage;
        };

    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxListModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxListModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            :no-data-text="noDataTextEncoded"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    const noDataTextUnsafe = "No data to display<img src=1 onerror=alert('XSS') \/>";

    const encodeMessage = (message) => {
        // ...
        // Encode the `message` string with your favorite sanitizing tool
        // ...
        return encodedMessage;
    };

    export default {
        components: {
            DxList
        },
        data() {
            return {
                // ...
                noDataTextEncoded: encodeMessage(noDataTextUnsafe)
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';

    const encodeMessage = (message) => {
        // ...
        // Encode the `message` string with your favorite sanitizing tool
        // ...
        return encodedMessage;
    };

    export default function App() {
        const noDataTextUnsafe = "No data to display<img src=1 onerror=alert('XSS') \/>";
        const noDataTextEncoded = encodeMessage(noDataTextUnsafe);

        return (
            <List ...
                noDataText={noDataTextEncoded}
            />
        );
    }

---

    