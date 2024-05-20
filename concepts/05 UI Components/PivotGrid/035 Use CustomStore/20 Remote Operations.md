Remote operations help to improve the PivotGrid performance when the amount of data is large. To enable remote operations, set the [remoteOperations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') property of the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') object to _true_. 

    <!--JavaScript-->
    var pivotGridDataSource = {
        remoteOperations: true,
        // ...
    }

Now, the PivotGrid needs a special configuration of the **CustomStore** on the client and implementation of [filtering](/concepts/05%20UI%20Components/PivotGrid/080%20Filtering '/Documentation/Guide/UI_Components/PivotGrid/Filtering/'), [grouping](/concepts/05%20UI%20Components/PivotGrid/050%20Grouping '/Documentation/Guide/UI_Components/PivotGrid/Grouping/') and [summary calculation](/concepts/05%20UI%20Components/PivotGrid/040%20Summaries '/Documentation/Guide/UI_Components/PivotGrid/Summaries/') on the server. If the server does not perform these operations yet, employ one of the following extensions by DevExtreme. They implement server-side data processing and also configure the **CustomStore** for you. 

- <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data" target="_blank">DevExtreme ASP.NET Data</a>
- <a href="https://github.com/DevExpress/DevExtreme-PHP-Data" target="_blank">DevExtreme PHP Data</a>

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/WebAPIService/"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-pivotgrid-with-webapi"
}

If these extensions do not suit your needs, configure the **CustomStore** and implement server-side data processing by yourself, following the instructions given below. Define the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function for the **CustomStore**. This function accepts a bag of **loadOptions** and passes them to the server. The server must process data according to the **loadOptions** and send processed data back. 

The example below shows how to implement the **load** function. Note that in this example, the **CustomStore** is not declared explicitly. Instead, its load operation is implemented directly in the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') configuration object to shorten the example.

---

##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#pivotGrid").dxPivotGrid({
            dataSource: {
                // ...
                remoteOperations: true,
                load: function (loadOptions) {
                    let d = $.Deferred();
                    $.getJSON('http://mydomain.com/MyDataService', {
                        // Passing settings to the server
                        
                        // Pass if the remoteOperations property is set to true
                        take: loadOptions.take,
                        skip: loadOptions.skip,
                        group: loadOptions.group ? JSON.stringify(loadOptions.group) : "",
                        filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                        totalSummary: loadOptions.totalSummary ? JSON.stringify(loadOptions.totalSummary) : "",
                        groupSummary: loadOptions.groupSummary ? JSON.stringify(loadOptions.groupSummary) : ""
                    }).done(function (result) {
                        // You can process the received data here

                        if("data" in result)
                            d.resolve(result.data, { summary: result.summary });
                        else
                            d.resolve(result);
                    });
                    return d.promise();
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pivot-grid [dataSource]="dataSource"> 
    </dx-pivot-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { lastValueFrom } from 'rxjs';

    @Component({
      styleUrls: ["./app.component.css"],
      selector: "demo-app",
      templateUrl: "./app.component.html"
    })
    export class AppComponent {
        dataSource: any;

        constructor(httpClient: HttpClient) {
            function isNotEmpty(value: any): boolean {
                return value !== undefined && value !== null && value !== "";
            }
            this.dataSource = {
                remoteOperations: true,
                store: new CustomStore({
                    // ...
                    load: function (loadOptions: any) {
                        let params: HttpParams = new HttpParams();
                        // Passing settings to the server
                        
                        // Pass if the remoteOperations property is set to true
                        [
                            "skip",
                            "take",
                            "filter",
                            "totalSummary",
                            "group",
                            "groupSummary"
                        ].forEach(function (i) {
                            if (i in loadOptions && isNotEmpty(loadOptions[i]))
                                params = params.set(i, JSON.stringify(loadOptions[i]));
                        });
                        return lastValueFrom(httpClient
                            .get(
                                "http://mydomain.com/MyDataService",
                                { params: params }
                            ))
                            .then((result: any) => {
                                if ("data" in result) {
                                    return {
                                        data: result.data,
                                        summary: result.summary
                                    }
                                } else {
                                    return result;
                                }
                            })
                            .catch((error) => {
                                throw "Data Loading Error";
                            });
                    }
                })
            };
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { HttpClientModule, HttpParams } from '@angular/common/http';
    import { DxPivotGridModule } from "devextreme-angular";
    import CustomStore from "devextreme/data/custom_store";

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPivotGridModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid
            :data-source="dataSource"
        />
    </template>
    <script>
    import { DxPivotGrid } from "devextreme-vue/pivot-grid";

    import CustomStore from "devextreme/data/custom_store";
    import "whatwg-fetch";

    function isNotEmpty(value) {
      return value !== undefined && value !== null && value !== "";
    }

    export default {
        components: {
            DxPivotGrid,
        },
        data() {
            return {
                dataSource: {
                    remoteOperations: true,
                    store: new CustomStore({
                        // ...
                        load: function(loadOptions) {
                            let params = '?';
                            // Passing settings to the server
                        
                            // Pass if the remoteOperations property is set to true 
                            [
                                "skip",
                                "take",
                                "filter",
                                "totalSummary",
                                "group",
                                "groupSummary"
                            ].forEach(function(i) {
                                if(i in loadOptions && isNotEmpty(loadOptions[i]))
                                { params += `${i}=${JSON.stringify(loadOptions[i])}&`; }
                            });
                            params = params.slice(0, -1);
                            return fetch(`http://mydomain.com/MyDataService${params}`)
                                .then(response => response.json())
                                .then((data) => {
                                    return {
                                        data: data.data,
                                        summary: data.summary
                                    };
                                })
                                .catch(() => { throw 'Data Loading Error'; });
                        }
                    })
                },
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { PivotGrid } from 'devextreme-react/pivot-grid';
    import CustomStore from "devextreme/data/custom_store";
    import "whatwg-fetch";

    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }

    const dataSource = {
        remoteOperations: true,
        store: new CustomStore({
            // ...
            load: function (loadOptions) {
                let params = "?";
                // Passing settings to the server
                        
                // Pass if the remoteOperations property is set to true
                [
                    "skip",
                    "take",
                    "filter",
                    "totalSummary",
                    "group",
                    "groupSummary"
                ].forEach(function (i) {
                    if (i in loadOptions && isNotEmpty(loadOptions[i])) {
                        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                    }
                });
                params = params.slice(0, -1);
                return fetch(`http://mydomain.com/MyDataService${params}`)
                    .then(response => response.json())
                    .then((data) => {
                        return {
                            data: data.data,
                            summary: data.summary
                        };
                    })
                    .catch(() => { throw 'Data Loading Error'; });
        }),
    };

    function App() {
        return (
            <PivotGrid
                dataSource={dataSource} 
            />
        );
    }

    export default App;


---


Now, the PivotGrid sends several requests to load data. At first launch, it sends the request that contains the following settings.

    <!--JavaScript-->
    {
        skip: 0,
        take: 20
    }

This request is utilized to get the structure of your data, therefore, the server should return an array of data items that reflects the whole structure. Note that the array may contain only one item. The subsequent requests have a different structure and contain the following settings. 

    <!--JavaScript-->
    {
        filter: [
            [ "dataFieldName1", "operator", "value" ],
            "and", // "or"
            [ "dataFieldName2", "operator", "value" ],
            // Filter for date fields
            // The following date components are supported:
            // year, month (from 1 to 12), day, dayOfWeek (from 0 to 6)
            // ['dateField.year', '>', '2000'],
            // "and", // "or"
            // ['dateField.dayOfWeek', '=', '4']
            // ...
        ],
        group: [
            // Group expression for numbers
            { selector: "dataFieldName1", groupInterval: 100, desc: false },
            // Group expression for dates
            { selector: "dataFieldName2", groupInterval: "year", desc: false },
            { selector: "dataFieldName2", groupInterval: "month", desc: false },
            // Group expression for strings
            { selector: "dataFieldName3", desc: true },
            // ...
        ],
        totalSummary: [
            { selector: "dataFieldName1", summaryType: "sum" }, 
            { selector: "dataFieldName2", summaryType: "min" },
            // ... 
        ],
        groupSummary: [
            { selector: "dataFieldName1", summaryType: "sum" }, 
            { selector: "dataFieldName2", summaryType: "min" },
            // ... 
        ]
        
    }

After the server applies settings to data, it should send back an object of the following structure.

    <!--JavaScript-->{
        data: [{
            key: "Category 1",
            // Group summary
            summary: [30, 20],
            items: [{
                key: "Category 1_1",
                summary: [12, 5],
                items: [{
                    key: "Category 1_1_1",
                    summary: [5, 2],
                    // This is a group of the deepest hierarchy level,
                    // therefore, you need to return a null value
                    items: null
                }, 
                // ...
                ]
            }, {
                key: "Category 1_2",
                summary: [18, 15],
                items: [ ... ]
            }]
        }, {
            key: "Category 2",
            summary: [100, 50],
            items: [ ... ]
        }, 
        // ...
        ],
        // Total summary
        summary: [1222, 856]
    }
