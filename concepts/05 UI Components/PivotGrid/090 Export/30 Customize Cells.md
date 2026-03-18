Use the [customizeCell](/api-reference/50%20Common/Object%20Structures/PivotGridExportOptions/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/PivotGridExportOptions/#customizeCell') function inside the **exportPivotGrid** method to customize exported cells.

For instance, to [outline (group)](https://support.microsoft.com/en-us/office/outline-group-data-in-a-worksheet-08ce98c4-0063-4d42-8ac7-8278c49e9aff) data in an Excel worksheet, define **customizeCell** as shown below:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#pivotGridContainer").dxPivotGrid({
            // ...
            onExporting(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Companies');

                DevExpress.excelExporter.exportPivotGrid({
                    component: e.component,
                    worksheet: worksheet,
                    topLeftCell: { row: 2, column: 2 },
                    customizeCell(e) {
                        if (e.pivotCell.area === 'row' && e.pivotCell.path?.length > 0) {
                            worksheet.getRow(e.pivotCell.rowIndex + 1).outlineLevel = e.pivotCell.path.length - 1;
                        }
                    }
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
                    });
                });
            }
        });
    });

##### Angular   

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { exportPivotGrid } from 'devextreme/excel_exporter';
    import { Workbook } from 'devextreme-exceljs-fork';
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
                customizeCell(e) {
                    if (e.pivotCell.area === 'row' && e.pivotCell.path?.length > 0) {
                        worksheet.getRow(e.pivotCell.rowIndex + 1).outlineLevel = e.pivotCell.path.length - 1;
                    }
                }
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) {
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
                });
            });
        }
    }

    <!-- tab: app.component.html -->
    <dx-pivot-grid ...
        (onExporting)="onExporting($event)">
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ... @exporting="onExporting" />
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { DxPivotGrid, DxPivotGridTypes } from 'devextreme-vue/pivot-grid';
    import { Workbook } from 'devextreme-exceljs-fork';
    import { saveAs } from 'file-saver-es';
    import { exportPivotGrid } from 'devextreme/excel_exporter';

    function onExporting(e: DxPivotGridTypes.ExportingEvent) {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Companies');
        exportPivotGrid({
            component: e.component,
            worksheet: worksheet,
            customizeCell(e) {
                if (e.pivotCell.area === 'row' && e.pivotCell.path?.length > 0) {
                    worksheet.getRow(e.pivotCell.rowIndex + 1).outlineLevel = e.pivotCell.path.length - 1;
                }
            }
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
            });
        });
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import PivotGrid, { PivotGridTypes } from 'devextreme-react/pivot-grid';
    import { Workbook } from 'devextreme-exceljs-fork';
    import { saveAs } from 'file-saver-es';
    import { exportPivotGrid } from 'devextreme/excel_exporter';

    const onExporting = (e: PivotGridTypes.ExportingEvent) => {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Companies');
        exportPivotGrid({
            component: e.component,
            worksheet: worksheet,
            customizeCell(e) {
                if (e.pivotCell.area === 'row' && e.pivotCell.path?.length > 0) {
                    worksheet.getRow(e.pivotCell.rowIndex + 1).outlineLevel = e.pivotCell.path.length - 1;
                }
            }
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
            });
        });
    };

    export default function App() {
        return (
            <PivotGrid ...
                onExporting={onExporting}
            />
        );
    }

--- 

For another example of customizing your exported PivotGrid, see the following demo:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ExcelJSCellCustomization/"
}