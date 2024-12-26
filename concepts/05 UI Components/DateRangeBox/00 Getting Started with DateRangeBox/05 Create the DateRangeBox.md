Use the following code to create a basic DateRangeBox:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            // Configuration goes here
        });
    });

    <!-- tab: index.html -->
    <!DOCTYPE html>
    <html>
        <head>
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="dateRangeBox"></div>
        </body>
    </html>

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box
        // Configuration goes here
    ></dx-date-range-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {}

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDateRangeBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDateRangeBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    
    export class AppModule { }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxDateRangeBox
            // Configuration goes here
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';

    export default {
        components: {
            DxDateRangeBox
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxDateRangeBox
            // Configuration goes here  
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DateRangeBox } from 'devextreme-react/date-range-box';

    export default function App() { 
        return (
            <DateRangeBox ...
                // Configuration goes here
            />
        );
    }

---

Run this code. You will see a DateRangeBox component that allows users to enter or pick two dates (a date range). The next step configures date range constraints.
