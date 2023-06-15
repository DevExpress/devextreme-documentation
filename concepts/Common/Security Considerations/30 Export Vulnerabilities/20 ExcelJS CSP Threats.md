The DevExtreme DataGrid and PivotGrid components use the [ExcelJS](https://github.com/exceljs/exceljs) third-party library to export data to Excel. If you implement export functionality and apply [CSP rules](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/05%20Common%20CSP%20Directives.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy/Common_CSP_Directives'), you should include the following initialization code before code that loads ExcelJS sources: `window.regeneratorRuntime = null;` 

---
##### jQuery

    <!--HTML-->
    <head>
        <!-- ... -->
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'nonce-uqcb8z'
        cdnjs.cloudflare.com;" />
        <script nonce="uqcb8z">
            window.regeneratorRuntime = null;
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/3.3.1/exceljs.min.js"></script>
        <!-- reference the DevExtreme sources here -->
    </head>

    <!--JavaScript-->
    $(function(){
        const dataGrid = $('#gridContainer').dxDataGrid({
            // ...
            export: {
                enabled: true,
                formats: ['xlsx'],
            },
            onExporting(e) {
                if (e.format === 'xlsx') {
                    // ...
                } 
            },
        }).dxDataGrid('instance');
    });

##### Angular 

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'nonce-uqcb8z' cdnjs.cloudflare.com;" />
        <script nonce="uqcb8z">
            window.regeneratorRuntime = null;
        </script>
    </head>

    <!-- ... -->

    <!-- tab: app.component.html -->
    <dx-data-grid ... 
        (onExporting)="onExporting($event)"
    >
        <!-- ... -->
        <dxo-export
            [enabled]="true"
            [formats]="['xlsx']"
        ></dxo-export>
    </dx-data-grid>
    
    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Workbook } from 'exceljs';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onExporting(e) {
            if (e.format === 'xlsx') {
                // ...
            } 
        }
    }

##### Vue

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'nonce-uqcb8z' cdnjs.cloudflare.com;" />
        <script nonce="uqcb8z">
            window.regeneratorRuntime = null;
        </script>
    </head>

    <!-- ... -->

    <!-- tab: App.vue (Options API) -->
    <template>
        <div>
            <DxDataGrid ...
                @exporting="onExporting"
            >
                <!-- ... -->
                <DxExport
                    :enabled="true"
                    :formats="['xlsx']"
                />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { Workbook } from 'exceljs';

    export default {
        components: {
            DxDataGrid
        }
        data() {
            return {
                // ...
            };
        },
        methods: {
            onExporting(e) {
                if (e.format === 'xlsx') {
                    // ...
                } 
            },
        },
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <div>
            <DxDataGrid ...
                @exporting="onExporting"
            >
                <!-- ... -->
                <DxExport
                    :enabled="true"
                    :formats="['xlsx']"
                />
            </DxDataGrid>
        </div>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { Workbook } from 'exceljs';

    const onExporting = (e) => {
        if (e.format === 'xlsx') {
            // ...
        } 
    }
    </script>

##### React

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'nonce-uqcb8z' cdnjs.cloudflare.com;" />
        <script nonce="uqcb8z">
            window.regeneratorRuntime = null;
        </script>
    </head>

    <!-- ... -->

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import { Workbook } from 'exceljs';

    const exportFormats = ['xlsx'];

    export default function App() {
        const onExporting = React.useCallback((e) => {
            if (e.format === 'xlsx') {
                // ...
            } 
        });
        return (
            <React.Fragment>
                <div>
                    <DataGrid ...
                        onExporting={onExporting}
                    >
                        {/* ... */}
                        <Export enabled={true} formats={exportFormats}>
                    </DataGrid>
                </div>
            </React.Fragment>
        );
    }

---
