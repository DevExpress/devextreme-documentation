With the **DataGrid** widget, you can calculate [summaries](/concepts/10%20UI%20Widgets/70%20Data%20Grid/050%20Summaries '/Documentation/Guide/UI_Widgets/Data_Grid/Summaries/') server side. This can make grid work faster with large amount of data. To enable the remote summaries, you must create server-side implementation of a summaries calculation algorithm, configure the Custom Store according to the server's data access protocol and enable [summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/summary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary') remote operation. 

When [remote summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/summary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary') is enabled, the [loadOptions](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') object has additional fields &#8212; **totalSummary** (the summary, calculated for the entire dataset) and **groupSummary** (the summary, calculated for each group when [grouping](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/') is enabled). The structure of these objects is like the following.

    <!--JavaScript-->[{ selector: "column1", summaryType: "sum" }, 
     { selector: "column2", summaryType: "min" },
     // ...
     { summaryType: "count" }]

The result should be placed to a **summary** field as shown below.

    <!--JavaScript-->var gridDataSource = {
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', { 
                totalSummary: loadOptions.totalSummary ? JSON.stringify(loadOptions.totalSummary) : "",
                // ...
            }).done(function(result) {
                d.resolve(result.data, {
                    // ...
                    summary: result.summaries
                });
            }).fail(d.reject);
            return d.promise();
        }
    }

The server should check the **totalSummary** value and return the object of the following structure (the *result* variable).

    <!--JavaScript-->{
        //...
        summaries: [/* array of summary results */]
    }

When using the group summary, the server checks the **groupSummary** value and returns the **data** object supplemented with summary values as shown below.

    <!--JavaScript-->{
        //...
        data: [{
            key: "Category 1", items: null, count: 100, summary: [30, 20]
        }, {
            key: "Category 2", items: null, count: 200, summary: [100, 50]
        }, ...]
    }

For details on remote grouping, refer to the [Remote Grouping](/concepts/10%20UI%20Widgets/70%20Data%20Grid/012%20Use%20Custom%20Store/10%20Remote%20Operations/30%20Advanced%20Remote%20Operations/10%20Remote%20Grouping.md '/Documentation/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Remote_Operations/Advanced_Remote_Operations/Remote_Grouping') section.

[note] When the remote summaries are enabled, the widget does not support [custom summary calculation](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary').