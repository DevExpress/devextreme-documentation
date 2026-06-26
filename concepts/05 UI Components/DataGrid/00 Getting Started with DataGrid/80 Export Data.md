DataGrid supports exporting data to Excel and PDF. Export functionality uses the following third-party libraries:

- Excel: <a href="https://github.com/DevExpress/devextreme-exceljs-fork" target="_blank">DevExtreme ExcelJS</a> v4.4.1+ and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+

- PDF: <a href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</a> v2.3.1+

[note] To generate PDFs with Unicode characters, refer to the following troubleshooting guide: [Export Unicode Characters - DataGrid](/concepts/80%20Troubleshooting/15%20PDF%20Export%20Issues/00%20Export%20Unicode%20Characters/00%20DataGrid '/Documentation/Guide/Troubleshooting/PDF_Export_Issues/Export_Unicode_Characters/DataGrid/').

To allow users to export data, set **export**.[enabled](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#enabled') to `true` and define an [onExporting](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onExporting') event handler. The component executes this handler when users click a button in the *"exportButton"* [toolbar item](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/). Call **excelExporter**.[exportDataGrid(options)](/api-reference/50%20Common/utils/excelExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions') or **pdfExporter**.[exportDataGrid(options)](/api-reference/50%20Common/utils/pdfExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions') in this handler as follows:

---
##### jQuery

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/devextreme-exceljs-fork@4.4.1/dist/dx-exceljs-fork.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
            <!-- DevExtreme scripts are referenced here -->
            <!-- ... -->
        </head>
    </html>

    <!-- tab: index.js -->
    // This code is used for backwards compatibility with the older jsPDF variable name
    // Read more: https://github.com/MrRio/jsPDF/releases/tag/v2.0.0
    // window.jsPDF = window.jspdf.jsPDF;

    $(function() {
        $("#dataGrid").dxDataGrid({
            export: {
                enabled: true,
                formats: ['xlsx', 'pdf']
            },
            onExporting(e) {
                if (e.format === 'xlsx') {
                    const workbook = new ExcelJS.Workbook();
                    const worksheet = workbook.addWorksheet('Main sheet');
                    DevExpress.excelExporter.exportDataGrid({
                        worksheet,
                        component: e.component,
                    }).then(() => {
                        workbook.xlsx.writeBuffer().then((buffer) => {
                            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                        });
                    });
                } else if (e.format === 'pdf') {
                    const doc = new window.jspdf.jsPDF();
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

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .Export(e => e
            .Enabled(true)
            .Formats(new[] { DataGridExportFormat.Pdf, DataGridExportFormat.Xlsx })
        )
        .OnExporting("handleDataGridExporting")
        @* ... *@
    )

    <script>
        function handleDataGridExporting(e) {
            if (e.format === 'xlsx') {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Main sheet');
                DevExpress.excelExporter.exportDataGrid({
                    worksheet,
                    component: e.component,
                }).then(() => {
                    workbook.xlsx.writeBuffer().then((buffer) => {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                    });
                });
            } else if (e.format === 'pdf') {
                const doc = new window.jspdf.jsPDF();
                DevExpress.pdfExporter.exportDataGrid({
                    jsPDFDocument: doc,
                    component: e.component,
                }).then(() => {
                    doc.save('DataGrid.pdf');
                });
            }
        }
    </script>

##### Angular

    <!-- tab: Installation command -->
    npm install --save devextreme-exceljs-fork file-saver
    npm install jspdf

    <!-- tab: app.component.html -->
    <dx-data-grid (onExporting)="exportGrid($event)">
        <dxo-data-grid-export 
            [enabled]="true"
            [formats]="['xlsx', 'pdf']"
        ></dxo-data-grid-export>
        <!-- ... -->
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { type DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
    import { Workbook } from 'devextreme-exceljs-fork';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
    import { jsPDF } from 'jspdf';

    // ...
    export class AppComponent {
        exportGrid(e: DxDataGridTypes.ExportingEvent) {
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
            } else if (e.format === 'pdf') {
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
    npm install --save devextreme-exceljs-fork file-saver
    npm install jspdf

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid @exporting="exportGrid">
            <!-- ... -->
            <DxExport
                :enabled="true"
                :formats="['xlsx', 'pdf']"
            />
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxExport, type DxDataGridTypes } from 'devextreme-vue/data-grid';
    import { Workbook } from 'devextreme-exceljs-fork';
    import { saveAs } from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { jsPDF } from 'jspdf';
    import { exportDataGrid as exportDataGridToPdf} from 'devextreme/pdf_exporter';

    function exportGrid(e: DxDataGridTypes.ExportingEvent): void {
        if (e.format === 'xlsx') {
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Main sheet');
            exportDataGrid({
                worksheet: worksheet,
                component: e.component,
            }).then(() => {
                workbook.xlsx.writeBuffer().then((buffer: ArrayBuffer) => {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                });
            });
        } else if (e.format === 'pdf') {
            const doc = new jsPDF();
            exportDataGridToPdf({
                jsPDFDocument: doc,
                component: e.component,
            }).then(() => {
                doc.save('DataGrid.pdf');
            });
        }
    }
    </script>

##### React

    <!-- tab: Installation command -->
    npm install --save devextreme-exceljs-fork file-saver
    npm install jspdf

    <!-- tab: App.tsx -->
    import React, { useState } from 'react';

    import { DataGrid, Export, type DataGridTypes } from 'devextreme-react/data-grid';

    import { Workbook } from 'devextreme-exceljs-fork';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { jsPDF } from 'jspdf';
    import { exportDataGrid as exportDataGridToPdf} from 'devextreme/pdf_exporter';
    // ...

    const exportFormats = ['xlsx', 'pdf'];

    function exportGrid(e: DataGridTypes.ExportingEvent) {
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
        } else if (e.format === 'pdf') {
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
        return (
            <DataGrid onExporting={exportGrid}>
                <Export enabled={true} formats={exportFormats} />
                {/* ... */}
            </DataGrid>
        );
    }

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
    componentName: "DataGrid"
}

For more information about the DevExtreme DataGrid, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/)
* [API Reference](/api-reference/10%20UI%20Components/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid/')