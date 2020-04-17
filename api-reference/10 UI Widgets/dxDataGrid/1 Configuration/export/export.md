---
id: dxDataGrid.Options.export
type: Object
---
---
##### shortDescription
Configures client-side exporting.

---
A user can click the **Export** button to save an Excel file with the exported data. Data types, sorting, filtering, and grouping settings are maintained.

![DevExtreme HTML5 JavaScript DataGrid Export Button](/images/DataGrid/exported_data.png)

The following instructions show how to enable and configure client-side export:

1. **Prerequisites and Restrictions**  
    Reference or import <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v3.3.1 or newer and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> libraries. If your app does not use modules, reference also the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a>.

    The following restrictions apply when users export **DataGrid**:    
    - Only XLSX files are supported.
    - Excel limits the number of grouping levels to 7, while in the **DataGrid** it is unlimited.
    - Only visible columns are exported. See the [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) option description for a workaround.
    - [Detail rows](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/) are not exported.
    - [Group rows](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType) are always exported in an expanded state and the [isExpanded](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#isExpanded) option is ignored.
    - Modifications made in the [cell](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate) and [row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowTemplate) templates are omitted. 
    - [Data mapping](/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping) is ignored. Use [calculated columns](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') instead.


2. **Enable Client-Side Export**   
    Set the **export**.[enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled') option to **true**. You can disable exporting for a specific column by setting its [allowExporting](/api-reference/_hidden/dxDataGridColumn/allowExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting') option to **false**:

    ---

    ##### jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                export: {
                    enabled: true
                },
                columns: [{ ...
                    allowExporting: false
                }, 
                    // ...
                ]
            });
        });

        <!--HTML-->
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/3.3.1/exceljs.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
            <!-- reference the DevExtreme sources here -->
        </head>

    ##### Angular   

        <!-- tab: app.component.html -->
        <dx-data-grid ... >
            <dxo-export [enabled]="true"></dxo-export>
            <dxi-column ...
                [allowExporting]="false">
            </dxi-column>
        </dx-data-grid>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
        import ExcelJS from 'exceljs';
        import saveAs from 'file-saver';
        
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            // ...
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
            <DxDataGrid ... >
                <DxExport
                    :enabled="true"
                />
                <DxColumn ... 
                    :allow-exporting="false"
                />
            </DxDataGrid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import ExcelJS from 'exceljs';
        import saveAs from 'file-saver';

        import { DxDataGrid, 
            DxExport,
            DxColumn
        } from 'devextreme-vue/data-grid';

        export default {
            components: {
                DxDataGrid,
                DxExport,
                DxColumn
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import ExcelJS from 'exceljs';
        import saveAs from 'file-saver';

        import DataGrid, {
            Export,
            Column
        } from 'devextreme-react/data-grid';

        class App extends React.Component {
            render() {
                return (
                    <DataGrid ... >
                        <Export enabled={true} />
                        <Column ...
                            allowExporting={false}
                        />
                    </DataGrid>
                );
            }
        }
        export default App;

    ---

3. **Specify the Export Options**   
    Call the [exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) method in the [onExporting](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) handler to execute export after the Export button is pressed. The deprecated export is deactivated by setting the `e.cancel` parameter to **true**. To save the document to Excel, use the **saveAs** function from the **FileSaver** API.

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

        <!--HTML-->
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/3.3.1/exceljs.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
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
        import ExcelJS from 'exceljs';
        import saveAs from 'file-saver';
        
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            onExporting(e) {
                const workbook = new ExcelJS.Workbook();    
                const worksheet = workbook.addWorksheet('Main sheet');
                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                    workbook.xlsx.writeBuffer()
                        .then(function(buffer) {
                            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
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
                    const workbook = new ExcelJS.Workbook();
                    const worksheet = workbook.addWorksheet('Main sheet');
                    exportDataGrid({
                        component: e.component,
                        worksheet: worksheet
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
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Main sheet');
                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
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

4. **Further Configure Export and Customize Data**      
    The **ExcelJS** library allows users to customize exported data in numerous ways. Refer to the [customizeCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customizeCell) section for details and examples. 

    You can also use the **ExcelJS** API to enable users to export images and multiple grids to a single document:

    #include common-demobutton-named with {
        name: "Export Images",
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSExportImages/"
    }
    #include common-demobutton-named with {
        name: "Export Multiple Grids",
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSExportMultipleGrids/"
    }