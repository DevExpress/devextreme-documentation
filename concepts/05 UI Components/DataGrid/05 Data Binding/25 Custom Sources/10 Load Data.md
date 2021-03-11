The **CustomStore** requires the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function. It sends data processing settings to the server and gets processed data back. These settings depend on which [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/') are enabled. The following data processing settings apply to the DataGrid:

- **Paging settings**: [take](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/take.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take'), [skip](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/skip.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip'), [requireTotalCount](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/requireTotalCount.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireTotalCount')    

    [note] When [scrolling](/concepts/05%20UI%20Components/DataGrid/40%20Scrolling '/Documentation/Guide/UI_Components/DataGrid/Scrolling/') is infinite, **requireTotalCount** is **false**. It should not be changed to ensure scrolling works properly.

- **Sorting settings**: [sort](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/sort.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort')         

- **Filtering settings**: [filter](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/filter.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter')    

- **Grouping settings**: [group](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/group.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#group')      
 The **groupInterval** field of the **group** setting is present only when the UI component requests the [header filter](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#Header_Filter')'s data, and only if this data contains numbers or dates. Note that for numbers, the [groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/#groupInterval') property should be specified explicitly.

- **Summary calculation settings**: [totalSummary](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/totalSummary.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#totalSummary'), [groupSummary](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/groupSummary.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#groupSummary')      

- **Group paging settings**: [requireGroupCount](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/requireGroupCount.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireGroupCount')     

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ],          // subgroups or data objects (for the last group when isExpanded = true)
                                     // can be null when isExpanded = false 
            count: 3,                // count of items in this group; required only when items = null
            summary: [30, 20, 40]    // group summary results
        },
        ...
        ], 
        totalCount: 200,              // if required in requireTotalCount
        summary: [170, 20, 20, 1020], // total summary results
        groupCount: 35                // if required in requireGroupCount
    }

If the server has not received the **group** parameter, the resulting object should be as follows:

    {
        data: [ ... ],               // result data objects
        totalCount: 200,             // if required in requireTotalCount
        summary: [170, 20, 20, 1020] // total summary results
    }

Below is a generalized **CustomStore** configuration for the DataGrid UI component:

---

#####jQuery

    <!--JavaScript-->
    var gridDataSource = new DevExpress.data.DataSource({
        key: "ID",
        load: function(loadOptions) {
            var d = $.Deferred(),
                    params = {};
            [
                "skip",     
                "take", 
                "requireTotalCount", 
                "requireGroupCount", 
                "sort", 
                "filter", 
                "totalSummary", 
                "group", 
                "groupSummary"
            ].forEach(function(i) {
                if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                    params[i] = JSON.stringify(loadOptions[i]);
            });
            $.getJSON("https://mydomain.com/MyDataService", params)
                .done(function(result) {
                    d.resolve(result.data, { 
                        totalCount: result.totalCount,
                        summary: result.summary,
                        groupCount: result.groupCount
                    });
                });
            return d.promise();
        }
    });
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: gridDataSource,
            remoteOperations: { groupPaging: true }
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxDataGridModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        gridDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.gridDataSource = new DataSource({
                key: "ID",
                load: (loadOptions) => {
                    let params: HttpParams = new HttpParams();
                    [
                        "skip", 
                        "take", 
                        "requireTotalCount", 
                        "requireGroupCount", 
                        "sort", 
                        "filter", 
                        "totalSummary", 
                        "group", 
                        "groupSummary"
                    ].forEach(function(i) {
                        if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                            params = params.set(i, JSON.stringify(loadOptions[i]));
                    });
                    return httpClient.get("https://mydomain.com/MyDataService", { params: params })
                        .toPromise()
                        .then(result => {
                            return {
                                data: result.data,
                                totalCount: result.totalCount,
                                summary: result.summary,
                                groupCount: result.groupCount
                            };
                        });
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid ...
        [dataSource]="gridDataSource">
        <dxo-remote-operations 
            [groupPaging]="true">
        </dxo-remote-operations>
    </dx-data-grid>

#####Vue

    <template>
        <DxDataGrid ... 
            :data-source="dataSource"
            :remote-operations="remoteOperations" />
    </template>
    <script>
    import DxDataGrid from "devextreme-vue/data-grid";
    import CustomStore from "devextreme/data/custom_store";
    import 'whatwg-fetch';
    // ...
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    const gridDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                    "skip", 
                    "take", 
                    "requireTotalCount", 
                    "requireGroupCount", 
                    "sort", 
                    "filter", 
                    "totalSummary", 
                    "group", 
                    "groupSummary"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        return { 
                            data: result.data,
                            totalCount: result.totalCount,
                            summary: result.summary,
                            groupCount: result.groupCount
                        }
                    });
            }
        })
    }
    export default {
        // ...
        data() {
            return {
                dataSource: gridDataSource,
                remoteOperations: { groupPaging: true }
            };
        },
        components: {
            // ...
            DxDataGrid
        }
    }
    </script>

#####React

    import React from "react";
    import DataGrid, { RemoteOperations } from "devextreme-react/data-grid";
    import CustomStore from "devextreme/data/custom_store";
    import 'whatwg-fetch';
    // ...
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    function handleErrors(response) {
        if (!response.ok) 
            throw Error(response.statusText);
        return response;
    }
    const gridDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                    "skip", 
                    "take", 
                    "requireTotalCount", 
                    "requireGroupCount", 
                    "sort", 
                    "filter", 
                    "totalSummary", 
                    "group", 
                    "groupSummary"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        return { 
                            data: result.data,
                            totalCount: result.totalCount,
                            summary: result.summary,
                            groupCount: result.groupCount
                        }
                    });
            }
        })
    }
    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    dataSource={gridDataSource}>
                    <RemoteOperations
                        groupPaging={true} />
                </DataGrid>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource/"
}

