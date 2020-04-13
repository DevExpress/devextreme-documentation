A user can click the **Export** button to save an Excel file with the exported data. Insure that the[exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) method is specified and the [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) handler is configured to prevent the built-in export. Data types, sorting, filtering, and grouping settings are maintained.

![DevExtreme HTML5 JavaScript DataGrid Export Button](/images/DataGrid/exported_data.png)

To allow users to export data, set the **export**.[enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled') option to **true**.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            export: {
                enabled: true
            }
        });
    });


##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-export [enabled]="true"></dxo-export>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
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


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxExport
                :enabled="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid,
        DxExport 
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxExport
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Export
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Export enabled={true} />
                </DataGrid>
            );
        }
    }
    export default App;

---

You can disable exporting a specific column by setting its [allowExporting](/api-reference/_hidden/dxDataGridColumn/allowExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting') option to **false**:

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            export: {
                enabled: true
            },
            columns: [{ ...
                allowExporting: false
            }, 
                // ...
            ]
        });
    });

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-export [enabled]="true"></dxo-export>
        <dxi-column ...
            [allowExporting]="false">
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
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


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxExport
                :enabled="true"
            />
            <DxColumn ... 
                :allow-exporting="false"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, 
        DxExport,
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxExport,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Export,
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Export enabled={true} />
                    <Column ...
                        allowExporting={false}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---


