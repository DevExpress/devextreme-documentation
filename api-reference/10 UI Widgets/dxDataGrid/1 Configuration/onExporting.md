---
id: dxDataGrid.Options.onExporting
type: function(e)
default: null
EventForAction: dxDataGrid.exporting
---
---
##### shortDescription
A function that is executed before data is exported.

##### param(e): Object
Information about the event that caused the function execution.

##### field(e.cancel): Boolean
Allows you to cancel exporting data.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fileName): String
The name of the file where grid data is about to be exported.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
You can use this function to adjust column options before export. In the following code, the **column**.[visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible') option's value is changed to export the hidden `ID` column.  

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#gridContainer').dxDataGrid({
            // ...
            export: {
                enabled: true
            },
            columns: [{
                dataField: 'ID',
                visible: false
            }, {
                // ...
            }],
            onExporting: function(e) { 
                e.component.beginUpdate();
                e.component.columnOption('ID', 'visible', true);
                var workbook = new ExcelJS.Workbook(); 
                var worksheet = workbook.addWorksheet('Main sheet');

                DevExpress.excelExporter.exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                    });
                }).then(function() {
                    e.component.columnOption('ID', 'visible', false);
                    e.component.endUpdate();
                });
            
                e.cancel = true;
            }
        });
    });

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onExporting)="onExporting($event)">
        <dxo-export [enabled]="true"></dxo-export>
        <dxi-column dataField="ID" [visible]="false"></dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onExporting(e) {
            e.component.beginUpdate();
            e.component.columnOption('ID', 'visible', true);
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Employees');
        
            exportDataGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                });
            }).then(function() {
                e.component.columnOption('ID', 'visible', false);
                e.component.endUpdate();
            });
        
            e.cancel = true;
        }
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
        <DxDataGrid ...
            @exporting="onExporting">
            <DxExport :enabled="true" />
            <DxColumn data-field="ID" :visible="false" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxExport, DxColumn } from 'devextreme-vue/data-grid';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';

    export default {
        components: {
            DxDataGrid,
            DxExport,
            DxColumn
        },
        methods: {
            onExporting(e) {
                e.component.beginUpdate();
                e.component.columnOption('ID', 'visible', true);
                const workbook = new Workbook();
                const worksheet = workbook.addWorksheet('Employees');
            
                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                    });
                }).then(function() {
                    e.component.columnOption('ID', 'visible', false);
                    e.component.endUpdate();
                });
            
                e.cancel = true;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import DataGrid, { Export, Column } from 'devextreme-react/data-grid';
    import { exportDataGrid } from 'devextreme/excel_exporter';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    onExporting={this.onExporting}>
                    <Export enabled={true} />
                    <Column dataField="ID" visible={false} />
                </DataGrid>
            );
        }
        onExporting(e) {
            e.component.beginUpdate();
            e.component.columnOption('ID', 'visible', true);
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Employees');
        
            exportDataGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer) {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                });
            }).then(function() {
                e.component.columnOption('ID', 'visible', false);
                e.component.endUpdate();
            });
        
            e.cancel = true;
        }
    }
    export default App;

---

#####See Also#####
- [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/')