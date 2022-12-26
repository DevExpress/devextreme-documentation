Set a column's [allowEditing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowEditing) property to **false** to disable editing its data.

    <!--JavaScript-->
    allowEditing: false

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [
                allowEditing: false,
            ] 
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column [allowEditing]="false" ></dxi-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxFilterRow :visible="true" />
                <DxSearchPanel :visible="true" />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
        DxFilterRow,
        DxSearchPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            // ...
            DxFilterRow,
            DxSearchPanel
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DataGrid,
        // ...
        FilterRow,
        SearchPanel
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <FilterRow visible={true} />
                    <SearchPanel visible={true} />
                </DataGrid>
            </div>
        );
    }

    export default App;

---