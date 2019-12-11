The **CustomStore** needs the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function to load data from the server. This function accepts a collection of **loadOptions** and passes them to the server. The server then processes data according to the **loadOptions** and sends it back. The following **loadOptions** are relevant for the **DataGrid**:

* **take**: <span style="font-size:smaller">Number</span>      
Restricts the number of top-level data objects to return.

* **skip**: <span style="font-size:smaller">Number</span>      
Skips some data objects from the start of the result set. In conjunction with **take**, this parameter is used to implement paging.

* **sort**: <span style="font-size:smaller">Array</span>      
Defines sorting parameters. Multiple parameters apply to the data in sequence to implement multi-level sorting. Contains objects of the following structure:

        { selector: "field", desc: true/false }    

* **filter**: <span style="font-size:smaller">Array</span>      
Defines filtering parameters. Possible variants:

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

* **requireTotalCount**: <span style="font-size:smaller">Boolean</span>     
Indicates that a total count of data objects in the result set must be returned in the **totalCount** field of the result. This count must reflect the number of data items after filtering, but disregard any **take** parameter used for the query.

* **totalSummary**: <span style="font-size:smaller">Array</span>     
Contains summary definitions of the following structure, where **summaryType** can be *"sum"*, *"avg"*, *"min"*, *"max"* or *"count"*:

        { selector: "field", summaryType: "sum" }

    The summary calculations' results should be returned in an array called **summary** that contains the result values in the same order as the summary definitions.

* **group**: <span style="font-size:smaller">Array</span>     
Defines grouping levels to be applied to the data. Each object can have the following parameters:

    * **selector**: <span style="font-size:smaller">String</span>     
    The field name to group by.
    * **desc**: <span style="font-size:smaller">Boolean</span>     
    Defines the selector field's descending sort order.
    * **isExpanded**: <span style="font-size:smaller">Boolean</span>     
    Defines whether the group's data objects should be returned instead of grouping data. Relevant only for the last group.
    * **groupInterval**: <span style="font-size:smaller">Number or String</span>     
    A numeric value groups data in ranges of the given length. A string value applies only to dates and can be one of *"year"*, *"quarter"*, *"month"*, *"day"*, *"dayOfWeek"*, *"hour"*, *"minute"* and *"second"*. This parameter is present only when the widget sends a request for the [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Header_Filter')'s data, and only if this data contains numbers or dates. Note that for numbers, the [groupInterval](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#groupInterval') option should be specified explicitly.

* **groupSummary**: <span style="font-size:smaller">Array</span>     
The structure is the same as for **totalSummary**, but these summary values are returned for each group. Used in conjunction with **group**.

After receiving these settings, the server should apply them to data and send back an object of the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ],          // subgroups or data objects (for the last group when isExpanded = true)
                                     // can be null when isExpanded = false and there are no further groups
            count: 3,                // count of items in this group; required only when items is null
            summary: [30, 20, 40]    // group summary results
        },
        ...
        ], 
        totalCount: 200,             // if required in requireTotalCount
        summary: [170, 20, 20, 1020] // total summary results
    }

If the server has not received the **group** parameter, the result object should be the following:

    {
        data: [ ... ],               // result data objects
        totalCount: 200,             // if required in requireTotalCount
        summary: [170, 20, 20, 1020] // total summary results
    }

Here is a generalized configuration of the **CustomStore** for the **DataGrid** widget.

---

#####jQuery

    <!--JavaScript-->
    var gridDataSource = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {
                skip: loadOptions.skip,
                take: loadOptions.take,
                sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                requireTotalCount: loadOptions.requireTotalCount,
                totalSummary: loadOptions.totalSummary ? JSON.stringify(loadOptions.totalSummary) : "",
                group: loadOptions.group ? JSON.stringify(loadOptions.group) : "",
                groupSummary: loadOptions.groupSummary ? JSON.stringify(loadOptions.groupSummary) : ""
            }).done(function (result) {
                    d.resolve(result.data, { 
                        totalCount: result.totalCount,
                        summary: result.summary
                    });
                });
            return d.promise();
        }
    });

    $(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: gridDataSource,
            remoteOperations: true
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
    import { DxDataGridModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        gridDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.gridDataSource = new DataSource({
                load: function (loadOptions) {
                    let params: URLSearchParams = new URLSearchParams();
                    params.set("skip", loadOptions.skip);
                    params.set("take", loadOptions.take);
                    params.set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "");
                    params.set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "");
                    params.set("requireTotalCount", loadOptions.requireTotalCount);
                    params.set("totalSummary", loadOptions.totalSummary ? JSON.stringify(loadOptions.totalSummary) : "");
                    params.set("group", loadOptions.group ? JSON.stringify(loadOptions.group) : "");
                    params.set("groupSummary", loadOptions.groupSummary ? JSON.stringify(loadOptions.groupSummary) : "");
                    return http.get('http://mydomain.com/MyDataService', {
                                    search: params
                                })
                                .toPromise()
                                .then(response => {
                                    var json = response.json();
                                    // You can process the received data here
                                    return {
                                        data: json.data,
                                        totalCount: json.totalCount,
                                        summary: json.summary
                                    }
                                });
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            HttpModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid ...
        [dataSource]="gridDataSource"
        [remoteOperations]="true">
    </dx-data-grid>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource/jQuery/Light/"
}

Consider using the remote group paging feature when grouping large data lowers **DataGrid** performance. Note that for this feature, both the server and the client sides should be configured differently. Refer to the [Remote Group Paging](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/025%20Remote%20Group%20Paging.md '/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Remote_Group_Paging') topic for more information.
