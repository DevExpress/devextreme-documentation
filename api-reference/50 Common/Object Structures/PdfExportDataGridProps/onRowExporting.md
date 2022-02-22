---
id: PdfExportDataGridProps.onRowExporting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the row of the DataGrid is exported. Allows you to custimize the height of the exported row.

##### param(e): Object
Information about the event.

##### field(e.rowCells): Array<PdfExportedDataGridCell>
Cells for the exported row.

##### field(e.rowHeight): Number
Allows you to specify the minimum height of the exported row. If the specified value is less than the height of the text, then the row height will be automatically increased so that the text has enough space.

---
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
                    onRowExporting: (e) => {
                        e.rowHeight = 20;
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
                onRowExporting: (e) => {
                    e.rowHeight = 20;
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
                    onRowExporting: (e) => {
                        e.rowHeight = 20;
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
            const dataGrid = dataGridRef.current.instance;

            exportDataGridToPdf({
                jsPDFDocument: doc,
                component: dataGrid,
                onRowExporting: (e) => {
                    e.rowHeight = 20;
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