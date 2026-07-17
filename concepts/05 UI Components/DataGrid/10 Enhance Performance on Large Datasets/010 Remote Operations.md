We recommend server-side data processing for large datasets. [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') supports server-side paging, filtering, and sorting. DevExtreme provides an extension that helps implement data processing for [ASP.NET](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%20and%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API_and_MongoDB/') servers. You can also use a third-party extension for [MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%20and%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API_and_MongoDB/'). If these extensions do not suit your data source, implement server-side data processing according to the protocol described in [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/').

Specify the [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/') property to notify the DataGrid of the server's data processing operations.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            remoteOperations: {
                filtering: true,
                paging: true,
                sorting: true,
                groupPaging: true,
                grouping: true,
                summary: true
            }
        });
    }); 

#####Angular

    <!--HTML--><dx-data-grid ... >
        <dxo-data-grid-remote-operations
            [filtering]="true"
            [paging]="true"
            [sorting]="true"
            [summary]="true"
            [grouping]="true"
            [groupPaging]="true"> 
        </dxo-data-grid-remote-operations>
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
            <DxRemoteOperations
                :filtering="true"
                :paging="true"
                :sorting="true"
                :summary="true"
                :grouping="true"
                :group-paging="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid, {
        DxRemoteOperations
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxRemoteOperations
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DataGrid, {
        RemoteOperations
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <RemoteOperations
                    filtering={true}
                    paging={true}
                    sorting={true}
                    summary={true}
                    grouping={true}
                    groupPaging={true}
                />
            </DataGrid>
        );
    }

---
