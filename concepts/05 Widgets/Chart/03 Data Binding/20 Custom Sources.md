Access to a custom data source is configured using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component. DevExtreme provides [ASP.NET](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) and [PHP](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extensions that help configure it and implement server-side data processing. You can also use the third-party extension for [MongoDB](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md). 

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function as shown in the next example. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return $.getJSON('https://mydomain.com/MyDataService');
                    }
                }),
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxChartModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        chartDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.chartDataSource = new DataSource({
                store: new CustomStore({
                    loadMode: "raw",   
                    load: () => {
                        return httpClient.get('http://mydomain.com/MyDataService')
                            .toPromise();
                    }
                }),
                paginate: false
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-chart ...
        [dataSource]="chartDataSource">
    </dx-chart>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/"
}
    
In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **Chart**:

- **Sorting settings**: [sort](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/sort.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#sort')         
Present if the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') option is set.

- **Filtering settings**: [filter](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/filter.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter')    
Present if the **DataSource**'s [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') option is set.

- **Searching settings**: [searchExpr](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchExpr.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchExpr'), [searchOperation](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchOperation.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchOperation'), and [searchValue](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/searchValue.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#searchValue')     
Present if [corresponding options](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') are set in the **DataSource**.

After receiving these settings, the server should apply them to data and send back an object with the following structure:

    {
        data: [ ... ] // result data objects
    }

This example shows how to make a query for data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    load: function(loadOptions) {
                        var d = $.Deferred(),
                            params = {};
                        [
                            "sort", 
                            "filter", 
                            "searchExpr",
                            "searchOperation",
                            "searchValue"
                        ].forEach(function(i) {
                            if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                                params[i] = JSON.stringify(loadOptions[i]);
                        });
                        $.getJSON("http://mydomain.com/MyDataService", params)
                            .done(function(result) {
                                // Here, you can perform operations unsupported by the server
                                // or any other operations on the retrieved data
                                d.resolve(result.data);
                            });
                        return d.promise();
                    }
                }),
                paginate: false
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
    import { DxChartModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        chartDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.chartDataSource = new DataSource({
                store: new CustomStore({
                    load: (loadOptions) => {
                        let params: HttpParams = new HttpParams();
                        [
                            "sort", 
                            "filter", 
                            "searchExpr",
                            "searchOperation",
                            "searchValue"
                        ].forEach(function(i) {
                            if(i in loadOptions && isNotEmpty(loadOptions[i])) 
                                params = params.set(i, JSON.stringify(loadOptions[i]));
                        });
                        return httpClient.get("http://mydomain.com/MyDataService", { params: params })
                            .toPromise()
                            .then(result => {
                                // Here, you can perform operations unsupported by the server
                                // or any other operations on the retrieved data
                                return result.data;
                            });
                    }
                }),
                paginate: false
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML--><dx-chart ...
        [dataSource]="chartDataSource">
    </dx-chart>

---

#####See Also#####
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')
- [Update Data in the Chart](/concepts/05%20Widgets/Chart/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/')
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- [Data Layer - DataSource Examples | Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources')
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, data binding, provide data, custom data source, CustomStore, DataSource, load
