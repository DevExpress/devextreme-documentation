---
id: excelExporter.exportPivotGrid(options)
module: excel_exporter
---
---
##### shortDescription
Exports pivot grid data to Excel.

##### return: Promise<CellRange>
<!-- %return% -->

##### param(options): ExportPivotGridProps
<!-- %param(options)% -->

---
This method requires <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4+ to export data and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+ to save files.

You can call this method at any point in your application. In the example below, this method is called in the [onExporting](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onExporting') function that is executed before data is exported. The **cancel** parameter is enabled to prevent the built-in export. As a result, the **PivotGrid** is exported to a single worksheet. 

---
##### jQuery

    <!--JavaScript-->
    $('#gridContainer').dxPivotGrid({
        export: {
            enabled: true
        },
        onExporting: function(e) { 
            const workbook = new ExcelJS.Workbook(); 
            const worksheet = workbook.addWorksheet('Main sheet'); 
        
            DevExpress.excelExporter.exportPivotGrid({ 
                worksheet: worksheet, 
                component: e.component 
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer) { 
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'PivotGrid.xlsx'); 
                }); 
            }); 
            e.cancel = true; 
        }
    });

    <!--HTML-->
    <head>
        <!-- ... -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.1.1/exceljs.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>
        <!-- reference the DevExtreme sources here -->
    </head>

##### Angular   

    <!-- tab: app.component.html -->
    <dx-pivot-grid ...
        (onExporting)="onExporting($event)">
        <dxo-export [enabled]="true"></dxo-export>
    </dx-pivot-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { exportPivotGrid } from 'devextreme/excel_exporter';
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
            const worksheet = workbook.addWorksheet('Main sheet');
            exportPivotGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
                workbook.xlsx.writeBuffer()
                    .then(function(buffer: BlobPart) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'PivotGrid.xlsx');
                    });
            });
            e.cancel = true; 
        }
    }


    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxPivotGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPivotGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ...
            @exporting="onExporting">
            <DxExport
                :enabled="true"
            />
        </DxPivotGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPivotGrid, DxExport } from 'devextreme-vue/pivot-grid';
    import { exportPivotGrid } from 'devextreme/excel_exporter';
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';

    export default {
        components: {
            DxPivotGrid,
            DxExport
        },
        methods: {
            onExporting(e) {
                const workbook = new Workbook();
                const worksheet = workbook.addWorksheet('Main sheet');

                exportPivotGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                    workbook.xlsx.writeBuffer()
                        .then(function(buffer) {
                            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'PivotGrid.xlsx');
                        });
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

    import PivotGrid, { Export } from 'devextreme-react/pivot-grid';
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import { exportPivotGrid } from 'devextreme/excel_exporter';

    export default function App() {
        return (
            <PivotGrid ...
                onExporting={onExporting}>
                <Export enabled={true} />
            </PivotGrid>
        );
    }

    function onExporting(e) {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Main sheet');

        exportPivotGrid({
            component: e.component,
            worksheet: worksheet
        }).then(function() {
            workbook.xlsx.writeBuffer()
                .then(function(buffer) {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'PivotGrid.xlsx');
                });
        });
        e.cancel = true;
    }

---     

<!-- import * from 'api-reference\50 Common\utils\excelExporter\exportDataGrid(options).md' -->
