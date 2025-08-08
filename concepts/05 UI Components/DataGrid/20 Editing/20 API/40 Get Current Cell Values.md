To get current cell values (saved or unsaved), call [cellValue(rowIndex, dataField)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cellValuerowIndex_dataField').

The method takes a row index parameter. To get row indexes, you can utilize [getRowIndexByKey(key)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getRowIndexByKeykey'). To get the key value of the row being edited, call [option(optionName)](/api-reference/10%20UI%20Components/Component/3%20Methods/option(optionName).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#optionoptionName') with the `'editing.editRowKey'` parameter.

The following code snippet demonstrates how to implement **getRowIndexByKey**, **cellValue**, and **option** to get edited cell values:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const dataGridInstance = $('#dataGridContainer').dxDataGrid({ ... }).dxDataGrid('instance');

        function getCellValue() {
            const editRowKey = dataGridInstance.option('editing.editRowKey');
            const editRowIndex = dataGridInstance.getRowIndexByKey(editRowKey);

            if (editRowIndex >= 0){
                return dataGridInstance.cellValue(editRowIndex, dataField);
            }

            return null;
        }
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from "@angular/core";
    import { DxDataGridComponent } from "devextreme-angular";

    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

        getCellValue() {
            const editRowKey = this.dataGrid.instance.option('editing.editRowKey');
            const editRowIndex = this.dataGrid.instance.getRowIndexByKey(editRowKey);

            if (editRowIndex >= 0) {
                return this.dataGrid.instance.cellValue(editRowIndex, dataField);
            }

            return null;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            ref="dataGridRef"
        />
    </template>

    <script>
    import { ref } from 'vue';
    import { DxDataGrid } from 'devextreme-vue/data-grid';

    const dataGridRef = ref(null);
    
    function getCellValue() {
        const editRowKey = dataGridRef.value.instance.option('editing.editRowKey');
        const editRowIndex = dataGridRef.value.instance.getRowIndexByKey(editRowKey);

        if (editRowIndex >= 0) {
            return dataGridRef.value.instance.cellValue(editRowIndex, dataField);
        }

        return null;
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useRef, useCallback } from 'react';
    import { DataGrid } from 'devextreme-react/data-grid';

    function App(): JSX.Element {
        const dataGridRef = useRef(null);

        const getCellValue = useCallback(() => {
            const editRowKey = dataGridRef.current.instance().option('editing.editRowKey');
            const editRowIndex = dataGridRef.current.instance().getRowIndexByKey(editRowKey);

            if (editRowIndex >= 0) {
                return dataGridRef.current.instance().cellValue(editRowIndex, dataField);
            }

            return null;
        }, [])

        return (
            <DataGrid ...
                ref={dataGridRef}
            />
        )
    }

---

[note] The **cellValue** method returns edited values only after cell editors lose focus.

#####See Also#####
#include common-link-callmethods
