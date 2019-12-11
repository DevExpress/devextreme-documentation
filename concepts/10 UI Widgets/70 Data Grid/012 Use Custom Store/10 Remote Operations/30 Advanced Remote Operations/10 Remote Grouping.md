With the **DataGrid** widget, you can process data for the [grouping](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/') feature server side. This can allow the grid work faster with large amounts of data. To enable remote grouping, create server-side grouping implementation, configure the Custom Store according to the server's data access protocol and enable [grouping's](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/grouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#grouping') remote operation. 

The server-side grouping algorithm should process the [loadOptions](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') | **group** field and return the JSON object to be processed in Custom Store implementation. 

The [loadOptions](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') | **group** parameter has the following format.

    <!--JavaScript-->//Numbers
    group: [{ selector: "column1", groupInterval: 100, desc: false }]
    
    //Dates
    group: [
        { selector: "column1", groupInterval: "year", desc: false },
        { selector: "column1", groupInterval: "month", desc: false },
        { selector: "column1", groupInterval: "day", desc: false }
    ]

Once done, the request should resolve the Deferred object with the resulting data and the total count of data items.

    <!--JavaScript-->var gridDataSource = {
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {
                groupConfig: loadOptions.group ? JSON.stringify(loadOptions.group) : "",
                // ...
            }).done(function(result) {
                d.resolve(result.data, {
                    totalCount: result.totalCount
                });
            }).fail(d.reject);
            return d.promise();
        }
    }

The server should check the *groupConfig* variable and return the object of the following structure (the *result* variable).

    <!--JavaScript-->{
        //...
        data: [{
            key: "Category 1", items: [/* array of items */]
        }, {
            key: "Category 2", items: [/* array of items */]
        }, ...]
    }

For top hierarchy level groups, you can return the number of items in each group without the items themselves. In this case, the expansion of groups will initiate an additional request.

    <!--JavaScript-->{
        //...
        data: [{
            key: "Category 1", items: null, count: 100
        }, {
            key: "Category 2", items: null, count: 200
        }, ...]
    }