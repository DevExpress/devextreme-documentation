---
id: dxDataGrid.Options.editing.allowDeleting
---
---
##### shortDescription
Specifies whether a user can delete rows. It is called for each data row when defined as a function.

##### param(options): Object
Information about the current row.

##### field(options.component): dxDataGrid
The UI component's instance.

##### field(options.row): dxDataGridRowObject
The row's properties.

##### return: Boolean
**true** if the row can be deleted; otherwise **false**.

---
The following code allows a user to delete only odd data rows:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowDeleting: function(e) {
                    return e.row.rowIndex % 2 === 1;
                },
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        allowDeleting(e) {
            return e.row.rowIndex % 2 === 1;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowDeleting]="allowDeleting">
        </dxo-editing>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxEditing
                :allow-deleting="allowDeleting"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxEditing
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxEditing
        },
        // ...
        methods: {
            allowDeleting(e) {
                return e.row.rowIndex % 2 === 1;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Editing
    } from 'devextreme-react/data-grid';

    export default function App() {
        const allowDeleting = useCallback((e) => {
            return e.row.rowIndex % 2 === 1;
        }, []);

        return (
            <DataGrid ... >
                <Editing
                    allowDeleting={allowDeleting}
                />
            </DataGrid>
        );
    }

---

#####See Also#####
- [onRowRemoved](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved')
- [onRowRemoving](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onRowRemoving.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoving')
- [deleteRow(rowIndex)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deleteRow(rowIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#deleteRowrowIndex')
- [undeleteRow(rowIndex)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/undeleteRow(rowIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#undeleteRowrowIndex')