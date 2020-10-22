When the width of all columns exceeds the widget width, the grid becomes horizontally scrollable. If you set the [columnFixing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/).[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/#enabled) option to **true**, users can keep certain columns in view regardless of how far they scroll the grid.

You can also fix a column in code by enabling its [fixed](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed) option. The column is fixed to the widget's left edge by default. To change the position, set the [fixedPosition](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition) option.

The following code fixes the `FullName` column to the default left position and allows users to fix and unfix columns at runtime:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columnFixing: { enabled: true },
            columns: [{
                dataField: "FullName", 
                fixed: true
            },
            // ...
            ],
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="FullName"
            [fixed]="true">
        </dxi-column>
        <!-- ... -->
        <dxo-column-fixing [enabled]="true"></dxo-column-fixing>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <DxColumn
                    data-field="FullName"
                    :fixed="true">
                </DxColumn>
                <!-- ... -->
                <DxColumnFixing :enabled="true" />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        DxColumn,
        DxColumnFixing
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxColumnFixing
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
        ColumnFixing
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <Column
                        dataField="FullName"
                        fixed={true}>
                    </Column>
                    {/* ... */}
                    <ColumnFixing enabled={true} />
                </DataGrid>
            </div>
        );
    }

    export default App;

---
