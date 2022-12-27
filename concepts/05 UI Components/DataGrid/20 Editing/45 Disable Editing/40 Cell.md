Handle the DataGrid [onEditorPreparing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditorPreparing) event to conditionally set the [editorOptions.disabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions) option to `true`. You also need to check the **parentType** parameter to determine a row type this cell belongs to: "dataRow" or "filterRow". To see for which editor this event raises, inspect the **dataField** parameter. Finally, check the **row.data** object that contains row data values.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            onEditorPreparing(e) {
                if (e.dataField === "LastName" && e.parentType === "dataRow") {
                    e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid 
        // ...
        (onEditorPreparing)="onEditorPreparing($event)"
    >   
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onEditorPreparing(e) {
            if (e.dataField === "LastName" && e.parentType === "dataRow") {
                e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
            }
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
        <DxDataGrid 
            @editor-preparing="onEditorPreparing"
        >
        </DxDataGrid>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            // ...
        },
        methods: {
            onEditorPreparing(e) {
                if (e.dataField === "LastName" && e.parentType === "dataRow") {
                    e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
                }
            }
        }
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from "react";
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid } from 'devextreme-react/data-grid';

    function App() {
        // ...
        const onEditorPreparing = useCallback((e) => {
            if (e.dataField === "LastName" && e.parentType === "dataRow") {
                e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
            }
        }, []);

        return (
            <DataGrid 
                onEditorPreparing={onEditorPreparing}
            >
            </DataGrid>
        );
    }

    export default App;

---

If you want to dynamically enable/disable an editor based on values in other row editors, specify the [setCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue) callback function for the columns that editors should affect other editors. Refer to the following topic for implementation details: [Dynamically Change Editor Properties in the Editing State](/Documentation/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Editor_Properties_in_the_Editing_State/).


To enable/disable specific cells for existing or new rows, check the **row.isNewRow** parameter.
