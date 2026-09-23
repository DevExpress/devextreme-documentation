Use the [addRow()](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/addRow().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#addRow') method to add an empty row.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("addRow");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        addRow () {
           this.dataGrid.instance.addRow();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            ref="myDataGrid">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            addNewRow() {
                this.$refs['myDataGrid'].instance.addRow();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { DataGridRef } from 'devextreme-react/data-grid';
    import React, { useCallback, useRef } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid from 'devextreme-react/data-grid';
    function App() {
        const dataGridRef = useRef<DataGridRef>(null);
        const addNewRow = useCallback(() => {
            const dataGridRefInstance = dataGridRef.current?.instance();
            if (!dataGridRefInstance) return;
            dataGridRefInstance.addRow();
        }, []);
        return <DataGrid ... ref={dataGridRef}></DataGrid>;
    }
    export default App;

---

You can specify initial values for a newly added row in the [onInitNewRow](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onInitNewRow.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onInitNewRow') event handler.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Hire_Date",
                dataType: "date"
            },
                // ...
            ],
            onInitNewRow: function(e) {
                e.data.Hire_Date = new Date();
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onInitNewRow)="onInitNewRow($event)">
        <dxi-data-grid-column dataField="Hire_Date" dataType="date"></dxi-data-grid-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onInitNewRow (e) {
            e.data.Hire_Date = new Date();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @init-new-row="setHireDate">
            <DxColumn data-field="Hire_Date" data-type="date" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        methods: {
            setHireDate(e) {
                e.data.Hire_Date = new Date();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { DataGridTypes } from 'devextreme-react/data-grid';
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid, { Column } from 'devextreme-react/data-grid';
    function App() {
        const setHireDate = useCallback((e: DataGridTypes.InitNewRowEvent) => {
            e.data.Hire_Date = new Date();
        }, []);
        return (
            <DataGrid ... onInitNewRow={setHireDate}>
                <Column dataField="Hire_Date" dataType="date" />
            </DataGrid>
        );
    }
    export default App;

---

#####See Also#####
#include common-link-callmethods