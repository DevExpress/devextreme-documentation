Remote group paging helps to speed up grouping when the amount of data is large. Comparing to grouping without paging, significantly less data is transmitted, because the **DataGrid** loads groups for the current page only. As a downside, requests become more frequent, because the **DataGrid** sends several of them each time a user expands a group or sorts/filters data.

Remote group paging has a number of restrictions.

- Filtering, paging, grouping, and sorting should be performed remotely.
- Initially, all groups should be collapsed. For this purpose, set the **grouping** | [autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') option to *false*.
- The [expandAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex') method should not be called, otherwise the widget ignores remote group paging.

To enable remote group paging, set the **remoteOperations** | [groupPaging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging') option to *true*. Note that with this setting, all other data processing operations (filtering, sorting, grouping, paging and summary calculation) also become remote. 

    <!--JavaScript-->
    $(function() {
        $("#gridContainer").dxDataGrid({
            //...
            remoteOperations: {
                groupPaging: true
            }
        });
    });

Now, the **DataGrid** expects that the server implements group paging. If it does not yet, use the following DevExtreme extensions that implement this and other data processing operations for you.

- [DevExtreme ASP.NET Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme PHP Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

#####See Also#####
- [DataGrid and Web API Example](https://github.com/DevExpress/devextreme-examples/tree/16_2/datagrid-webapi)

If these extensions do not suit your needs, implement all data processing operations on the server by yourself and configure data access on the client side using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as shown in the [Custom Sources - Load Data](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding/25%20Custom%20Sources/10%20Load%20Data.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/#Load_Data') topic, but mind the following addition.

    <!--JavaScript-->
    var gridDataSource = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {  
                // ...
                requireGroupCount: loadOptions.requireGroupCount   // A Boolean value telling the server whether
                                                                   // the count of first-level groups (groupCount) is required
            }).done(function (result) {
                d.resolve(result.data, {
                    // ...
                    groupCount: result.groupCount
                });
            });
            return d.promise();
        }
    });

After receiving the settings passed with the [$.getJSON()](https://api.jquery.com/jquery.getjson) request and applying them to data, the server should send an object of the following structure back.

    <!--JavaScript-->
    {
        data: [{
            key: "Group 1",
            items: null,
            count: 5, // The count of children groups or data rows 
            // Group summary
            summary: [12, 7]    // Summary values should be in the same order as items
                                // in the summary | groupItems array of the DataGrid configuration
        }, {
            key: "Group 2",
            items: null,
            count: 3,
            summary: [45, 5]
        }, 
            // ...
        ],
        // The total count of records after applying the filter expression (if any was received)
        // Needed only if requireTotalCount was true (see the Custom Sources - Load Data topic)
        totalCount: 200,
        // The total count of groups on the current level after applying the filter expression (if any was received)
        // Needed only if requireGroupCount was true (see the previous code)
        groupCount: 35,
        // Total summary
        summary: [17, 458, 44]   // Summary values should be in the same order as items
                                 // in the summary | totalItems array of the DataGrid configuration
    }

[note] When a user expands the deepest group, the **DataGrid** sends a request for actual data objects that belong to this group. This request omits the **group** parameter. In this case, the **data** field of the object described above should contain those data objects.