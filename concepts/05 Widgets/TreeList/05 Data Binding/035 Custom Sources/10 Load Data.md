The **CustomStore** needs the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function to load data from the server. This function accepts a collection of **loadOptions** and passes them to the server. The server then processes data according to the **loadOptions** and sends it back. The following **loadOptions** are relevant for the **TreeList**:

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

* **group**: <span style="font-size:smaller">Array</span>     
Defines grouping levels to be applied to the data. Each object can have the following parameters:

    * **selector**: <span style="font-size:smaller">String</span>     
    The field name to group by.
    * **desc**: <span style="font-size:smaller">Boolean</span>     
    Defines the selector field's descending sort order.
    * **isExpanded**: <span style="font-size:smaller">Boolean</span>     
    Defines whether the group's data objects should be returned instead of grouping data. Relevant only for the last group.
    * **groupInterval**: <span style="font-size:smaller">Number or String</span>     
    A numeric value groups data in ranges of the given length. A string value applies only to dates and can be one of *"year"*, *"quarter"*, *"month"*, *"day"*, *"dayOfWeek"*, *"hour"*, *"minute"* and *"second"*. This parameter is present only when the widget sends a request for the [header filter](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter')'s data, and only if this data contains numbers or dates. Note that for numbers, the [groupInterval](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/headerFilter/#groupInterval') option should be specified explicitly.

* **parentIds**: <span style="font-size:smaller">Array</span>    
Parent IDs of rows to be loaded.

After receiving these settings, the server should apply them to data and send back an object of the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ],  // subgroups or data objects (for the last group when isExpanded = true)
                             // can be null when isExpanded = false and there are no further groups
            count: 3         // count of items in this group; required only when items is null
        },
        ...
        ]
    }

If the server has not received the **group** parameter, the result object should be the following:

    {
        data: [ ... ] // result data objects
    }

Here is a generalized configuration of the **CustomStore** for the **TreeList** widget.

---
##### jQuery

    <!--JavaScript-->
    var treeListDataSource = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {
                sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                group: loadOptions.group ? JSON.stringify(loadOptions.group) : "",
                parentIds: loadOptions.parentIds ? JSON.stringify(loadOptions.parentIds) : ""
            }).done(function (result) {
                // You can process the received data here
                d.resolve(result.data);
            });
            return d.promise();
        }
    });

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
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
    import { DxTreeListModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        treeListDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.treeListDataSource = new DataSource({
                load: function (loadOptions) {
                    let params: URLSearchParams = new URLSearchParams();
                    params.set("sort", loadOptions.sort ? JSON.stringify(loadOptions.sort) : "");
                    params.set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : "");
                    params.set("group", loadOptions.group ? JSON.stringify(loadOptions.group) : "");
                    params.set("parentIds", loadOptions.parentIds ? JSON.stringify(loadOptions.parentIds) : "");
                    return http.get('http://mydomain.com/MyDataService', {
                                    search: params
                                })
                                .toPromise()
                                .then(response => {
                                    var json = response.json();
                                    // You can process the received data here
                                    return json.data
                                });
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            HttpModule
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

---
