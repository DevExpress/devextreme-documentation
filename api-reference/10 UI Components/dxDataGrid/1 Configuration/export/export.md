---
id: dxDataGrid.Options.export
type: ui/data_grid:Export
inheritsType: ui/data_grid:Export
---
---
##### shortDescription
Configures client-side exporting.

---
A user can click the **Export** button to save an Excel or PDF file with the exported data. Data types, sort, filter, and group settings are maintained.

![DevExtreme HTML5 JavaScript DataGrid Export Button](/images/DataGrid/exported_data.png)

The following instructions show how to enable and configure client-side export:

1. **Install or reference the required libraries**

    Install the following libraries for the export:

    - Excel: The <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4.4.0+ and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+ libraries. If you apply [CSP rules](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/00%20Content%20Security%20Policy.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy'), refer to the [ExcelJS CSP Treats](/concepts/Common/Security%20Considerations/30%20Export%20Vulnerabilities/20%20ExcelJS%20CSP%20Threats.md '/Documentation/Guide/Common/Security_Considerations/#Export_Vulnerabilities/ExcelJS_CSP_Threats') section for more information about potential vulnerabilities.

    - PDF: The <a href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</a> library.  

    ---
    ##### jQuery

        <!-- Export to Excel -->
        <head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>
            <!-- Reference the DevExtreme sources here -->
        </head>

        <!-- Export to Pdf -->
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.umd.min.js"></script>
            <!-- Reference the DevExtreme sources here -->
        </head>

    ##### Angular
        <!-- tab: Installation command -->
        <!-- Export to Pdf  -->
        npm install jspdf

        <!-- Export to Excel -->
        npm install --save exceljs file-saver
        npm i --save-dev @types/file-saver

        <!-- tab: tsconfig.app.json -->
        <!-- Export to Excel -->
        {
            "compilerOptions": {
                // ...
                "outDir": "./out-tsc/app",
                "types": ["node"]
            },
        }

    ##### Vue

        <!-- tab: Installation command -->
        <!-- Export to Pdf  -->
        npm install jspdf

        <!-- Export to Excel -->
        npm install --save exceljs file-saver
        
    ##### React

        <!-- tab: Installation command -->
        <!-- Export to Pdf  -->
        npm install jspdf

        <!-- Export to Excel -->
        npm install --save exceljs file-saver
        
    --- 

2. **Enable the export UI**   
    Set the **export**.[enabled](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#enabled') property to **true**. This property enables export for all columns. Set a column's [allowExporting](/api-reference/_hidden/dxDataGridColumn/allowExporting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowExporting') property to **false** to prevent it from being exported:

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
        import 'devextreme/dist/css/dx.light.css';

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
        import 'devextreme/dist/css/dx.light.css';

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

3. **Export the DataGrid**   
    Implement the [onExporting](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onExporting') handler and call the **excelExporter**.[exportDataGrid(options)](/api-reference/50%20Common/utils/excelExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions') or **pdfExporter**.[exportDataGrid(options)](/api-reference/50%20Common/utils/pdfExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions') method. In the code below, the **exportDataGrid** method exports the DataGrid as is. You can use [ExcelExportDataGridProps](/api-reference/50%20Common/Object%20Structures/ExcelExportDataGridProps '/Documentation/ApiReference/Common/Object_Structures/ExcelExportDataGridProps/')/[PdfExportDataGridProps](/api-reference/50%20Common/Object%20Structures/PdfExportDataGridProps '/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/') to configure export settings. The DataGrid exports its data to an Excel worksheet or a PDF document. To save the Excel document, call the FileSaver's **saveAs** method. To save the PDF document, call the jsPDF's **save** method.

    The example below shows how to export DataGrid to Excel file.

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
                    component: e.component,
                    customizeCell: function(options) {
                        options.excelCell.font = { name: 'Arial', size: 12 };
                        options.excelCell.alignment = { horizontal: 'left' };
                    } 
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) { 
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx'); 
                    }); 
                }); 
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
        import { Workbook } from 'exceljs';
        import { saveAs } from 'file-saver';
        import { ExportingEvent } from 'devextreme/ui/data_grid';
        
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            onExporting(e: ExportingEvent) {
                const workbook = new Workbook();    
                const worksheet = workbook.addWorksheet('Main sheet');
                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet,
                    customizeCell: function(options) {
                        options.excelCell.font = { name: 'Arial', size: 12 };
                        options.excelCell.alignment = { horizontal: 'left' };
                    } 
                }).then(function() {
                    workbook.xlsx.writeBuffer()
                        .then(function(buffer: BlobPart) {
                            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
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
        import 'devextreme/dist/css/dx.light.css';

        import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
        import { exportDataGrid } from 'devextreme/excel_exporter';
        import { Workbook } from 'exceljs';
        import saveAs from 'file-saver';

        export default {
            components: {
                DxDataGrid,
                DxExport
            },
            methods: {
                onExporting(e) {
                    const workbook = new Workbook();
                    const worksheet = workbook.addWorksheet('Main sheet');
                    exportDataGrid({
                        component: e.component,
                        worksheet: worksheet,
                        customizeCell: function(options) {
                            options.excelCell.font = { name: 'Arial', size: 12 };
                            options.excelCell.alignment = { horizontal: 'left' };
                        } 
                    }).then(function() {
                        workbook.xlsx.writeBuffer()
                            .then(function(buffer) {
                                saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                            });
                    });
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import { Workbook } from 'exceljs';
        import saveAs from 'file-saver';
        import DataGrid, { Export } from 'devextreme-react/data-grid';
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
                const worksheet = workbook.addWorksheet('Main sheet');
                exportDataGrid({
                    component: e.component,
                    worksheet: worksheet,
                    customizeCell: function(options) {
                        options.excelCell.font = { name: 'Arial', size: 12 };
                        options.excelCell.alignment = { horizontal: 'left' };
                    } 
                }).then(function() {
                    workbook.xlsx.writeBuffer()
                        .then(function(buffer) {
                            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                        });
                });
            }
        }
        export default App;

    --- 

    The example below shows how to export DataGrid to PDF document.

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function(){
            $('#exportButton').dxButton({
                // ...
                onClick: function() {
                    const doc = new jsPDF();
                    DevExpress.pdfExporter.exportDataGrid({
                        jsPDFDocument: doc,
                        component: dataGrid
                    }).then(function() {
                        doc.save('Customers.pdf');
                    });
                }
            });
            const dataGrid = $('#gridContainer').dxDataGrid({
                // ...
            }).dxDataGrid('instance');
        });

    ##### Angular   

        <!-- tab: app.component.html -->
        <dx-button ... 
            (onClick)="exportGrid($event)">
        </dx-button>

        <dx-data-grid ... >
            <!-- ... -->
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
            exportGrid() {
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
        import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxDataGridModule,
                DxButtonModule
            ],
            providers: [ ],
            bootstrap: [AppComponent]
        })
        export class AppModule { }


    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <div>
                <DxButton ...
                    @click="exportGrid()"
                />
                <DxDataGrid ...
                    :ref="dataGridRef">
                    <!-- ... -->
                </DxDataGrid>
            </div>
        </template>

        <script>
        import 'devextreme/dist/css/dx.light.css';

        import DxDataGrid from 'devextreme-vue/data-grid';
        import DxButton from 'devextreme-vue/button';
        import { jsPDF } from 'jspdf';
        import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
        const dataGridRef = 'dataGrid';
        export default {
            components: {
                DxDataGrid,
                DxButton
            },
            data() {
                return {
                    dataGridRef
                };
            },
            computed: {
                dataGrid: function() {
                    return this.$refs[dataGridRef].instance;
                }
            },
            methods: {
                exportGrid() {
                    const doc = new jsPDF();
                    exportDataGridToPdf({
                        jsPDFDocument: doc,
                        component: this.dataGrid
                    }).then(() => {
                        doc.save('Customers.pdf');
                    });
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import DataGrid from 'devextreme-react/data-grid';
        import Button from 'devextreme-react/button';
        import { jsPDF } from 'jspdf';
        import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
        export default function App() {
            const dataGridRef = useRef(null);
            function exportGrid() {
                const doc = new jsPDF();
                const dataGrid = dataGridRef.current.instance();
                exportDataGridToPdf({
                    jsPDFDocument: doc,
                    component: dataGrid
                }).then(() => {
                    doc.save('Customers.pdf');
                });
            }
            return (
                <React.Fragment>
                    <div>
                        <Button ...
                            onClick={exportGrid}
                        />
                        <DataGrid ...
                            ref={dataGridRef}
                            >
                            {/* ... */}
                        </DataGrid>
                    </div>
                </React.Fragment>
            );
        }

    ---     


The following restrictions apply when users export DataGrid:   

- Only XLSX and PDF files are supported out of the box. To export DataGrid to CSV, call the **excelExporter**.[exportDataGrid(options)](/api-reference/50%20Common/utils/excelExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions') method as shown in the [formats](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export/formats.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#formats') property example. Refer to the [CSV Injection](/concepts/Common/Security%20Considerations/30%20Export%20Vulnerabilities/05%20CSV%20Injection.md '/Documentation/Guide/Common/Security_Considerations/#Export_Vulnerabilities/CSV_Injection') section to take the threat of a CSV Injection Attack into account.

- Excel limits the number of grouping levels to 7, while in the DataGrid it is unlimited.

- Only visible columns are exported. See the [onExporting](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onExporting') property description for a workaround.

- [Detail rows](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/') are not exported.

- [Group rows](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType') are always exported in an expanded state and the [isExpanded](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/isExpanded.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#isExpanded') property is ignored.

- Customizations made in the [cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate'), [groupCellTemplate](/api-reference/_hidden/dxDataGridColumn/groupCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate'), [headerCellTemplate](/api-reference/_hidden/dxDataGridColumn/headerCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#headerCellTemplate'), and [dataRowTemplate](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/dataRowTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataRowTemplate') are omitted, but you can recreate them in the exported file. For this purpose, use the **excelExporter**.[customizeCell](/api-reference/50%20Common/Object%20Structures/ExcelExportDataGridProps/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/ExcelExportDataGridProps/#customizeCell') or **pdfExporter**.[customizeCell](/api-reference/50%20Common/Object%20Structures/PdfExportDataGridProps/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#customizeCell') function. Refer to the following demos for more information: [Excel Cell Customization](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSCellCustomization/), [PDF Cell Customization](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PDFCellCustomization/).

- [Data mapping](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/1%20Item%20Mapping.md '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping') is ignored. Use [calculated columns](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') instead.

#include common-demobutton-named with {
    name: "Export to Excel Overview",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSOverview/"
}
#include common-demobutton-named with {
    name: "Export to PDF Overview",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PDFOverview/"
}
#include common-demobutton-named with {
    name: "Export Images to Excel",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSExportImages/"
}
#include common-demobutton-named with {
    name: "Export Images to PDF",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PDFExportImages/"
}
[tags] xlsx, csv, pdf
