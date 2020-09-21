DevExtreme includes a static method [exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) that exports grid data to the Excel format. Its minimum configuration requires a **DataGrid** instance and an Excel worksheet to which grid data should be exported. After the export, you should save the data to an XLSX file.

To create and manage worksheets and save Excel files, this feature requires the following third-party libraries:

- <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4+
- <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+

The **DataGrid** includes an export UI. This tutorial uses it to call the **exportDataGrid(options)** method. Enable the UI by setting the [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/).[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled) option to **true** and call **exportDataGrid(options)** inside the **DataGrid**'s [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) event handler. You should also disable the deprecated built-in export functionality by setting the `e.cancel` parameter to **true**.

---
##### jQuery

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.0.1/exceljs.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>

            <!-- DevExtreme scripts are referenced here -->
            <!-- ... -->
        </head>
    </html>

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            export: {
                enabled: true
            },
            onExporting: function(e) { 
                const workbook = new ExcelJS.Workbook(); 
                const worksheet = workbook.addWorksheet("Main sheet"); 
                DevExpress.excelExporter.exportDataGrid({ 
                    worksheet: worksheet, 
                    component: e.component,
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) { 
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
                    }); 
                }); 
                e.cancel = true; 
            }
        });
    });

##### Angular

    <!-- tab: Installation command -->
    npm install --save exceljs file-saver

    <!-- tab: tsconfig.app.json -->
    {
        // ...
        "compilerOptions": {
            // ...
            "paths": {
                // ...
                "exceljs": [
                    "node_modules/exceljs/dist/exceljs.js"
                ]
            }
        },
        // ...
    }

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onExporting)="exportGrid($event)">
        <!-- ... -->
        <dxo-export [enabled]="true"></dxo-export>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    // ...
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';

    // ...
    export class AppComponent {
        // ...
        exportGrid(e) {
            const workbook = new Workbook(); 
            const worksheet = workbook.addWorksheet("Main sheet"); 
            exportDataGrid({ 
                worksheet: worksheet, 
                component: e.component
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) { 
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
                }); 
            }); 
            e.cancel = true; 
        }
    }

##### Vue

    <!-- tab: Installation command -->
    npm install --save exceljs file-saver

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ...
                @exporting="exportGrid">
                <!-- ... -->
                <DxExport :enabled="true" />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
        DxExport
    } from 'devextreme-vue/data-grid';
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';

    export default {
        components: {
            DxDataGrid,
            // ...
            DxExport
        },
        // ...
        methods: {
            exportGrid(e) {
                const workbook = new Workbook(); 
                const worksheet = workbook.addWorksheet("Main sheet"); 
                exportDataGrid({ 
                    worksheet: worksheet, 
                    component: e.component
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) { 
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
                    }); 
                }); 
                e.cancel = true; 
            }
        }
    }
    </script>

    <style>
    /* ... */
    </style>

##### React

    <!-- tab: Installation command -->
    npm install --save exceljs file-saver

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        DataGrid,
        Column,
        // ...
        Export
    } from 'devextreme-react/data-grid';

    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    // ...

    function exportGrid(e) {
        const workbook = new Workbook(); 
        const worksheet = workbook.addWorksheet("Main sheet"); 
        exportDataGrid({ 
            worksheet: worksheet, 
            component: e.component
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer) { 
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
            }); 
        });
        e.cancel = true; 
    }

    function App() {
        // ...
        return (
            <div className="App">
                <DataGrid ...
                    onExporting={exportGrid}>
                    {/* ... */}
                    <Export enabled={true} />
                </DataGrid>
            </div>
        );
    }

    export default App;
    
---

Run the code and click the Export button in the upper-right corner. Grid data should be exported to the DataGrid.xlsx file.

The **exportDataGrid(options)** method can be called at any point in your application, not necessarily using the **DataGrid**'s export UI. For example, you can implement a standalone button and call this method when the button is clicked.

You have now configured core **DataGrid** features. For more details on this widget, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Widgets/dxDataGrid/)
