Handle the DataGrid's [onEditorPreparing](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditorPreparing') event. Check the following parameters and set [editorOptions.disabled](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions') as required:

- **parentType**: the row type - "dataRow" or "filterRow"
- **dataField**: the corresponding column 
- **row.data**: row data values
- **row.isNewRow**: `true`, if the user is adding a new row

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

You may need an extra implementation step if the control uses an edit mode that activate multiple editors at once (such as the "Row" edit mode). Specify a [setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue') callback for the column whose values specify editor availability in other columns. That callback helps you refresh the editors - disable or enable them as needed - and keep the control in edit mode. Refer to the following topic for additional information: [Dynamically Change Editor Properties in the Editing State](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Dynamically%20Change%20Editor%20Properties%20in%20the%20Editing%20State.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Editor_Properties_in_the_Editing_State/').
