---
id: dxDataGrid.Options.export.formats
acceptValues: 'pdf' | 'xlsx'
type: Array<String>
default: 'DataGrid'
---
---
##### shortDescription
Specifies the availability and captions of data export buttons.

---
The **formats** property's default value is `['xlsx']`. This means that the Grid displays the export button and its menu contains a command titled "Export all data (selected rows) to XLSX". If you would rather implement PDF export in your application, set the **formats** property to `['pdf']`. The command text changes to "Export data to PDF". You can then implement the **onExporting** handler accordingly. 

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        const dataGrid = $('#gridContainer').dxDataGrid({
            // ...
            export: {
                enabled: true,
                formats: ['pdf'],
            },
            onExporting(e) {
                const doc = new jsPDF();
                DevExpress.pdfExporter.exportDataGrid({
                    jsPDFDocument: doc,
                    component: e.component,
                }).then(() => {
                    doc.save('Companies.pdf');
                });
            },
        }).dxDataGrid('instance');
    });

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ... 
        (onExporting)="onExporting($event)"
    >
        <!-- ... -->
        <dxo-export
            [enabled]="true"
            [formats]="['pdf']"
        ></dxo-export>
    </dx-data-grid>
    
    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
    import { jsPDF } from 'jspdf';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        onExporting() {
            const doc = new jsPDF();
            exportDataGridToPdf({
                jsPDFDocument: doc,
                component: this.dataGrid.instance
            }).then(() => {
                doc.save('Customers.pdf');
            })
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid ...
                @exporting="onExporting"
            >
                <!-- ... -->
                <DxExport
                    :enabled="true"
                    :formats="['pdf']"
                />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { jsPDF } from 'jspdf';
    import { exportDataGrid } from 'devextreme/pdf_exporter';

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
                const doc = new jsPDF();
                exportDataGrid({
                    jsPDFDocument: doc,
                    component: e.component,
                }).then(() => {
                    doc.save('Companies.pdf');
                });
            },
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import { jsPDF } from 'jspdf';
    import { exportDataGrid } from 'devextreme/pdf_exporter';

    const exportFormats = ['pdf'];

    export default function App() {
        const onExporting = React.useCallback((e) => {
            const doc = new jsPDF();
            exportDataGrid({
                jsPDFDocument: doc,
                component: e.component,
            }).then(() => {
                doc.save('Companies.pdf');
            });
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

The predefined values for the **formats** property are 'xlsx' and 'pdf'. You can also specify any custom string, such as `['CSV']`. If you do that, the export command caption will read "Export all data (selected rows) to CSV". Once again, you'll need to change the onExporting handler to produce a file in that format. 

Since the **formats** property accepts an array, you can specify multiple formats. For example, you can set the property to  `['pdf', 'CSV']`. In this case, the grid displays multiple export commands: "Export all data (selected rows) to PDF" and "Export all data (selected rows) to CSV". In the onExporting handler, add logic that checks which button initiated the export operation.

The example below shows how to export DataGrid to CSV format.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        const dataGrid = $('#gridContainer').dxDataGrid({
            // ...
            export: {
                enabled: true,
                formats: ['csv'],
            },
            onExporting: function(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Employees');
                DevExpress.excelExporter.exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                // https://github.com/exceljs/exceljs#writing-csv
                // https://github.com/exceljs/exceljs#reading-csv
                workbook.csv.writeBuffer().then(function(buffer) {
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Report.csv");
                });
                });

                e.cancel = true;
            },
        }).dxDataGrid('instance');
    });

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ... 
        (onExporting)="onExporting($event)"
    >
        <!-- ... -->
        <dxo-export
            [enabled]="true"
            [formats]="['csv']"
        ></dxo-export>
    </dx-data-grid>
    
    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Workbook } from 'exceljs';
    import { saveAs } from 'file-saver-es';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        onExporting: function(e) {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Employees');
            DevExpress.excelExporter.exportDataGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
            // https://github.com/exceljs/exceljs#writing-csv
            // https://github.com/exceljs/exceljs#reading-csv
            workbook.csv.writeBuffer().then(function(buffer) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Report.csv");
            });
            });

            e.cancel = true;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid ...
                @exporting="onExporting"
            >
                <!-- ... -->
                <DxExport
                    :enabled="true"
                    :formats="['csv']"
                />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { Workbook } from 'exceljs';
    import { saveAs } from 'file-saver-es';
    import { exportDataGrid } from 'devextreme/excel_exporter';

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
            onExporting: function(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Employees');
                DevExpress.excelExporter.exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                // https://github.com/exceljs/exceljs#writing-csv
                // https://github.com/exceljs/exceljs#reading-csv
                workbook.csv.writeBuffer().then(function(buffer) {
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Report.csv");
                });
                });

                e.cancel = true;
            },
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import { Workbook } from 'exceljs';
    import { saveAs } from 'file-saver-es';
    import { exportDataGrid } from 'devextreme/excel_exporter';

    const exportFormats = ['csv'];

    export default function App() {
        const onExporting = React.useCallback((e) => {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Employees');
            DevExpress.excelExporter.exportDataGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
            // https://github.com/exceljs/exceljs#writing-csv
            // https://github.com/exceljs/exceljs#reading-csv
            workbook.csv.writeBuffer().then(function(buffer) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Report.csv");
            });
            });

            e.cancel = true;
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