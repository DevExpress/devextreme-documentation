---
id: pdfExporter.exportDataGrid(options)
module: pdf_exporter
---
---
##### shortDescription
Exports grid data to a PDF file.

##### return: Promise<void>
A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a> that is resolved with an object that contains the coordinates of the first and last cells.

##### param(options): PdfExportDataGridProps
Export settings.

---
This method requires <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4+ to export data and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+ to save files.

You can call this method at any point in your application.

---
##### jQuery

    <!--JavaScript-->
    $('#gridContainer').dxDataGrid({
        export: {
            enabled: true
        },
        onExporting: function(e) { 
            const workbook = new ExcelJS.Workbook(); 
            const worksheet = workbook.addWorksheet('Main sheet'); 
        
            DevExpress.excelExporter.exportDataGrid({ 
                worksheet: worksheet, 
                component: e.component 
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer) { 
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx'); 
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
            const worksheet = workbook.addWorksheet('Main sheet');
            exportDataGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
                workbook.xlsx.writeBuffer()
                    .then(function(buffer: BlobPart) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

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
                const worksheet = workbook.addWorksheet('Main sheet');

                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                    workbook.xlsx.writeBuffer()
                        .then(function(buffer) {
                            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
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

    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    onExporting={this.onExporting}>
                    <Export enabled={true} />
                </DataGrid>
            );
        }

        onExporting(e) {
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Main sheet');

            exportDataGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
                workbook.xlsx.writeBuffer()
                    .then(function(buffer) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                    });
            });
            e.cancel = true;
        }
    }
    export default App;

---     


#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExportToPDF/"
}