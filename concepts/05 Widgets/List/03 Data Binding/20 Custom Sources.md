DevExtreme provides the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component, a flexible instrument that allows you to configure data access manually, for consuming data from any source. The following extensions for ASP.NET and PHP servers simplify the task of configuring the **CustomStore** and implement server-side data processing as well:

- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the next example. 

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return $.getJSON('https://mydomain.com/MyDataService');
                    }
                })
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule } from '@angular/http';
    import { DxListModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent  {
        listDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.listDataSource = new DataSource({
                store: new CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return http.get('https://mydomain.com/MyDataService')
                                    .toPromise()
                                    .then(response => {
                                        return response.json();
                                    });
                    }
                })
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            HttpModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="listDataSource">
    </dx-list>

---

[note]We advise against using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **List**:

* **take**: <span style="font-size:smaller">Number</span>      
Restricts the number of top-level data objects to return.

* **skip**: <span style="font-size:smaller">Number</span>      
Skips some data objects from the start of the result set. **skip** and **take** are present if [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') is **true** and [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') is set in the **DataSource**.

* **sort**: <span style="font-size:smaller">Array</span>      
Defines sorting parameters. Present if the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') option is set. Multiple parameters apply to the data in sequence to implement multi-level sorting. Contains objects of the following structure:

        { selector: "field", desc: true/false }    

* **filter**: <span style="font-size:smaller">Array</span>      
Defines filtering parameters. Present if the **DataSource**'s [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') option is set. Possible variants:

    * Binary filter

            [ "field", "=", 3 ]

    * Unary filter
    
             [ "!", [ "field", "=", 3 ] ]

    * Complex filter
    
            [
                [ "field", "=", 10 ],
                "and",
                [
                    [ "otherField", "<", 3 ],
                    "or",
                    [ "otherField", ">", 11 ]
                ]
            ]

    See the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') topic for more details.

* **searchExpr**, **searchOperation** and **searchValue**: <span style="font-size:smaller">Strings</span>    
Another way to define a filter restricted to one criterion. Present if [corresponding options](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') are set in the **DataSource**.

* **group**: <span style="font-size:smaller">Array</span>     
Defines grouping levels to be applied to the data. Present if the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option is set. Contains objects of the following structure:

        { selector: "field", desc: true/false }

    See the [Grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping') topic for more details.

* **requireTotalCount**: <span style="font-size:smaller">Boolean</span>     
Indicates that a total count of data objects in the result set must be returned in the **totalCount** field of the result. This count must reflect the number of data items after filtering, but disregard any **take** parameter used for the query. Used when the **List**'s [selectAllMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode') is *"allPages"*.

After receiving these settings, the server should apply them to data and send back an object of the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ] // result data objects
        },
        ...
        ],
        totalCount: 100
    }

If the **group** setting is absent, the object structure is different: 

    {
        data: [ ... ], // result data objects
        totalCount: 100
    }

If the **List** allows the user to [delete items](/concepts/05%20Widgets/List/35%20Item%20Deletion '/Documentation/Guide/Widgets/List/Item_Deletion/'), the **CustomStore** must implement the [remove](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/remove.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove') operation as well. Here is a generalized configuration of the **CustomStore** for the **List** widget.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                load: function (loadOptions) {
                    var d = $.Deferred();
                    $.getJSON("http://mydomain.com/MyDataService", {
                        skip: loadOptions.skip,
                        take: loadOptions.take,
                        sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                        filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                        searchExpr: loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "",
                        searchOperation: loadOptions.searchOperation,
                        searchValue: loadOptions.searchValue,
                        group: loadOptions.group ? JSON.stringify(loadOptions.group) : "",
                        requireTotalCount: loadOptions.requireTotalCount
                    }).done(function(result) {
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

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
    import { DxListModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        listDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.listDataSource = new DataSource({
                store: new CustomStore({
                    load: function (loadOptions) {
                        let params: URLSearchParams = new URLSearchParams();
                        params.set("skip", loadOptions.skip);
                        params.set("take", loadOptions.take);
                        params.set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "");
                        params.set("searchExpr", loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "");
                        params.set("searchOperation", loadOptions.searchOperation);
                        params.set("searchValue", loadOptions.searchValue);
                        params.set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "");
                        params.set("requireTotalCount", loadOptions.requireTotalCount);
                        params.set("group", loadOptions.group ? JSON.stringify(loadOptions.group) : "");
                        return http.get('http://mydomain.com/MyDataService', {
                                        search: params
                                    })
                                    .toPromise()
                                    .then(response => {
                                        var json = response.json();
                                        // You can process the received data here
                                        return {
                                            data: json.data,
                                            totalCount: json.totalCount
                                        }
                                    });
                    },
                    remove: function (key) {
                        return http.delete('http://mydomain.com/MyDataService' + encodeURIComponent(key))
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
            HttpModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="listDataSource">
    </dx-list>

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources')
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/0%20Connect%20to%20RESTful%20Service.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service')
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [List - Access the DataSource](/concepts/05%20Widgets/List/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/')
- [List - Paging](/concepts/05%20Widgets/List/08%20Paging.md '/Documentation/Guide/Widgets/List/Paging/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light)

[tags]list, data binding, provide data, custom data source, CustomStore, DataSource, load