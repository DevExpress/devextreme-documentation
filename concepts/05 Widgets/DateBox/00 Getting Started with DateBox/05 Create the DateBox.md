Use the following code to create a basic **DateBox**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateBox").dxDateBox({
            // Configuration goes here
         });
    });

    <!-- tab: index.html -->
    <!DOCTYPE html>
    <html>
        <head>
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/20.1.4/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="dateBox"></div>
        </body>
    </html>

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box
        <!-- Configuration goes here -->
    >
    </dx-date-box>

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

    import { DxDateBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDateBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox
            <!-- Configuration goes here -->
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateBox } from 'devextreme-vue/date-box';

    export default {
        components: {
            DxDateBox
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DateBox } from 'devextreme-react/date-box';

    class App extends React.Component {
        render() {
            return (
                <DateBox      
                    // Configuration goes here
                />
            );
        }
    }
    export default App;

---

If you run this code, you will that see the **DateBox** that allows users to set the date only. Users will be allowed to set the time in the next step.