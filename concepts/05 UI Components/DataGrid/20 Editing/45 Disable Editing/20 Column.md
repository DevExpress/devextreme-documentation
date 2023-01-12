Set a column's [allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowEditing') property to **false** to disable data editing within a specific column.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [
                {
                    allowEditing: false,
                    // ...
                }
            ] 
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column [allowEditing]="false" ></dxi-column>
    </dx-data-grid>

     <!-- tab: app.component.ts -->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent { ... }
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
            <DxColumn :allowEditing="false" />
        </DxDataGrid>
    </template>

    <script>
    import {
        DxDataGrid,
        DxColumn,
        // ...
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            // ...
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, { Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid ... >
                {/* ... */}
                <Column allowEditing={false} />
            </DataGrid>
        );
    }

    export default App;

---