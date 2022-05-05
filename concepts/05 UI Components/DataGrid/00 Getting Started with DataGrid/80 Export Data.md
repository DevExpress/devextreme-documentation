DataGrid allows users to export grid data as Excel and PDF documents. This feature requires the following third-party libraries:

- Excel: <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4+ and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+

- PDF: <a href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</a>

To configure export operations, use the **excelExporter**.[exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) or **pdfExporter**.[exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions) method. It requires a DataGrid instance and a target Excel worksheet or a PDF document. You can call these methods at any point in your application.

The following code calls export methods in the DataGrid's [onExporting](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onExporting) event handler. The control executes this handler when users select one of the operations available via the **Export** button. The [export](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/).[enabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#enabled) property adds this button to the DataGrid. Use the [formats](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#formats) property to configure available export operation types.

When users click "Export all data to Excel", **excelExporter**.[exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) exports grid data as a <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">blob</a> that is then saved to an XLSX file. The `e.cancel` parameter disables the deprecated built-in export functionality. 

When users click "Export all data to PDF", **pdfExporter**.[exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions) exports grid data as a PDF document. 

---
##### jQuery

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.0.1/exceljs.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
            <!-- DevExtreme scripts are referenced here -->
            <!-- ... -->
        </head>
    </html>

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            export: {
                enabled: true,
                formats: ['xlsx', 'pdf']
            },
            onExporting(e) {
                if (e.format === 'xlsx') {
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
                else if (e.format === 'pdf') {
                    const doc = new jsPDF();
                    DevExpress.pdfExporter.exportDataGrid({
                        jsPDFDocument: doc,
                        component: e.component,
                    }).then(() => {
                        doc.save('DataGrid.pdf');
                    });
                }
            }
        });
    });


##### Angular

    <!-- tab: Installation command -->
    npm install --save exceljs file-saver
    npm install jspdf

    <!-- tab: tsconfig.app.json -->
    {
        // ...
        "compilerOptions": {
            // ...
            "paths": {
                // ...
                "exceljs": [
                    "node_modules/exceljs/dist/exceljs.min.js"
                ]
            }
        },
        // ...
    }

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onExporting)="exportGrid($event)">
        <!-- ... -->
        <dxo-export 
            [enabled]="true"
            [formats]="['xlsx', 'pdf']"
        >
        </dxo-export>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    // ...
    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
    import { jsPDF } from 'jspdf';

    // ...
    export class AppComponent {
        // ...
        exportGrid(e) {
            if (e.format === 'xlsx') {
                const workbook = new Workbook(); 
                const worksheet = workbook.addWorksheet("Main sheet"); 
                exportDataGrid({ 
                    worksheet: worksheet, 
                    component: e.component,
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) { 
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
                    }); 
                }); 
                e.cancel = true;
            } 
            else if (e.format === 'pdf') {
                const doc = new jsPDF();
                exportDataGridToPdf({
                    jsPDFDocument: doc,
                    component: e.component,
                }).then(() => {
                    doc.save('DataGrid.pdf');
                });
            }
        }
    }

##### Vue

    <!-- tab: Installation command -->
    npm install --save exceljs file-saver
    npm install jspdf

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @exporting="exportGrid">
            <!-- ... -->
            <DxExport
                :enabled="true"
                :formats="['xlsx', 'pdf']"
            />
        </DxDataGrid>
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
    import { jsPDF } from 'jspdf';
    import { exportDataGrid as exportDataGridToPdf} from 'devextreme/pdf_exporter';

    export default {
        components: {
            DxDataGrid,
            // ...
            DxExport
        },
        // ...
        methods: {
            exportGrid(e) {
                if (e.format === 'xlsx') {
                    const workbook = new Workbook(); 
                    const worksheet = workbook.addWorksheet("Main sheet"); 
                    exportDataGrid({ 
                        worksheet: worksheet, 
                        component: e.component,
                    }).then(function() {
                        workbook.xlsx.writeBuffer().then(function(buffer) { 
                            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
                        }); 
                    }); 
                    e.cancel = true;
                } 
                else if (e.format === 'pdf') {
                    const doc = new jsPDF();
                    exportDataGridToPdf({
                        jsPDFDocument: doc,
                        component: e.component,
                    }).then(() => {
                        doc.save('DataGrid.pdf');
                    });
                }
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
    npm install jspdf

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        DataGrid,
        // ...
        Export
    } from 'devextreme-react/data-grid';

    import { Workbook } from 'exceljs';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { jsPDF } from 'jspdf';
    import { exportDataGrid as exportDataGridToPdf} from 'devextreme/pdf_exporter';
    // ...

    const exportFormats = ['xlsx', 'pdf'];

    function exportGrid(e) {
        if (e.format === 'xlsx') {
            const workbook = new Workbook(); 
            const worksheet = workbook.addWorksheet("Main sheet"); 
            exportDataGrid({ 
                worksheet: worksheet, 
                component: e.component,
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer) { 
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
                }); 
            }); 
            e.cancel = true;
        } 
        else if (e.format === 'pdf') {
            const doc = new jsPDF();
            exportDataGridToPdf({
                jsPDFDocument: doc,
                component: e.component,
            }).then(() => {
                doc.save('DataGrid.pdf');
            });
        }
    }

    function App() {
        // ...
        return (
            <DataGrid ...
                onExporting={exportGrid}>
                {/* ... */}
                <Export enabled={true} formats={exportFormats} />
            </DataGrid>
        );
    }

    export default App;
    

---

#include common-demobutton-named with {
    name: "Export to Excel Overview",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSOverview/"
}
#include common-demobutton-named with {
    name: "Export to PDF Overview",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PDFOverview/"
}

#include uiwidgets-grids-export-csv with {
    componentName: "{WidgetName}"
}

For further information on the {WidgetName} component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Components/dx{WidgetName}/)
