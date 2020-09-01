The **DataGrid** includes the following UI elements used to filter and search data:

- [filterRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/)
- [headerFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/)
- [filterPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterPanel/) with [filterBuilder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterBuilder)
- [searchPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/)

In this tutorial, we display the **filterRow** and **searchPanel**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            filterRow: { visible: true },
            searchPanel: { visible: true },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxo-search-panel [visible]="true"></dxo-search-panel>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app">
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

---

Run the code and enter a value into a filter row cell or the search panel. Grid data will be filtered according to this value. In the next step, we will configure grouping.