---
id: excelExporter.exportDataGrid(options)
module: excel_exporter
---
---
##### shortDescription
Exports grid data to Excel.

##### return: Promise<CellRange>
A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a> that is resolved with an object that contains the coordinates of the first and last cells. 

##### param(options): ExportDataGridProps
Export settings.

---     
To export **DataGrid** using <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> API, reference or import this library as well as <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> library.

The export is implemented in the [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting') function that is executed before data is exported. Set the **cancel** parameter to **true** to prevent execution of the built-in export. 
As a result, the **DataGrid** is exported as is to a single worksheet. 

---
##### jQuery

    <!--JavaScript-->
    $('#gridContainer').dxDataGrid({
        export: {
            enabled: true
        },
        onExporting: function(e) { 
            var workbook = new ExcelJS.Workbook(); 
            var worksheet = workbook.addWorksheet('Main sheet'); 
        
            DevExpress.excelExporter.exportDataGrid({ 
                    worksheet: worksheet, 
                    component: e.component 
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer) { 
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx'); 
                }); 
            }); 
            e.cancel = true; 
        }
    });

##### Angular   

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    import { exportDataGrid } from 'devextreme/exporter/exceljs/excelExporter';
    import ExcelJS from 'exceljs';
    import saveAs from 'file-saver';
    // ...
    export class AppComponent {
        onExporting(e) {
            var workbook = new ExcelJS.Workbook();    
            var worksheet = workbook.addWorksheet('Main sheet');
            exportDataGrid({
                    component: e.component,
                worksheet: worksheet,
                autoFilterEnabled: true
                }).then(function() {
                    workbook.xlsx.writeBuffer()
                    .then(function(buffer) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                });
            });
            e.cancel = true; 
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
    <!--HTML-->
    <dx-data-grid ...
        (onExporting)="onExporting($event)">
        <dxo-export [enabled]="true">
        </dxo-export>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @exporting="onExporting">
            <DxExport
                :enabled="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import ExcelJS from 'exceljs';
    import saveAs from 'file-saver';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            onExporting(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Employees');

                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet,
                    autoFilterEnabled: true
                    }).then(function() {
                        workbook.xlsx.writeBuffer()
                        .then(function(buffer) {
                            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
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
    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import ExcelJS from 'exceljs';
    import saveAs from 'file-saver';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.onExporting = this.onExporting.bind(this);
        }

        render() {
            return (
                <DataGrid ...
                    onExporting={this.onExporting}>
                    <Export enabled={true} />
                </DataGrid>
            );
        }

        onExporting(e) {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Main sheet');

            exportDataGrid({
                component: e.component,
                worksheet: worksheet,
                autoFilterEnabled: true
                }).then(function() {
                    workbook.xlsx.writeBuffer()
                    .then(function(buffer) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                });
            });
            e.cancel = true;
        }
    }
    export default App;

---     

#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelCellCustomization/"
}
