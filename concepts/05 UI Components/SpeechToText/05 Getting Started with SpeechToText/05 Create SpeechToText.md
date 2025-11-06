[Add DevExtreme to your {Framework} application](/Documentation/Guide/{framework}_Components/Add_DevExtreme_to_a_{framework}_Application/) and use the following code to create a SpeechToText:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#speech-to-text").dxSpeechToText({});
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_2/css/dx.fluent.blue.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="speech-to-text"></div>
        </body>
    </html>

##### Angular

    <!-- tab: app.component.html -->
    <dx-speech-to-text></dx-speech-to-text>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { type DxSpeechToTextTypes } from 'devextreme-angular/ui/speech-to-text';

    <!-- tab: app.module.ts -->
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DxSpeechToTextModule } from 'devextreme-angular';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DxSpeechToTextModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: angular.json -->
    {
        // ...
        "styles": [
            "node_modules/devextreme/dist/css/dx.fluent.blue.light.css",
        ],
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { DxSpeechToText, type DxSpeechToTextTypes } from 'devextreme-vue/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    </script>
    <template>
        <DxSpeechToText />
    </template>

##### React

    <!-- tab: App.tsx -->
    import React, { JSX, useState } from 'react';
    import { SpeechToText, type SpeechToTextTypes } from 'devextreme-react/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    export default function App(): JSX.Element {
        return (
            <SpeechToText />
        );
    }

---