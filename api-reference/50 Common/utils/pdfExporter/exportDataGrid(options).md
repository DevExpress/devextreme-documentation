---
id: pdfExporter.exportDataGrid(options)
module: pdf_exporter
---
---
##### shortDescription
Exports grid data to a PDF file.

##### return: Promise<void>
A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a> that is resolved with an object that contains the coordinates of the first and last cells.

##### param(options): PdfExportDataGridProps
Export settings.

---
This method requires the <a href="https://github.com/MrRio/jsPDF" target="_blank">jsPDF</a> library to export data and the <a href="https://github.com/simonbengtsson/jsPDF-AutoTable" target="_blank">jsPDF-AutoTable</a> plugin to create tables in exported files.

You can call this method at any point in your application.

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

        let dataGrid = $('#gridContainer').dxDataGrid({
            // Specify grid options here
        }).dxDataGrid('instance');
    });


    <!--HTML-->
    <head>
        <!-- ... -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.umd.min.js"></script>
        <script src=""https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.9/jspdf.plugin.autotable.min.js"></script>
        <!-- reference the DevExtreme sources here -->
    </head>

##### Angular   

    <!-- tab: Installation command -->
    npm install jspdf jspdf-autotable

    <!-- tab: app.component.html -->
    <dx-button ... 
        (onClick)="exportGrid($event)">
    </dx-button>

    <dx-data-grid ...
        ref={this.dataGridRef}
        >    
        <!-- Specify grid options here -->
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { exporDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
    import { jsPDF } from 'jspdf';
    import 'jspdf-autotable';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

        exportGrid() {
            const doc = new jsPDF();
            DevExpress.excelExporter.exportDataGridToPdf({
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

    <!-- tab: Installation command -->
    npm install jspdf jspdf-autotable

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxButton ...
                @click="exportGrid()"
            />

            <DxDataGrid ...
                :ref="dataGridRef"
                >
                <!-- Specify grid options here -->
            </DxDataGrid>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxButton from 'devextreme-vue/button';
    import { jsPDF } from 'jspdf';
    import 'jspdf-autotable';
    import { exporDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';

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
                DevExpress.excelExporter.exportDataGridToPdf({
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

    <!-- tab: Installation command -->
    npm install jspdf jspdf-autotable

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';
    import Button from 'devextreme-react/button';
    import { jsPDF } from 'jspdf';
    import 'jspdf-autotable';

    import { exporDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';

    const dataGridRef = React.createRef();

    export default function App() {
        function exportGrid() {
            const doc = new jsPDF();
            const dataGrid = dataGridRef.current.instance;

            DevExpress.excelExporter.exportDataGridToPdf({
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
                        {/* Specify grid options here */}
                    </DataGrid>
                </div>
            </React.Fragment>
        );
    }

---     


#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExportToPDF/"
}