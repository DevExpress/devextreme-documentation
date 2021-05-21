Remote operations help to improve the PivotGrid performance when the amount of data is large. To enable remote operations, set the [remoteOperations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') property of the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') object to _true_. 

    <!--JavaScript-->
    var pivotGridDataSource = {
        remoteOperations: true,
        // ...
    }

Now, the PivotGrid needs a special configuration of the **CustomStore** on the client and implementation of [filtering](/concepts/05%20UI%20Components/PivotGrid/080%20Filtering '/Documentation/Guide/UI_Components/PivotGrid/Filtering/'), [grouping](/concepts/05%20UI%20Components/PivotGrid/050%20Grouping '/Documentation/Guide/UI_Components/PivotGrid/Grouping/') and [summary calculation](/concepts/05%20UI%20Components/PivotGrid/040%20Summaries '/Documentation/Guide/UI_Components/PivotGrid/Summaries/') on the server. If the server does not perform these operations yet, employ one of the following extensions by DevExtreme. They implement server-side data processing and also configure the **CustomStore** for you. 

- <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data" target="_blank">DevExtreme ASP.NET Data</a>
- <a href="https://github.com/DevExpress/DevExtreme-PHP-Data" target="_blank">DevExtreme PHP Data</a>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/WebAPIService/"
}

#####See Also#####
- <a href="https://github.com/DevExpress/devextreme-examples/tree/20_1/pivotgrid-webapi" target="_blank">PivotGrid and Web API Example</a>

If these extensions do not suit your needs, configure the **CustomStore** and implement server-side data processing by yourself, following the instructions given below. Define the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function for the **CustomStore**. This function accepts a bag of **loadOptions** and passes them to the server. The server must process data according to the **loadOptions** and send processed data back. 

The example below shows how to implement the **load** function. Note that in this example, the **CustomStore** is not declared explicitly. Instead, its load operation is implemented directly in the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') configuration object to shorten the example.

##### jQuery

    $(function(){
        $("#pivotGridContainer").dxPivotGrid({
            dataSource: {
                // ...
                remoteOperations: true,
                load: function (loadOptions) {
                    var d = $.Deferred();
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
<dx-pivot-grid [dataSource]="dataSource"> </dx-pivot-grid>

    <!-- tab: app.component.ts -->
import { NgModule, Component, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
import { DxPivotGridModule } from "devextreme-angular";
import CustomStore from "devextreme/data/custom_store";

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
        key: "OrderNumber",
        load: function (loadOptions: any) {
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
          ].forEach(function (i) {
            if (i in loadOptions && isNotEmpty(loadOptions[i]))
              params = params.set(i, JSON.stringify(loadOptions[i]));
          });
          return httpClient
            .get(
              "https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales/orders",
              { params: params }
            )
            .toPromise()
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
      }),
      fields: [
        {
          caption: "Category",
          dataField: "ProductCategoryName",
          width: 250,
          expanded: true,
          sortBySummaryField: "SalesAmount",
          sortBySummaryPath: [],
          sortOrder: "desc",
          area: "row"
        },
        {
          caption: "Subcategory",
          dataField: "ProductSubcategoryName",
          width: 250,
          sortBySummaryField: "SalesAmount",
          sortBySummaryPath: [],
          sortOrder: "desc",
          area: "row"
        },
        {
          caption: "Product",
          dataField: "ProductName",
          area: "row",
          sortBySummaryField: "SalesAmount",
          sortBySummaryPath: [],
          sortOrder: "desc",
          width: 250
        },
        {
          caption: "Date",
          dataField: "DateKey",
          dataType: "date",
          area: "column"
        },
        {
          caption: "Amount",
          dataField: "SalesAmount",
          summaryType: "sum",
          format: "currency",
          area: "data"
        },
        {
          caption: "Store",
          dataField: "StoreName"
        },
        {
          caption: "Quantity",
          dataField: "SalesQuantity",
          summaryType: "sum"
        },
        {
          caption: "Unit Price",
          dataField: "UnitPrice",
          format: "currency",
          summaryType: "sum"
        },
        {
          dataField: "Id",
          visible: false
        }
      ]
    };
  }
}

@NgModule({
  imports: [BrowserModule, DxPivotGridModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


    <!--Vue-->
<template>
  <DxPivotGrid
    :data-source="dataSource"
  />
</template>
<script>
import { DxPivotGrid, DxScrolling } from "devextreme-vue/pivot-grid";

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
          key: "OrderNumber",
          load: function (loadOptions) {
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
              "groupSummary",
            ].forEach(function (i) {
              if (i in loadOptions && isNotEmpty(loadOptions[i])) {
                params += `${i}=${JSON.stringify(loadOptions[i])}&`;
              }
            });
            params = params.slice(0, -1);
            return fetch(
              `https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales/orders${params}`
            )
              .then((response) => response.json())
              .then((result) => {
                return new Promise((resolve) => {
                  // You can process the received data here
                  if ("data" in result)
                    resolve({ data: result.data, summary: result.summary });
                  else resolve(result);
                });
              })
              .catch(() => {
                throw "Data Loading Error";
              });
          },
        }),
        fields: [
          {
            caption: "Category",
            dataField: "ProductCategoryName",
            width: 250,
            expanded: true,
            sortBySummaryField: "SalesAmount",
            sortBySummaryPath: [],
            sortOrder: "desc",
            area: "row",
          },
          {
            caption: "Subcategory",
            dataField: "ProductSubcategoryName",
            width: 250,
            sortBySummaryField: "SalesAmount",
            sortBySummaryPath: [],
            sortOrder: "desc",
            area: "row",
          },
          {
            caption: "Product",
            dataField: "ProductName",
            area: "row",
            sortBySummaryField: "SalesAmount",
            sortBySummaryPath: [],
            sortOrder: "desc",
            width: 250,
          },
          {
            caption: "Date",
            dataField: "DateKey",
            dataType: "date",
            area: "column",
          },
          {
            caption: "Amount",
            dataField: "SalesAmount",
            summaryType: "sum",
            format: "currency",
            area: "data",
          },
          {
            caption: "Store",
            dataField: "StoreName",
          },
          {
            caption: "Quantity",
            dataField: "SalesQuantity",
            summaryType: "sum",
          },
          {
            caption: "Unit Price",
            dataField: "UnitPrice",
            format: "currency",
            summaryType: "sum",
          },
          {
            dataField: "Id",
            visible: false,
          },
        ],
      },
    };
  },
};
</script>

    <!--React-->
import React from 'react';

import { PivotGrid, Scrolling } from 'devextreme-react/pivot-grid';
import CustomStore from "devextreme/data/custom_store";
import "whatwg-fetch";

function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== "";
}

const dataSource = {
  remoteOperations: true,
  store: new CustomStore({
    key: "OrderNumber",
    load: function (loadOptions) {
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
        "groupSummary",
      ].forEach(function (i) {
        if (i in loadOptions && isNotEmpty(loadOptions[i])) {
          params += `${i}=${JSON.stringify(loadOptions[i])}&`;
        }
      });
      params = params.slice(0, -1);
      return fetch(
        `https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales/orders${params}`
      )
        .then((response) => response.json())
        .then((result) => {
          return new Promise((resolve) => {
            // You can process the received data here
            if ("data" in result){
              resolve({ data: result.data, summary: result.summary });
            }
            else {
              resolve(result);
            }
          });
        })
        .catch(() => {
          throw "Data Loading Error";
        });
    },
  }),
  fields: [{
    caption: 'Category',
    dataField: 'ProductCategoryName',
    width: 250,
    expanded: true,
    sortBySummaryField: 'SalesAmount',
    sortBySummaryPath: [],
    sortOrder: 'desc',
    area: 'row'
  }, {
    caption: 'Subcategory',
    dataField: 'ProductSubcategoryName',
    width: 250,
    sortBySummaryField: 'SalesAmount',
    sortBySummaryPath: [],
    sortOrder: 'desc',
    area: 'row'
  }, {
    caption: 'Product',
    dataField: 'ProductName',
    area: 'row',
    sortBySummaryField: 'SalesAmount',
    sortBySummaryPath: [],
    sortOrder: 'desc',
    width: 250
  }, {
    caption: 'Date',
    dataField: 'DateKey',
    dataType: 'date',
    area: 'column'
  }, {
    caption: 'Amount',
    dataField: 'SalesAmount',
    summaryType: 'sum',
    format: 'currency',
    area: 'data'
  }, {
    caption: 'Store',
    dataField: 'StoreName'
  }, {
    caption: 'Quantity',
    dataField: 'SalesQuantity',
    summaryType: 'sum'
  }, {
    caption: 'Unit Price',
    dataField: 'UnitPrice',
    format: 'currency',
    summaryType: 'sum'
  }, {
    dataField: 'Id',
    visible: false
  }]
};

class App extends React.Component {
  render() {
    return (
      <PivotGrid
        dataSource={dataSource} />
    );
  }
}

export default App;


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