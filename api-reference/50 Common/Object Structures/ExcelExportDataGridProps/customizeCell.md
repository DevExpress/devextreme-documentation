---
id: ExcelExportDataGridProps.customizeCell
type: function(options)
---
---
##### shortDescription
Customizes Excel cells after creation.

##### param(options): Object
**customizeCell** options.

##### field(options.excelCell): Object
An Excel cell.

##### field(options.gridCell): ExcelDataGridCell
A DataGrid cell.

---

DevExtreme ExcelJS allows you to customize the following Excel cell properties:

- [value](https://github.com/DevExpress/devextreme-exceljs-fork#value-types)
- [alignment](https://github.com/DevExpress/devextreme-exceljs-fork#alignment)
- [border](https://github.com/DevExpress/devextreme-exceljs-fork#borders)
- [fill](https://github.com/DevExpress/devextreme-exceljs-fork#fills)
- [richText](https://github.com/DevExpress/devextreme-exceljs-fork#rich-text)
- [font](https://github.com/DevExpress/devextreme-exceljs-fork#fonts)
- [numFmt](https://github.com/DevExpress/devextreme-exceljs-fork#number-formats)

The following code snippet checks DataGrid cell [rowType](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType') values to customize Excel cells in data rows:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            export: {
                enabled: true
            },
            onExporting(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Companies');

                DevExpress.excelExporter.exportDataGrid({
                    component: e.component,
                    worksheet: worksheet,
                    topLeftCell: { row: 2, column: 2 },
                    customizeCell: function(options) {
                        var { gridCell, excelCell } = options;

                        if(gridCell.rowType === 'data') {
                            excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                            excelCell.alignment = { horizontal: 'left' };
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

    <!--HTML-->
    <head>
        <!-- ... -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/devextreme-exceljs-fork@4.4.1/dist/dx-exceljs-fork.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>
        <!-- reference the DevExtreme sources here -->
    </head>

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onExporting)="onExporting($event)">
        <dxo-export [enabled]="true"></dxo-export>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { exportDataGrid } from 'devextreme/excel_exporter';
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

            exportDataGrid({
                component: e.component,
                worksheet: worksheet,
                topLeftCell: { row: 2, column: 2 },
                customizeCell: function(options) {
                    const { gridCell, excelCell } = options;
                    
                    if(gridCell.rowType === 'data') {
                        excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                        excelCell.alignment = { horizontal: 'left' };
                    }
                }
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) {
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
                });
            });
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
        <DxDataGrid ...
            @exporting="onExporting">
            <DxExport
                :enabled="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import { Workbook } from 'devextreme-exceljs-fork';
    import saveAs from 'file-saver';

    export default {
        components: {
            DxDataGrid,
            DxExport
        },
        methods: {
            onExporting(e) {
                const workbook = new Workbook();
                const worksheet = workbook.addWorksheet('Companies');

                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet,
                    topLeftCell: { row: 2, column: 2 },
                    customizeCell: function(options) {
                        const { gridCell, excelCell } = options;
                        
                        if(gridCell.rowType === 'data') {
                            excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                            excelCell.alignment = { horizontal: 'left' };
                        }
                    }
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
                    });
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import { Workbook } from 'devextreme-exceljs-fork';
    import saveAs from 'file-saver';
    import { exportDataGrid } from 'devextreme/excel_exporter';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    onExporting={this.onExporting}>
                    <Export enabled={true} />
                </DataGrid>
            );
        }

        onExporting(e) {
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Companies');

            exportDataGrid({
                component: e.component,
                worksheet: worksheet,
                topLeftCell: { row: 2, column: 2 },
                customizeCell: function(options) {
                    const { gridCell, excelCell } = options;
                    
                    if(gridCell.rowType === 'data') {
                        excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                        excelCell.alignment = { horizontal: 'left' };
                    }
                }
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer) {
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
                });
            });
        }
    }
    export default App;

---

[note]

To add asynchronous operations to **customizeCell**, follow these steps:

1. Define a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) array in the [onExporting](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onExporting') handler.
2. In **customizeCell**, add your asynchronous operations to the **Promise** array.
3. In [exportDataGrid](/api-reference/50%20Common/utils/excelExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions').**then()**, save the exported file within a [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).**then()** callback. Pass the promise array defined in **onExporting** as the **Promise**.**all()** parameter as follows:

        onExporting(e) {
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet('Companies');

            let promiseArray = [];

            exportDataGrid({
                component: e.component,
                worksheet: worksheet,
                topLeftCell: { row: 2, column: 2 },
                customizeCell: function(options) {
                    const asyncOperation = new Promise((resolve, reject) => {
                        // ...
                    });

                    promiseArray.push(asyncOperation);
                }
            }).then(() => {
                Promise.all(promiseArray).then(() => {
                    workbook.xlsx.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Companies.xlsx");
                    });
                });
            });
        }

[/note]

#include common-demobutton-named with {
    name: "Cell Customization",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSCellCustomization/"
}
#include common-demobutton-named with {
    name: "Header and Footer",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSHeaderAndFooter/"
}

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-copy-data-to-excel"
}
