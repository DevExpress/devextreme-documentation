[important] Refer to the [CSV Injection](/concepts/Common/Security%20Considerations/30%20Export%20Vulnerabilities/05%20CSV%20Injection.md '/Documentation/Guide/Common/Security_Considerations/#Export_Vulnerabilities/CSV_Injection') section for information about CSV Injection Attacks.

You can also export PivotGrid to CSV. To do this, call the **exportPivotGrid(options)** method as follows:

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        const pivotGrid = $('#gridContainer').dxPivotGrid({
            onExporting: function(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Employees');
                DevExpress.excelExporter.exportPivotGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                    workbook.csv.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Report.csv");
                    });
                });
            },
        }).dxPivotGrid('instance');
    });

##### Angular   
    
    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Workbook } from 'devextreme-exceljs-fork';
    import { saveAs } from 'file-saver-es';
    import { exportPivotGrid } from 'devextreme/excel_exporter';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxPivotGridComponent, { static: false }) pivotGrid: DxPivotGridComponent;
        onExporting: function(e) {
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Employees');
            exportPivotGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
                workbook.csv.writeBuffer().then(function(buffer) {
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Report.csv");
                });
            });
        }
    }

    <!-- tab: app.component.html -->
    <dx-pivot-grid ... 
        (onExporting)="onExporting($event)"
    >
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxPivotGrid ...
                @exporting="onExporting"
            />
        </div>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.light.css';
    import { DxPivotGrid, DxPivotGridTypes } from 'devextreme-vue/pivot-grid';
    import { Workbook } from 'devextreme-exceljs-fork';
    import { saveAs } from 'file-saver-es';
    import { exportPivotGrid } from 'devextreme/excel_exporter';

    function onExporting(e: DxPivotGridTypes.ExportingEvent) {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Employees');
        exportPivotGrid({
            component: e.component,
            worksheet: worksheet
        }).then(function() {
            workbook.csv.writeBuffer().then(function(buffer) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Report.csv");
            });
        });
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import PivotGrid, { PivotGridTypes } from 'devextreme-react/pivot-grid';
    import { Workbook } from 'devextreme-exceljs-fork';
    import { saveAs } from 'file-saver-es';
    import { exportPivotGrid } from 'devextreme/excel_exporter';

    const onExporting = (e: PivotGridTypes.ExportingEvent) => {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Employees');
        exportPivotGrid({
            component: e.component,
            worksheet: worksheet
        }).then(function() {
            workbook.csv.writeBuffer().then(function(buffer) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Report.csv");
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