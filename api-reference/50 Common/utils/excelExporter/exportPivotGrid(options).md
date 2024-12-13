---
id: excelExporter.exportPivotGrid(options)
module: common/export/excel
export: exportPivotGrid
---
---
##### shortDescription
Exports pivot grid data to Excel.

##### return: Promise<CellRange>
<!-- %return% -->

##### param(options): PivotGridExport_Options
<!-- %param(options)% -->

---
This method requires <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4.4.0+ to export data and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+ to save files. If you apply [CSP rules](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/00%20Content%20Security%20Policy.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy'), refer to the [ExcelJS CSP Treats](/concepts/Common/Security%20Considerations/30%20Export%20Vulnerabilities/20%20ExcelJS%20CSP%20Threats.md '/Documentation/Guide/Common/Security_Considerations/#Export_Vulnerabilities/ExcelJS_CSP_Threats') section to read more about potential vulnerabilities.

You can call this method at any point in your application. In the example below, this method is called in the [onExporting](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onExporting') function that is executed before data is exported. The **cancel** parameter is enabled to prevent the built-in export. As a result, the PivotGrid is exported to a single worksheet. 

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
        }
    });

    <!--HTML-->
    <head>
        <!-- ... -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js"></script>
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
                    worksheet: worksheet
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
    }

---    

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ExcelJSOverview/"
}

#include uiwidgets-grids-export-csv with {
    componentName: "PivotGrid"
}

#####See Also#####
- [export](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/')

<!-- import * from 'api-reference\50 Common\utils\excelExporter\exportDataGrid(options).md' -->

[tags] xlsx, csv
