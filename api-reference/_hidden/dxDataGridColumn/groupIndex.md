---
id: dxDataGridColumn.groupIndex
type: Number | undefined
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the index of a column when grid records are [grouped](/concepts/05%20UI%20Components/DataGrid/45%20Grouping '/Documentation/Guide/UI_Components/DataGrid/Grouping/') by the values of this column.

---
At runtime, the user can group grid records using the [context menu](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#contextMenuEnabled') or the [group panel](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/groupPanel '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/groupPanel/'). But there may be cases when grid records must be grouped initially. To do this, assign an integer value to the **groupIndex** property of those columns that should be used for grouping grid records. For example, consider the following data source.

    <!--JavaScript-->
    const dataSource = [
        { FirstName: "John", LastName: "Doe", Title: "Sales Manager" },
        { FirstName: "Michael", LastName: "King", Title: "Sales Representative" },
        // ...
    ];

To group these records first by the *"LastName"* field and then by the *"FirstName"* field, use the following code.

---

#####jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid({
        // ...
        columns: [
            { dataField: "FirstName", groupIndex: 1 },
            { dataField: "LastName", groupIndex: 0 },
            // ...
        ]
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="FirstName" [groupIndex]="1"></dxi-column>
        <dxi-column dataField="LastName" [groupIndex]="0"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxDataGrid ... >
            <DxColumn
                data-field="FirstName"
                :group-index="1"
            />
            <DxColumn
                data-field="LastName"
                :group-index="0"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <Column
                    dataField="FirstName"
                    groupIndex={1}
                />
                <Column
                    dataField="LastName"
                    groupIndex={0}
                />
            </DataGrid>
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordGrouping/"
}

#####See Also#####
-[Initial and Runtime Grouping](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/10%20Initial%20and%20Runtime%20Grouping.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Initial_and_Runtime_Grouping')