CardView uses the concept of **columns** from DataGrid. While it has rows and columns, the **columns** appear as *fields* on each card. The header shows the column names, and each field on a card includes a *caption* that usually matches the column [dataField](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/dataField.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#dataField'), and a unique *value* specific to the card.

The following code snippet restricts the CardView columns (fields) to `FullName`, `Position`, and `Email` and [allows column reordering](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#allowColumnReordering'):

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#card-view").dxCardView({
            // ...
            allowColumnReordering: true,
            columns: [
                {
                    dataField: "FullName",
                    allowHiding: false
                },
                "Position",
                "Email"
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ...
        [allowColumnReordering]="true"
    >
        <dxi-card-view-column
            dataField="FullName"
            [allowHiding]="false"
        >
        </dxi-card-view-column>
        <dxi-card-view-column
            dataField="Position"
        >
        </dxi-card-view-column>
        <dxi-card-view-column
            dataField="Email"
        >
        </dxi-card-view-column>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ...
            :allow-column-reordering="true"
        >
            <DxColumn data-field="FullName" :allow-hiding="false" />
            <DxColumn data-field="Position" />
            <DxColumn data-field="Email" />
        </DxCardView>
    </template>

    <script setup lang="ts">
    // ...
    import DxCardView, { DxColumn } from 'devextreme-vue/card-view';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import CardView, { Column } from 'devextreme-react/card-view';
    import { employees } from './data.ts';

    function App() {
        return (
            <CardView ...
                allowColumnReordering={true}
            >
                <Column dataField="FullName" allowHiding={false} />
                <Column dataField="Position" />
                <Column dataField="Email" />
            </CardView>
        );
    }

    export default App;

---