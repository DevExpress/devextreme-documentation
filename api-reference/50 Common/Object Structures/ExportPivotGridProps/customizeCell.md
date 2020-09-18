---
id: ExportPivotGridProps.customizeCell
type: function(options)
---
---
##### shortDescription
<!-- %shortDescription% -->

##### param(options): Object
<!-- %param(options)% -->

##### field(options.excelCell): Object
<!-- %field(options.excelCell)% -->

##### field(options.pivotCell): ExcelPivotGridCell
A **PivotGrid** cell.

---
In the following code, the **customizeCell** function customizes <a href="https://github.com/exceljs/exceljs#fonts" target="_blank">font</a> and <a href="https://github.com/exceljs/exceljs#alignment" target="_blank">alignment</a> in cells that display regular summaries (whose [rowType](/api-reference/10%20UI%20Widgets/dxPivotGrid/6%20Pivot%20Grid%20Cell/rowType.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Pivot_Grid_Cell/#rowType') is *"D"*):

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#pivotGridContainer").dxPivotGrid({
            // ...
            export: {
                enabled: true
            },
            onExporting(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Companies');

                DevExpress.excelExporter.exportPivotGrid({
                    component: e.component,
                    worksheet: worksheet,
                    topLeftCell: { row: 2, column: 2 },
                    customizeCell: function(options) {
                        const { pivotCell, excelCell } = options;

                        if(pivotCell.rowType === 'D') {
                            excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                            excelCell.alignment = { horizontal: 'left' };
                        }
                    }
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
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
            const worksheet = workbook.addWorksheet('Companies');

            exportPivotGrid({
                component: e.component,
                worksheet: worksheet,
                topLeftCell: { row: 2, column: 2 },
                customizeCell: function(options) {
                    const { pivotCell, excelCell } = options;
                    
                    if(pivotCell.rowType === 'D') {
                        excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                        excelCell.alignment = { horizontal: 'left' };
                    }
                }
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) {
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
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
                const worksheet = workbook.addWorksheet('Companies');

                exportPivotGrid({
                    component: e.component,
                    worksheet: worksheet,
                    topLeftCell: { row: 2, column: 2 },
                    customizeCell: function(options) {
                        const { pivotCell, excelCell } = options;
                        
                        if(pivotCell.rowType === 'D') {
                            excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                            excelCell.alignment = { horizontal: 'left' };
                        }
                    }
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
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
        const worksheet = workbook.addWorksheet('Companies');

        exportPivotGrid({
            component: e.component,
            worksheet: worksheet,
            topLeftCell: { row: 2, column: 2 },
            customizeCell: function(options) {
                const { pivotCell, excelCell } = options;
                
                if(pivotCell.rowType === 'D') {
                    excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                    excelCell.alignment = { horizontal: 'left' };
                }
            }
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
            });
        });
        e.cancel = true;
    }

--- 


<!-- import * from 'api-reference\50 Common\Object Structures\ExportDataGridProps\customizeCell.md' -->
