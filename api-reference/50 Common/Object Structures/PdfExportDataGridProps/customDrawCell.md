---
id: PdfExportDataGridProps.customDrawCell
type: function(options)
---
---
##### shortDescription
A function that allows you to draw cell content of the exported DataGrid. This function is executed before the cell is exported.

##### param(options): Object
Information about the event.

##### field(options.cancel): Boolean
Allows you to prevent default drawing logic.

##### field(options.doc): Object
An instance of the [jsPDFDocument](/api-reference/50%20Common/Object%20Structures/PdfExportDataGridProps/jsPDFDocument.md '/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#jsPDFDocument') object.

##### field(options.gridCell): PdfDataGridCell
A DataGrid cell.

##### field(options.pdfCell): PdfCell
An object that describes a cell in a PDF file.

##### field(options.rect): Object
An object that contains information about the location of the cell and its dimensions. The object has the following structure: { x: numeric, y: numeric, h: numeric, w: numeric }.

---
#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PDFCellCustomization/"
}

In the following example, this function adds an image to a cell:

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $('#exportButton').dxButton({
            // ...
            onClick: function() {
                const doc = new jsPDF();
                DevExpress.pdfExporter.exportDataGrid({
                    jsPDFDocument: doc,
                    component: dataGrid,
                    customDrawCell: (e) => {
                        if (e.gridCell.rowType === 'data' && e.gridCell.column.dataField === 'Picture') {
                            doc.addImage(e.gridCell.value, 'PNG', e.rect.x, e.rect.y, e.rect.w, e.rect.h);
                            e.cancel = true;
                        }
                    },
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
            exportDataGridToPdf({
                jsPDFDocument: doc,
                component: this.dataGrid.instance,
                customDrawCell: (e) => {
                    if (e.gridCell.rowType === 'data' && e.gridCell.column.dataField === 'Picture') {
                        doc.addImage(e.gridCell.value, 'PNG', e.rect.x, e.rect.y, e.rect.w, e.rect.h);
                        e.cancel = true;
                    }
                },
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
    import 'jspdf-autotable';
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
                    component: this.dataGrid,
                    customDrawCell: (e) => {
                        if (e.gridCell.rowType === 'data' && e.gridCell.column.dataField === 'Picture') {
                            doc.addImage(e.gridCell.value, 'PNG', e.rect.x, e.rect.y, e.rect.w, e.rect.h);
                            e.cancel = true;
                        }
                    },
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
    import 'jspdf-autotable';
    import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';    

    const App = () => {
        const dataGridRef = useRef(null);

        function exportGrid() {
            const doc = new jsPDF();
            const dataGrid = dataGridRef.current.instance();

            exportDataGridToPdf({
                jsPDFDocument: doc,
                component: dataGrid,
                customDrawCell: (e) => {
                    if (e.gridCell.rowType === 'data' && e.gridCell.column.dataField === 'Picture') {
                        doc.addImage(e.gridCell.value, 'PNG', e.rect.x, e.rect.y, e.rect.w, e.rect.h);
                        e.cancel = true;
                    }
                },
            }).then(() => {
                doc.save('Customers.pdf');
            });
        }

        return (
            <React.Fragment>
                <Button ...
                    onClick={exportGrid}
                />
                <DataGrid ...
                    ref={dataGridRef}>
                    {/* ... */}
                </DataGrid>
            </React.Fragment>
        );
    }

    export default App;

---
