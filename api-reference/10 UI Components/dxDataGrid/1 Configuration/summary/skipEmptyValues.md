---
id: dxDataGrid.Options.summary.skipEmptyValues
---
---
##### shortDescription
Specifies whether to skip *empty strings*, **null** and **undefined** values when calculating a summary. Does not apply when you use a remote data source.

---
Specified in the **summary** object, this property affects all summaries in the grid. In addition, the same property can be specified for an individual summary. It will override the global setting.

[note]

Summaries of the *count* type do not skip empty values regardless of the **skipEmptyValues** property. However, you can implement a custom summary that skips empty values, as follows:
    
---
#####jQuery

    <!--JavaScript-->
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

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [calculateCustomSummary]="calculateSummary">
            <dxi-total-item
                summaryType="custom"
                name="customSummary1">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
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

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxSummary
                :calculate-custom-summary="calculateSummary">
                <DxTotalItem
                    summary-type="custom"
                    name="customSummary1"
                />
            </DxSummary>
        </DxDataGrid>
    </template>

    <script>
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
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Summary,
        TotalItem
    } from 'devextreme-react/data-grid';

    export default function App() {
        const calculateSummary = useCallback((options) => {
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
            <DataGrid ... >
                <Summary
                    сalculateCustomSummary={calculateSummary}>
                    <TotalItem
                        summarType="custom"
                        name="customSummary1"
                    />
                </Summary>
            </DataGrid>
        );
    }

---

[/note]