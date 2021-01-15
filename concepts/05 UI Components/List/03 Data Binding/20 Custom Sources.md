Access to a custom data source is configured using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component. DevExtreme provides [ASP.NET](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/') and [PHP](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/') extensions to configure the **CustomStore** and implement server-side data processing. You can also use the third-party extension for [MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/'). 

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the following example: 

#include common-code-customsource-rawmode-withkey

[note]We advise against using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **List**:

- **Paging settings**: [take](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/take.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take'), [skip](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/skip.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#skip'), [requireTotalCount](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/requireTotalCount.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireTotalCount')   
Present if [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') is **true** and [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') is set in the **DataSource**. The **requireTotalCount** setting appears when the **List**'s [selectAllMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectAllMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectAllMode') is *"allPages"*.

- **Sorting settings**: [sort](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/sort.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort')         
Present if the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') property is set.

- **Filtering settings**: [filter](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/filter.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter')    
Present if the **DataSource**'s [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') property is set or [searching is enabled](/concepts/05%20UI%20Components/List/27%20Searching.md '/Documentation/Guide/UI_Components/List/Searching/') in the UI component.

- **Searching settings**: [searchExpr](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchExpr.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchExpr'), [searchOperation](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchOperation.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchOperation'), and [searchValue](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchValue.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchValue')     
Present if [corresponding properties](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') are set in the **DataSource**.

- **Grouping settings**: [group](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/group.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#group')      
Present if the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property is set.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ] // result data objects
        },
        ...
        ],
        totalCount: 100
    }

If the server has not received the **group** parameter, the resulting object should be as follows:

    {
        data: [ ... ], // result data objects
        totalCount: 100
    }

If the **List** allows the user to [delete items](/concepts/05%20UI%20Components/List/35%20Item%20Deletion '/Documentation/Guide/UI_Components/List/Item_Deletion/'), the **CustomStore** must implement the [remove](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/remove.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove') operation as well. Below is a generalized configuration of the **CustomStore** for the **List** UI component.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                key: "ID",
                load: function(loadOptions) {
                    const d = $.Deferred(),
                        params = {};
                    [
                        "skip",     
                        "take",  
                        "sort", 
                        "filter", 
                        "searchExpr",
                        "searchOperation",
                        "searchValue",
                        "group", 
                        "requireTotalCount"
                    ].forEach(function(i) {
                        if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                            params[i] = JSON.stringify(loadOptions[i]);
                    });
                    $.getJSON("http://mydomain.com/MyDataService", params)
                        .done(function(result) {
                            // Here, you can perform operations unsupported by the server
                            d.resolve(result.data, { 
                                totalCount: result.totalCount
                            });
                        });
                    return d.promise();
                },
                remove: function(key) {
                    return $.ajax({
                        url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                        method: "DELETE"
                    });
                }
            })
        });
    });
    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        listDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.listDataSource = new DataSource({
                store: new CustomStore({
                    key: "ID",
                    load: (loadOptions) => {
                        let params: HttpParams = new HttpParams();
                        [
                            "skip",     
                            "take",  
                            "sort", 
                            "filter", 
                            "searchExpr",
                            "searchOperation",
                            "searchValue",
                            "group", 
                            "requireTotalCount"
                        ].forEach(function(i) {
                            if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                                params = params.set(i, JSON.stringify(loadOptions[i]));
                        });
                        return httpClient.get("http://mydomain.com/MyDataService", { params: params })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                return {
                                    data: result.data,
                                    totalCount: result.totalCount
                                };
                            });
                    },
                    remove: function(key) {
                        return httpClient.delete('http://mydomain.com/MyDataService' + encodeURIComponent(key))
                            .toPromise();
                    }
                })
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="listDataSource">
    </dx-list>

##### Vue

    <template>
        <DxList ... 
            :data-source="dataSource" />
    </template>
    <script>
    import DxList from "devextreme-vue/list";
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
    const listDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                    "skip",     
                    "take",  
                    "sort", 
                    "filter", 
                    "searchExpr",
                    "searchOperation",
                    "searchValue",
                    "group", 
                    "requireTotalCount"
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
                            totalCount: result.totalCount
                        }
                    });
            },
            remove: (key) => {
                return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                    method: "DELETE"
                }).then(handleErrors);
            }
        })
    }
    export default {
        // ...
        data() {
            return {
                dataSource: listDataSource
            };
        },
        components: {
            // ...
            DxList
        }
    }
    </script>

##### React

    import React from "react";
    import List from "devextreme-react/list";
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
    const listDataSource = {
        store: new CustomStore({
            key: "ID",
            load: (loadOptions) => {
                let params = "?";
                [
                    "skip",     
                    "take",  
                    "sort", 
                    "filter", 
                    "searchExpr",
                    "searchOperation",
                    "searchValue",
                    "group", 
                    "requireTotalCount"
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
                            totalCount: result.totalCount
                        }
                    });
            },
            remove: (key) => {
                return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                    method: "DELETE"
                }).then(handleErrors);
            }
        })
    }
    class App extends React.Component {
        render() {
            return (
                <List ...
                    dataSource={listDataSource}>
                </List>
            );
        }
    }
    export default App;

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources')
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/0%20Connect%20to%20RESTful%20Service.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service')
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [List - Access the DataSource](/concepts/05%20UI%20Components/List/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/UI_Components/List/Data_Binding/Access_the_DataSource/')
- [List - Paging](/concepts/05%20UI%20Components/List/08%20Paging.md '/Documentation/Guide/UI_Components/List/Paging/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)

[tags]list, data binding, provide data, custom data source, CustomStore, DataSource, load