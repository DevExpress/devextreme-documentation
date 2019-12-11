Access to a custom data source is configured using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component. DevExtreme provides [ASP.NET](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) and [PHP](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extensions that help configure it and implement server-side data processing. You can also use the third-party extension for [MongoDB](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md). If these extensions are not suitable for your data source, follow the instructions below to configure the **CustomStore** manually.

The **CustomSource**'s configuration differs depending on whether data is processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server using the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the following example:

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    key: "ID",
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
    import DataSource from 'devextreme/data/data_source';
    import { DxLookupModule } from 'devextreme-angular';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        lookupDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.lookupData = new DataSource({
                store: new CustomStore({
                    key: "ID",
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
            DxLookupModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-lookup
        dataSource="lookupData">
    </dx-lookup>

---

[note]We recommend not using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **Lookup**:

* **take**: <span style="font-size:smaller">Number</span>      
Restricts the number of top-level data objects that are returned.

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

After receiving these settings, the server should apply them to data and send back an object of the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ] // result data objects
        },
        ...
        ]
    }

If the **group** setting is absent, the object structure is different: 

    {
        data: [ ... ] // result data objects
    }

If you specify the **Lookup**'s [value](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#value') beforehand, the **CustomStore** should implement the [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') operation as well. Below is a generalized **CustomStore** configuration for the **Lookup** widget.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                key: "ID",
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
                        group: loadOptions.group ? JSON.stringify(loadOptions.group) : ""
                    }).done(function(result) {
                        // Here, you can perform operations unsupported by the server
                        d.resolve(result.data);
                    });
                    return d.promise();
                },
                byKey: function (key) {
                    var d = new $.Deferred();
                    $.get('https://mydomain.com/MyDataService?id=' + key)
                        .done(function (result) {
                            d.resolve(result);
                        });
                    return d.promise();
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
    import { DxLookupModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        lookupData: any = {};
        constructor(@Inject(Http) http: Http) {
            this.lookupData = new DataSource({
                store: new CustomStore({
                    key: "ID",
                    load: function (loadOptions) {
                        let params: URLSearchParams = new URLSearchParams();
                        params.set("skip", loadOptions.skip);
                        params.set("take", loadOptions.take);
                        params.set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "");
                        params.set("searchExpr", loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "");
                        params.set("searchOperation", loadOptions.searchOperation);
                        params.set("searchValue", loadOptions.searchValue);
                        params.set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "");
                        params.set("group", loadOptions.group ? JSON.stringify(loadOptions.group) : "");
                        return http.get('http://mydomain.com/MyDataService', {
                                        search: params
                                    })
                                    .toPromise()
                                    .then(response => {
                                        var json = response.json();
                                        // You can process the received data here
                                        return {
                                            data: json.data
                                        }
                                    });
                    },
                    byKey: function (key) {
                        return http.get('https://mydomain.com/MyDataService?id=' + key)
                                    .toPromise()
                                    .then(response => {
                                        var json = response.json();
                                        return {
                                            data: json.data
                                        };
                                    });
                    }
                })
            });
        }
    }
    @NgModule({
         imports: [
             // ...
             DxLookupModule,
             HttpModule 
         ],
         // ...
     })

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupData">
    </dx-lookup>

---

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources')
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/0%20Connect%20to%20RESTful%20Service.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service')
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [Access the DataSource](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Access_the_DataSource/')
- [Enable Grouping](/concepts/05%20Widgets/Lookup/10%20Enable%20Grouping.md '/Documentation/Guide/Widgets/Lookup/Enable_Grouping/')
- [Configure Search Parameters](/concepts/05%20Widgets/Lookup/05%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/Lookup/Configure_Search_Parameters/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/jQuery/Light)

[tags]lookup, data binding, provide data, custom data source, CustomStore, DataSource, load
