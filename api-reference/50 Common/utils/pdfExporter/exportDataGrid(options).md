---
id: pdfExporter.exportDataGrid(options)
module: pdf_exporter
export: exportDataGrid
---
---
##### shortDescription
Exports grid data to a PDF file.

##### return: Promise<void>
A Promise that is resolved when the grid data is prepared for export. It is a native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(options): PdfExportDataGridProps
Export settings.

---
#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PDFOverview/"
}

This method requires the <a href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</a> v2.3.1+ library to export data and create PDF files.

If you use jQuery, declare the <a href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</a> CDN links within the `<head>` tag of the HTML markup (see an example below). If you use Angular, Vue or React, install the library with the following command:

    npm install jspdf

You can call this method at any point in your application. 

Warning: You need to perform *extra steps* to generate PDFs with non-ASCII characters. See the [PDF Export guide](/concepts/80%20Troubleshooting/15%20PDF%20Export/00%20PDF%20Export.md '/Documentation/Concepts/Troubleshooting/PDF_Export') for more information.

In this example, this method is called in a standalone button's [onClick](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') handler:

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


    <!--HTML-->
    <head>
        <!-- ... -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.umd.min.js"></script>
        <!-- DevExtreme sources are referenced here -->
    </head>

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
            const dataGrid = dataGridRef.current.instance;

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


