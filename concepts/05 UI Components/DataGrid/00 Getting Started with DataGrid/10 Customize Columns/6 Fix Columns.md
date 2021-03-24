When the width of all columns exceeds the UI component's width, users can scroll the grid horizontally. If you set the [columnFixing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnFixing/').[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnFixing/#enabled') property to **true**, users can use a column header's context menu to show certain columns in the view regardless of how far they scroll the grid.

You can also enable a column's [fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixed') property in code. This fixes the column to the UI component's left edge. To change the position, set the [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixedPosition') property.

The following code fixes the `FullName` column to the default position and allows users to fix and unfix columns at runtime:

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
