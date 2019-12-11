To consume data from a custom source, the **DataGrid** uses the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). This article provides details on how to configure it and on the protocol that the **CustomStore** adheres when communicating with the server. If the server already processes data, that is, performs [filtering](/concepts/05%20Widgets/DataGrid/030%20Filtering '/Documentation/Guide/Widgets/DataGrid/Filtering/'), [sorting](/concepts/05%20Widgets/DataGrid/020%20Sorting/010%20Sorting.md '/Documentation/Guide/Widgets/DataGrid/Sorting/'), [paging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/paging '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/'), [grouping](/concepts/05%20Widgets/DataGrid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/') or [summary calculation](/concepts/05%20Widgets/DataGrid/050%20Summaries '/Documentation/Guide/Widgets/DataGrid/Summaries/'), notify the **DataGrid** of it by assigning *true* to the corresponding field of the [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/') object. 

    <!--JavaScript-->
    $(function() {
        $("#gridContainer").dxDataGrid({
            //...
            remoteOperations: {
                filtering: true,
                sorting: true,
                paging: true,
                grouping: true,
                summary: true
            }
            // or simply
            // remoteOperations: true
        });
    }); 

If the server does not process data yet, employ one of the following extensions by DevExtreme. They implement server-side data processing and also configure the **CustomStore** for you. Remember to notify the **DataGrid** of the data processing operations that were delegated to the server.

- [DevExtreme ASP.NET Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme PHP Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

If these extensions do not suit your needs, configure the **CustomStore** and implement server-side data processing by yourself following the instructions given in this article. Note that the server may leave some of the data processing operations unimplemented. In this case, make sure that the corresponding fields of the **remoteOperations** object are set to *false*.

#####See Also#####
- [DataGrid and Web API Example](https://github.com/DevExpress/devextreme-examples/tree/16_2/datagrid-webapi)
- [DataGrid and ASP.NET Core MVC Example](https://github.com/DevExpress/DevExtreme.AspNet.Data/tree/master/net)
- [DataGrid and PHP Example](https://github.com/DevExpress/DevExtreme-PHP-Data/tree/master/example)