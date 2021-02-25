[note] This article applies to ASP.NET servers only.

Follow the instructions below to implement custom server-side data aggregation. This implementation requires the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> library.

1. Set the **remoteOperations**.[summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/summary.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#summary'), **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#groupPaging'), or [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/') property to **true**.

1. Implement and register a custom server-side data aggregator using **DevExtreme.AspNet.Data** as described in <a href="https://devexpress.github.io/DevExtreme.AspNet.Data/net/api/DevExtreme.AspNet.Data.Aggregation.CustomAggregators.html" target="_blank">this article</a>.

1. Pass the string identifier you used to register the aggregator to a summary item's [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') property:

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            $("#dataGridContainer").dxDataGrid({
                remoteOperations: true,
                summary: {
                    totalItems: [
                        { summaryType: "totalSales" }
                    ]
                }
            });
        });

    ##### Angular  

        <!--HTML-->
        <dx-data-grid ...
            [remoteOperations]="true">            
            <dxo-summary>
                <dxi-total-item summaryType="totalSales"></dxi-total-item>
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
            <DxDataGrid ...
                :remote-operations="true">
                <DxSummary>
                    <DxTotalItem
                        summary-type="totalSales"
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
                <DataGrid ...
                    remoteOperations={true}>
                    <Summary>
                        <TotalItem
                            summaryType="totalSales"
                        />
                    </Summary>
                </DataGrid>
            );
        }

    ##### ASP.NET MVC Controls

        <!--Razor C#-->
        @(Html.DevExtreme().DataGrid()
            .RemoteOperations(true)
            .Summary(s => s
                .TotalItems(i => {
                    i.Add().SummaryType("totalSales");
                })
            )
        )

    ---
