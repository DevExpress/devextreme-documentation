If you use DataGrid or PivotGrid Export functionality, you should consider a threat of a CSV Injection Attack (also called formula injection attack). It involves the injection of harmful characters that act as a formula and are executed within a computer network. Cell values that begin with the **=, +, -** and **@** characters can initiate an injection attack.

When you enter the malicious code into CSV files (in the form of a formula), the formula can be executed. Once executed, the malicious formula can manipulate/delete user data or provide unauthorized access to data/internal resources.

You can encode the CSV files to prevent execution of harmful code in the exported files. Pass the [encodeExecutableContent](/Documentation/ApiReference/Common/Object_Structures/ExcelExportDataGridProps/#encodeExecutableContent) option as an argument of the configuration object of the [exportDataGrid](/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) or [exportPivotGrid](/Documentation/ApiReference/Common/Utils/excelExporter/#exportPivotGridoptions) function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            export: {
                enabled: true
            },
            onExporting(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Employees');

                DevExpress.excelExporter.exportDataGrid({
                    component: e.component,
                    worksheet: worksheet,
                    encodeExecutableContent: true,
                }).then(() => {
                    workbook.csv.writeBuffer().then((buffer) => {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.csv');
                    });
                });
                e.cancel = true;
            }
        });
    });

    <!--HTML-->
    <head>
        <!-- ... -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/3.3.1/exceljs.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>
        <!-- reference the DevExtreme sources here -->
    </head>

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onExporting)="onExporting($event)">
        <dxo-export [enabled]="true"></dxo-export>
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
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Employees');

            exportDataGrid({
                component: e.component,
                worksheet: worksheet,
                encodeExecutableContent: true,
            }).then(() => {
                workbook.csv.writeBuffer().then((buffer) => {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.csv');
                });
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
            <DxExport
                :enabled="true"
            />
        </DxDataGrid>
    </template>

    <script>
    // ...
    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';

    export default {
        components: {
            DxDataGrid,
            DxExport
        },
        methods: {
            onExporting(e) {
                const workbook = new Workbook();
                const worksheet = workbook.addWorksheet('Employees');

                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet,
                    encodeExecutableContent: true,
                }).then(function() {
                    workbook.csv.writeBuffer().then((buffer) => {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.csv');
                    });
                });
                e.cancel = true;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    // ...

    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';

    const App = () => {
        const onExporting = useCallback((e) => {
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Employees');

            exportDataGrid({
                component: e.component,
                worksheet: worksheet,
                encodeExecutableContent: true,
            }).then(function() {
                workbook.csv.writeBuffer().then((buffer) => {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.csv');
                });
            });
            e.cancel = true;
        }, []);

        return (
            <DataGrid ...
                onExporting={onExporting}>
                <Export enabled={true} />
            </DataGrid>
        );
    }

    export default App;

---
