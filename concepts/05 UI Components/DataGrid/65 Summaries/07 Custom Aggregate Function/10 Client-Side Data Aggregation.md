Follow the steps below to configure custom client-side data aggregation.

1. Make sure that the **remoteOperations**.[summary](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/summary.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#summary'), **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#groupPaging'), **remoteOperations**.[grouping](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#grouping), or [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/') property is not set or set to **false**.

1. Add one or several summary items to the [totalItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/') or [groupItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/') array. Specify their [names](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name') and set [summary types](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') to *"custom"*:

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            $("#dataGridContainer").dxDataGrid({
                // ...
                summary: {
                    totalItems: [
                        { name: "сustomSummary1", summaryType: "custom" },
                        { name: "сustomSummary2", summaryType: "custom" }
                    ]
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-total-item
                    name="сustomSummary1"
                    summaryType="custom">
                </dxi-total-item>
                <dxi-total-item
                    name="сustomSummary2"
                    summaryType="custom">
                </dxi-total-item>
            </dxo-summary>
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
                <DxSummary>
                    <DxTotalItem
                        name="сustomSummary1"
                        summary-type="custom"
                    />
                    <DxTotalItem
                        name="сustomSummary2"
                        summary-type="custom"
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
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import DataGrid, { 
            Summary,
            TotalItem
        } from 'devextreme-react/data-grid';

        export default function App() {
            return (
                <DataGrid ... >
                    <Summary>
                        <TotalItem
                            name="сustomSummary1"
                            summaryType="custom"
                        />
                        <TotalItem
                            name="сustomSummary2"
                            summaryType="custom"
                        />
                    </Summary>
                </DataGrid>
            );
        }

    ---

1. Implement the [calculateCustomSummary](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary') function as detailed in its description.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/"
}

#####See Also#####
- [Format Text and Value](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/40%20Format%20Text%20and%20Value.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Format_Text_and_Value/')
