The **DataGrid** displays all columns from the **columns** array. To hide a column, set its [visible](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible) option to **false**. Hidden columns appear in the [columnChooser](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/). Users can restore hidden columns from it. To enable the column chooser. set the **columnChooser**.[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnChooser/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/#enabled') option to **true**. If a column should not be visible even in the column chooser, simply do not declare it in the **columns** array.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [
            // ...
            {
                dataField: "PostalCode",
                visible: false
            }],
            columnChooser: { enabled: true },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column dataField="PostalCode" [visible]="false"></dxi-column>
        <dxo-column-chooser [enabled]="true"></dxo-column-chooser>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxColumn data-field="PostalCode" :visible="false" />
                <DxColumnChooser :enabled="true" />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        DxColumn,
        DxColumnChooser
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxColumnChooser
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DataGrid,
        Column,
        ColumnChooser
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <Column dataField="PostalCode" visible={false} />
                    <ColumnChooser enabled={true} />
                </DataGrid>
            </div>
        );
    }

    export default App;

---