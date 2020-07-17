Use the code below to create an empty **SelectBox**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#selectBox").dxSelectBox({ });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/20.1.4/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="selectBox"></div>
        </body>
    </html>


##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box></dx-select-box>

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

    import { DxSelectBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSelectBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            DxSelectBox
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { SelectBox } from 'devextreme-react/select-box';

    class App extends React.Component {
        render() {
            return (
                <SelectBox/>
            );
        }
    }
    export default App;

---

Run the code and ensure the **SelectBox** is displayed and its drop-down list says "No data to display." In the next step, we will add a data source.