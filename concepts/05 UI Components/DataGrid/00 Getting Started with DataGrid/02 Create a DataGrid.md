---
##### jQuery

[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a DataGrid:

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // Configuration goes here
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <link rel="stylesheet" href="index.css">

            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="dataGrid"></div>
        </body>
    </html>

    <!-- tab: index.css -->
    #dataGrid {
        height: 500px;
    }

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a DataGrid:

    <!-- tab: app.component.html -->
    <dx-data-grid id="dataGrid"
        <!-- Configuration goes here -->
    >
    </dx-data-grid>

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

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    #dataGrid {
        height: 500px;
    }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a DataGrid:

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid id="dataGrid">
                <!-- Configuration goes here -->
            </DxDataGrid>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        }
    }
    </script>

    <style>
    #dataGrid {
        height: 500px;
    }
    </style>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a DataGrid:

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DataGrid
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid id="dataGrid">
                    {/* Configuration goes here */}
                </DataGrid>
            </div>
        );
    }

    export default App;

    <!-- tab: App.css -->
    #dataGrid {
        height: 500px;
    }

---
