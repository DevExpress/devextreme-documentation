To load data from the server, the **CustomStore** needs the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function. This function accepts a bag of **loadOptions** and passes them to the server. The server must process data according to the **loadOptions** and send processed data back. The members of the **loadOptions** depend on which data processing operations the **DataGrid** delegates to the server. 

The example below shows how to implement the **load** function for all data processing operations. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten the example.

    <!--JavaScript-->
    var gridDataSource = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {  
                // Passing settings to the server

                filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "", // Pass if filtering is remote
                sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",       // Pass if sorting is remote
                // Pass if paging is remote
                skip: loadOptions.skip,     // The number of records to skip
                take: loadOptions.take,     // The number of records to take
                requireTotalCount: loadOptions.requireTotalCount,   // A flag telling the server whether
                                                                    // the total count of records (totalCount) is required
                group: loadOptions.group ? JSON.stringify(loadOptions.group) : "", // Pass if grouping is remote
                totalSummary: loadOptions.totalSummary ? JSON.stringify(loadOptions.totalSummary) : "", // Pass if summary is calculated remotely
                groupSummary: loadOptions.groupSummary ? JSON.stringify(loadOptions.groupSummary) : "" // Pass if grouping is remote and summary is calculated remotely
            }).done(function (result) {
                // You can process the received data here
                d.resolve(result.data, { 
                    totalCount: result.totalCount, // The count of received records; needed if paging is enabled
                    summary: result.summary        // Needed if summary is calculated remotely
                });
            });
            return d.promise();
        }
    });

    $(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: gridDataSource,
            // ...
        });
    });

The object passed with the [$.getJSON()](https://api.jquery.com/jquery.getjson) request has the following structure.

    <!--JavaScript-->
    {
        filter: [
            [ "dataFieldName1", "operator", "value" ],
            "and", // "or"
            [ "dataFieldName2", "operator", "value" ],
            // ...
        ],
        sort: [
            { selector : "dataFieldName1", desc : true },
            { selector : "dataFieldName2", desc : false },
            // ...
        ],
        skip: 0,
        take: 20,
        requireTotalCount: true,
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

[note]The **group** expression contains the **groupInterval** parameter only when the **DataGrid** sends a request for the data source of the [header filter](/concepts/05%20Widgets/DataGrid/030%20Filtering/030%20Column%20Header%20Filter.md '/Documentation/Guide/Widgets/DataGrid/Filtering/#Column_Header_Filter'), and only if this data source contains dates or numbers. Note that in case of numbers, the [groupInterval](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#groupInterval') option should be specified explicitly.

After receiving this object with settings, the server should apply them to data, and then send back an object of the following structure.

    {
        data: [{
            key: "Group 1",
            // Group summary
            summary: [30, 20, 40],  // Summary values should be in the same order as items
                                    // in the summary | groupItems array of the DataGrid configuration
            items: [{
                key: "Group 1_1",
                summary: [12, 5, 19],
                items: [
                    key: "Group 1_1_1",
                    summary: [8, 2, 10],
                    // This is a group of the deepest hierarchy level,
                    // therefore, you need to return the following fields
                    items: null,
                    count: 3        // The count of data rows in the current group
                ]
            }, {
                key: "Group 1_2",
                summary: [18, 15, 21],
                items: [ ... ]
            }]
        }, {
            key: "Group 2",
            summary: [100, 50, 60],
            items: [ ... ]
        }, 
            // . . .
        ],
        // The total count of records after applying the filter expression (if any was received)
        // Needed only if requireTotalCount was true (see the previous code)
        totalCount: 200,
        // Total summary 
        summary: [170, 20, 20, 1020] // Summary values should be in the same order as items
                                     // in the summary | totalItems array of the DataGrid configuration
    }

[note] If the server has not recieved the **group** setting, the **data** field should contain data objects only.

If grouping large data seems to lower the performance of the **DataGrid**, consider employing the remote group paging feature. Note that for this feature, the server and the client sides should be configured in a slightly different manner. For details, refer to the [Remote Group Paging](/concepts/05%20Widgets/DataGrid/013%20Features%20for%20Remote%20Data/010%20Remote%20Group%20Paging.md '/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Remote_Group_Paging/') topic.