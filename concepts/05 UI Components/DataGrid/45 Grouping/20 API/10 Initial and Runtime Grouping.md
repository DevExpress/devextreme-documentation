Assign a non-negative integer to the **columns**.[groupIndex](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupIndex') property to group data initially. The following example groups data first by the *"Continent"* field, then by the *"Country"* field.

---

##### jQuery

    <!--JavaScript-->
    $(() => {
        $('#dataGridContainer').dxDataGrid({
            // ...
            columns: [
                { dataField: 'Country', groupIndex: 1 },
                { dataField: 'Continent', groupIndex: 0 },
                // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxi-data-grid-column
            dataField="Country"
            [groupIndex]="1">
        </dxi-data-grid-column>
        <dxi-data-grid-column
            dataField="Continent"
            [groupIndex]="0">
        </dxi-data-grid-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';

    @Component({
        // ...
        standalone: true,
        imports: [DxDataGridModule]
    })
    export class AppComponent {
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxColumn
                data-field="Country"
                :group-index="1"
            />
            <DxColumn
                data-field="Continent"
                :group-index="0"
            />
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Column } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid>
                <Column
                    dataField="Country"
                    groupIndex={1}
                />
                <Column
                    dataField="Continent"
                    groupIndex={0}
                />
            </DataGrid>
        );
    }

---

Call the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method to change **groupIndex** at runtime.

#####See Also#####
#include common-link-callmethods
- [User Interaction - Group Data](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/10%20User%20Interaction/10%20Group%20Data.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#User_Interaction/Group_Data')
