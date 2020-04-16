---
id: ExportDataGridProps.customizeCell
type: function(options)
---
---
##### shortDescription
Customizes an Excel cell after creation.

##### param(options): Object
An object passed to this callback function.

##### field(options.excelCell): Object
An ExcelJS object that describes an Excel cell. Use the object's properties to customize the cell. For information on these properties, refer to the following ExcelJS documentation sections:

- <a href="https://github.com/exceljs/exceljs#value-types" target="_blank">value</a>
- <a href="https://github.com/exceljs/exceljs#alignment" target="_blank">alignment</a>
- <a href="https://github.com/exceljs/exceljs#borders" target="_blank">border</a>
- <a href="https://github.com/exceljs/exceljs#fills" target="_blank">fill</a>
- <a href="https://github.com/exceljs/exceljs#rich-text" target="_blank">richText</a>
- <a href="https://github.com/exceljs/exceljs#fonts" target="_blank">font</a>
- <a href="https://github.com/exceljs/exceljs#number-formats" target="_blank">numFmt</a>

##### field(options.gridCell): ExcelDataGridCell
A **DataGrid** cell.

---

A snippet where Excel cells are customized 

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        export: {
            enabled: true
        },
        onExporting(e) {
            // ...
            customizeCell: function(options) {
                const { gridCell, excelCell } = options;
                // ...
                if(gridCell.rowType === 'data') {
                    excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                    excelCell.alignment = { horizontal: 'left' };
                }
            }
        }
    });

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onExporting)="onExporting($event)">
        <dxo-export [enabled]="true"></dxo-export>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import ExcelJS from 'exceljs';
    import saveAs from 'file-saver';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onExporting(e) {
            // ...
            customizeCell: function(options) {
                const { gridCell, excelCell } = options;
                // ...
                if(gridCell.rowType === 'data') {
                    excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                    excelCell.alignment = { horizontal: 'left' };
                }
            }
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import ExcelJS from 'exceljs';
    import saveAs from 'file-saver';

    export default {
        components: {
            DxDataGrid,
            DxExport
        },
        methods: {
            onExporting(e) {
                // ...
                customizeCell: function(options) {
                    const { gridCell, excelCell } = options;
                    // ...
                    if(gridCell.rowType === 'data') {
                        excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                        excelCell.alignment = { horizontal: 'left' };
                    }
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import ExcelJS from 'exceljs';
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
            // ...
            customizeCell: function(options) {
                const { gridCell, excelCell } = options;
                // ...
                if(gridCell.rowType === 'data') {
                    excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
                    excelCell.alignment = { horizontal: 'left' };
                }
            }
        }
    }
    export default App;

--- 

#include common-demobutton-named with {
    name: "Cell Customization",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSCellCustomization/"
}
#include common-demobutton-named with {
    name: "Header and Footer",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSHeaderAndFooter/"
}
