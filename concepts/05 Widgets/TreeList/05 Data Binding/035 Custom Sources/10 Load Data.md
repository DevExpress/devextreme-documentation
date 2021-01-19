The **CustomStore** requires the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function. It sends data processing settings to the server and gets processed data back. These settings depend on which [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/') are enabled. The following data processing settings apply to the **TreeList**:

- **Sorting settings**: [sort](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/sort.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort')         

- **Filtering settings**: [filter](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/filter.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter')    

- **Grouping settings**: [group](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/group.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#group')      
 The **groupInterval** field of the **group** setting is present only when the UI component requests the [header filter](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter')'s data, and only if this data contains numbers or dates. Note that for numbers, the [groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/headerFilter/#groupInterval') option should be specified explicitly.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ],  // subgroups or data objects (for the last group when isExpanded = true)
                             // can be null when isExpanded = false and there are no further groups
            count: 3         // count of items in this group; required only when items = null
        },
        ...
        ]
    }

If the server has not received the **group** parameter, the resulting object should be as follows:

    {
        data: [ ... ] // result data objects
    }

Below is a generalized **CustomStore** configuration for the **TreeList** UI component:

---
##### jQuery

    <!--JavaScript-->
    var treeListDataSource = new DevExpress.data.DataSource({
        load: function(loadOptions) {
            var d = $.Deferred(),
                    params = {};
            [
                "sort", 
                "filter", 
                "group", 
                "parentIds"
            ].forEach(function(i) {
                if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                    params[i] = JSON.stringify(loadOptions[i]);
            });
            $.getJSON("http://mydomain.com/MyDataService", params)
                .done(function(result) {
                    // You can process the received data here
                    d.resolve(result.data);
                });
            return d.promise();
        }
    });
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: treeListDataSource,
            remoteOperations: {
                filtering: true,
                sorting: true,
                grouping: true
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxTreeListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        treeListDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.treeListDataSource = new DataSource({
                load: (loadOptions) => {
                    let params: HttpParams = new HttpParams();
                    [
                        "sort", 
                        "filter", 
                        "group", 
                        "parentIds"
                    ].forEach(function(i) {
                        if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                            params = params.set(i, JSON.stringify(loadOptions[i]));
                    });
                    return httpClient.get("http://mydomain.com/MyDataService", { params: params })
                        .toPromise()
                        .then(result => {
                            // You can process the received data here
                            return result.data;
                        });
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list ...
        [dataSource]="treeListDataSource">
        <dxo-remote-operations
            [filtering]="true"
            [sorting]="true"
            [grouping]="true">
        </dxo-remote-operations>
    </dx-tree-list>

#####Vue

    <template>
        <DxTreeList ... 
            :data-source="dataSource"
            :remote-operations="remoteOperations" />
    </template>
    <script>
    import DxTreeList from "devextreme-vue/tree-list";
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
    const treeListDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                    "sort", 
                    "filter", 
                    "group", 
                    "perentIds"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://domain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        return result.data;
                    });
            }
        })
    }
    export default {
        // ...
        data() {
            return {
                dataSource: treeListDataSource,
                remoteOperations: { 
                    filtering: true,
                    sorting: true,
                    grouping: true
                }
            };
        },
        components: {
            // ...
            DxTreeList
        }
    }
    </script>

#####React

    import React from "react";
    import TreeList, { RemoteOperations } from "devextreme-react/tree-list";
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
    const treeListDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                    "sort", 
                    "filter", 
                    "group",
                    "parentIds"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                });
                params = params.slice(0, -1);
                return fetch(`https://mydomain.com/MyDataService${params}`)
                    .then(handleErrors)
                    .then(response => response.json())
                    .then((result) => {
                        return result.data;
                    });
            }
        })
    }
    class App extends React.Component {
        render() {
            return (
                <TreeList ...
                    dataSource={treeListDataSource}>
                    <RemoteOperations
                        filtering={true}
                        sorting={true}
                        grouping={true} />
                </TreeList>
            );
        }
    }
    export default App;

---
