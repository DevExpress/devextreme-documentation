---
id: dxPivotGrid.Options.export
type: Object
---
---
##### shortDescription
Configures client-side exporting.

---
A user can click the **Export** button to save an Excel file with the exported data. Data types, sorting, filtering, and grouping settings are maintained.

The following instructions show how to enable and configure client-side export:

1. **Install or reference the required libraries**  
    This feature requires <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4+ and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+. 

    ---
    ##### jQuery
        <!--HTML-->
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.1.1/exceljs.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>
            <!-- reference the DevExtreme sources here -->
        </head>

    ##### Angular   

        <!-- tab: Installation command -->
        npm install --save exceljs file-saver

        <!-- tab: tsconfig.app.json -->
        "compilerOptions": {
            // ...
            "paths": {
                // ...
                "exceljs": [
                    "node_modules/exceljs/dist/exceljs.js"
                ]
            }
        }

    ##### Vue

        npm install --save exceljs file-saver

        
    ##### React

        npm install --save exceljs file-saver
        
    ---     

2. **Enable the export UI**   
    Set the **export**.[enabled](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/#enabled') option to **true**:

    ---

    ##### jQuery

        <!--JavaScript-->
        $(function () {
            $("#pivotGridContainer").dxPivotGrid({
                export: {
                    enabled: true
                }
            });
        });

    ##### Angular   

        <!-- tab: app.component.html -->
        <dx-pivot-grid ... >
            <dxo-export [enabled]="true"></dxo-export>
        </dx-pivot-grid>

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
            <DxPivotGrid ... >
                <DxExport
                    :enabled="true"
                />
            </DxPivotGrid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { DxPivotGrid, 
            DxExport,
            DxColumn
        } from 'devextreme-vue/pivot-grid';

        export default {
            components: {
                DxPivotGrid,
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

        import PivotGrid, {
            Export,
            Column
        } from 'devextreme-react/pivot-grid';

        export default function App() {
            return (
                <PivotGrid ... >
                    <Export enabled={true} />
                </PivotGrid>
            );
        }

    ---

3. **Export the PivotGrid**   
    Implement the [onExporting](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onExporting) handler and call the [exportPivotGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportPivotGridoptions) method in it. In the code below, this method exports the **PivotGrid** as is, but you can use [ExportPivotGridProps](/Documentation/ApiReference/Common/Object_Structures/ExportPivotGridProps/) to configure export settings, including [cell customization](/Documentation/ApiReference/Common/Object_Structures/ExportPivotGridProps/#customizeCell). The **PivotGrid** is exported to an Excel worksheet that is created using the ExcelJS API. To save the Excel document, call the FileSaver's **saveAs** method. The `e.cancel` parameter disables the deprecated built-in export implementation with fewer capabilities.

    ---
    ##### jQuery

        <!--JavaScript-->
        $('#gridContainer').dxPivotGrid({
            export: {
                enabled: true
            },
            onExporting: function(e) { 
                var workbook = new ExcelJS.Workbook(); 
                var worksheet = workbook.addWorksheet('Main sheet'); 
                DevExpress.excelExporter.exportPivotGrid({ 
                    worksheet: worksheet, 
                    component: e.component,
                    customizeCell: function(options) {
                        var excelCell = options;
                        excelCell.font = { name: 'Arial', size: 12 };
                        excelCell.alignment = { horizontal: 'left' };
                    } 
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) { 
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'PivotGrid.xlsx'); 
                    }); 
                }); 
                e.cancel = true; 
            }
        });

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
                    worksheet: worksheet,
                    customizeCell: function(options) {
                        const excelCell = options;
                        excelCell.font = { name: 'Arial', size: 12 };
                        excelCell.alignment = { horizontal: 'left' };
                    } 
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
                        worksheet: worksheet,
                        customizeCell: function(options) {
                            const excelCell = options;
                            excelCell.font = { name: 'Arial', size: 12 };
                            excelCell.alignment = { horizontal: 'left' };
                        } 
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

        import { Workbook } from 'exceljs';
        import saveAs from 'file-saver';
        import PivotGrid, { Export } from 'devextreme-react/pivot-grid';
        import { exportPivotGrid } from 'devextreme/excel_exporter';

        export default function App() {
            return (
                <PivotGrid ...
                    onExporting={this.onExporting}>
                    <Export enabled={true} />
                </PivotGrid>
            );
        }

        function onExporting(e) {
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Main sheet');
            exportPivotGrid({
                component: e.component,
                worksheet: worksheet,
                customizeCell: function(options) {
                    const excelCell = options;
                    excelCell.font = { name: 'Arial', size: 12 };
                    excelCell.alignment = { horizontal: 'left' };
                } 
            }).then(function() {
                workbook.xlsx.writeBuffer()
                    .then(function(buffer) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'PivotGrid.xlsx');
                    });
            });
            e.cancel = true;
        }

    --- 

The following restrictions apply when users export **PivotGrid**:   

- Only XLSX files are supported.
- Only visible rows and columns are exported.
