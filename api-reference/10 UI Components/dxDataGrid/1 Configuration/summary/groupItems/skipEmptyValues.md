---
id: dxDataGrid.Options.summary.groupItems.skipEmptyValues
---
---
##### shortDescription
Specifies whether to skip *empty strings*, **null**, and **undefined** values when calculating a summary. Does not apply when you use a remote data source.

---
Specified in a summary configuration object, this property affects an individual summary item. If you need to apply a single setting to all summaries in a grid, specify the **skipEmptyValues** property in the **summary** object.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                // ...
                skipEmptyValues: false
            }
        });
    });


##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [skipEmptyValues]="false"></dxo-summary>
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
            <DxSummary
                :skip-empty-values="true">
                <!-- ... -->
            </DxSummary>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSummary
    } from 'devextreme-vue/data-grid';

    export default {
        components: {              
            DxDataGrid,
            DxSummary
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Summary
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <Summary
                    skipEmptyValues={true}>
                    {/* ... */}
                </Summary>
            </DataGrid>
        );
    }

---

[note] Summaries of the *count* type do not skip empty values regardless of the **skipEmptyValues** property. However, you can implement a custom summary that skips empty values. Refer to the global [skipEmptyValues](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/skipEmptyValues.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#skipEmptyValues') description for a code example.