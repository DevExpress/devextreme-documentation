---
id: dxPivotGrid.Options.export
type: Object
---
---
##### shortDescription
Configures client-side exporting.

---
A user can click the **Export** button to save an Excel file with the exported data. Data types, sort, filter, and group settings are maintained.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ExcelJSOverview/"
}

The following instructions show how to enable and configure client-side export:

1. **Install or reference the required libraries**  
    This feature requires <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4.4.0+ and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+. If you apply [CSP rules](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/00%20Content%20Security%20Policy.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy'), refer to the [ExcelJS CSP Treats](/concepts/Common/Security%20Considerations/30%20Export%20Vulnerabilities/20%20ExcelJS%20CSP%20Threats.md '/Documentation/Guide/Common/Security_Considerations/#Export_Vulnerabilities/ExcelJS_CSP_Threats') section to read more about potential vulnerabilities.

    ---
    ##### jQuery
        <!--HTML-->
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>
            <!-- reference the DevExtreme sources here -->
        </head>

    ##### Angular   

        <!-- tab: Installation command -->
        npm install --save exceljs file-saver

        <!-- tab: tsconfig.app.json -->
        {
            "compilerOptions": {
                // ...
                "paths": {
                    // ...
                    "exceljs": [
                        "node_modules/exceljs/dist/exceljs.min.js"
                    ]
                }
            }
        }

    ##### Vue

        npm install --save exceljs file-saver

        
    ##### React

        npm install --save exceljs file-saver
        
    ---     

2. **Enable the export UI**   
    Set the **export**.[enabled](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/#enabled') property to **true**:

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
    Implement the [onExporting](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onExporting') handler and call the [exportPivotGrid(options)](/api-reference/50%20Common/utils/excelExporter/exportPivotGrid(options).md '/Documentation/ApiReference/Common/Utils/excelExporter/#exportPivotGridoptions') method in it. In the code below, this method exports the PivotGrid as is, but you can use [PivotGridExportOptions](/api-reference/50%20Common/Object%20Structures/PivotGridExportOptions '/Documentation/ApiReference/Common/Object_Structures/PivotGridExportOptions/') to configure export settings, including [cell customization](/api-reference/50%20Common/Object%20Structures/PivotGridExportOptions/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/PivotGridExportOptions/#customizeCell'). The PivotGrid is exported to an Excel worksheet that is created using the ExcelJS API. To save the Excel document, call the FileSaver's **saveAs** method.

    ---
    ##### jQuery

        <!--tab: index.js-->
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
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import { Workbook } from 'exceljs';
        import saveAs from 'file-saver';
        import PivotGrid, { Export } from 'devextreme-react/pivot-grid';
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
        }

    --- 

The following restrictions apply when users export PivotGrid:   

- Only XLSX files are supported out of the box. To export PivotGrid to CSV, call the **exportPivotGrid(options)** method as shown in the following ticket: <a href="https://supportcenter.devexpress.com/ticket/details/t920593/pivotgrid-exceljs-export-to-export-pivotgrid-into-csv-file" target="_blank">Export PivotGrid into CSV file</a>.
- Only visible rows and columns are exported.

[tags] xlsx, csv
