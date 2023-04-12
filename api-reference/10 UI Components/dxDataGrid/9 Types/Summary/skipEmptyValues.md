---
uid: ui/data_grid:Summary.skipEmptyValues
---
---
##### shortDescription
Specifies whether to skip *empty strings*, **null** and **undefined** values when calculating a summary. Does not apply when you use a remote data source.

---
<!--
Specified in the **summary** object, this property affects all summaries in the grid. In addition, the same property can be specified for an individual summary. It will override the global setting.

[note]

Summaries of the *count* type do not skip empty values regardless of the **skipEmptyValues** property. However, you can implement a custom summary that skips empty values, as follows:
    
---
#####jQuery

    &lt;!--JavaScript--&gt;
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    // ...
                    name: "customSummary1",
                    summaryType: "custom"
                }],
                calculateCustomSummary: function (options) {
                    if (options.name == "customSummary1") {
                        if (options.summaryProcess == "start") {
                            options.totalValue = 0;
                        }
                        if (options.summaryProcess == "calculate") {
                            if (e.value) {
                                options.totalValue++;
                            }
                        }
                    }
                }
            }
        });
    });

#####Angular

    &lt;!--HTML--&gt;
    &lt;dx-data-grid ... &gt;
        &lt;dxo-summary [calculateCustomSummary]="calculateSummary"&gt;
            &lt;dxi-total-item
                summaryType="custom"
                name="customSummary1"&gt;
            &lt;/dxi-total-item&gt;
        &lt;/dxo-summary&gt;
    &lt;/dx-data-grid&gt;

    &lt;!--TypeScript--&gt;
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        calculateSummary (options) {
            if (options.name == "customSummary1") {
                if (options.summaryProcess == "start") {
                    options.totalValue = 0;
                }
                if (options.summaryProcess == "calculate") {
                    if (e.value) {
                        options.totalValue++;
                    }
                }
            }
        };
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
                :calculate-custom-summary="calculateSummary"&gt;
                &lt;DxTotalItem
                    summary-type="custom"
                    name="customSummary1"
                /&gt;
            &lt;/DxSummary&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSummary,
        DxTotalItem
    } from 'devextreme-vue/data-grid';

    export default {
        components: {              
            DxDataGrid,
            DxSummary,
            DxTotalItem
        },
        // ...
        methods: {
            calculateSummary (options) {
                if (options.name == "customSummary1") {
                    if (options.summaryProcess == "start") {
                        options.totalValue = 0;
                    }
                    if (options.summaryProcess == "calculate") {
                        if (e.value) {
                            options.totalValue++;
                        }
                    }
                }
            }
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Summary,
        TotalItem
    } from 'devextreme-react/data-grid';

    export default function App() {
        const calculateSummary = useCallback((options) =&gt; {
            if (options.name == "customSummary1") {
                if (options.summaryProcess == "start") {
                    options.totalValue = 0;
                }
                if (options.summaryProcess == "calculate") {
                    if (e.value) {
                        options.totalValue++;
                    }
                }
            }
        }, []);

        return (
            &lt;DataGrid ... &gt;
                &lt;Summary
                    сalculateCustomSummary={calculateSummary}&gt;
                    &lt;TotalItem
                        summarType="custom"
                        name="customSummary1"
                    /&gt;
                &lt;/Summary&gt;
            &lt;/DataGrid&gt;
        );
    }

---

[/note]
-->