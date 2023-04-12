---
uid: ui/data_grid:SummaryGroupItem.skipEmptyValues
---
---
##### shortDescription
Specifies whether to skip *empty strings*, **null**, and **undefined** values when calculating a summary. Does not apply when you use a remote data source.

---
<!--
Specified in a summary configuration object, this property affects an individual summary item. If you need to apply a single setting to all summaries in a grid, specify the **skipEmptyValues** property in the **summary** object.

---
##### jQuery

    &lt;!--JavaScript--&gt;
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

    &lt;!--HTML--&gt;
    &lt;dx-data-grid ... &gt;
        &lt;dxo-summary [skipEmptyValues]="false"&gt;&lt;/dxo-summary&gt;
    &lt;/dx-data-grid&gt;

    &lt;!--TypeScript--&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxDataGrid ... &gt;
            &lt;DxSummary
                :skip-empty-values="true"&gt;
                &lt;!-- ... --&gt;
            &lt;/DxSummary&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Summary
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            &lt;DataGrid ... &gt;
                &lt;Summary
                    skipEmptyValues={true}&gt;
                    {/* ... */}
                &lt;/Summary&gt;
            &lt;/DataGrid&gt;
        );
    }

---

[note] Summaries of the *count* type do not skip empty values regardless of the **skipEmptyValues** property. However, you can implement a custom summary that skips empty values. Refer to the global [skipEmptyValues](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/skipEmptyValues.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#skipEmptyValues') description for a code example.
-->