Grid records can be grouped by single or multiple columns. To group records, users should drag and drop column headers onto the [groupPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/). Enable the **groupPanel**.[visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible) property to display this UI element.

To group data in code, specify a column's [groupIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex) property. In this tutorial, the **groupIndex** is specified for the `Country` column:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            columns: [
            // ...
            {
                dataField: "Country",
                // ...
                groupIndex: 0,
            },
            // ...
            ],
            groupPanel: { visible: true },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column
            dataField="Country"
            ...
            [groupIndex]="0">
        </dxi-column>
        <dxo-group-panel [visible]="true"></dxo-group-panel>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxColumn
                    data-field="Country"
                    ...
                    :group-index="0">
                </DxColumn>
                <DxGroupPanel :visible="true" />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        DxColumn,
        // ...
        DxGroupPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            // ...
            DxGroupPanel
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
        // ...
        GroupPanel
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <Column
                        dataField="Country"
                        ...
                        groupIndex={0}>
                    </Column>
                    <GroupPanel visible={true} />
                </DataGrid>
            </div>
        );
    }

    export default App;

---

If you run the code, records are grouped by the `Country` column. This column's header is on the group panel. Drag and drop column headers to and from the group panel to change the grouping.
