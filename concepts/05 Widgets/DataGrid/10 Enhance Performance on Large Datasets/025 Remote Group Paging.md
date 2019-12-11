Remote group paging is a feature that allows loading groups from a remote source in portions. With it, the **DataGrid** transmits significantly less data, thus speeding up grouping. As a downside, requests become more frequent, because the **DataGrid** sends several of them each time a user expands a group or sorts/filters data.

When using remote group paging, the following restrictions apply:

- The server should perform filtering, paging, grouping, and sorting;
- All groups should be collapsed initially by setting the **grouping**.[autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') option to **false**;
- The [expandAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex') method should not be called. Otherwise, the widget ignores remote group paging.

Set the **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging') option to **true** to enable remote group paging. Note that with this setting, all other data processing operations (filtering, sorting, grouping, paging and summary calculation) also become remote. 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            //...
            remoteOperations: {
                groupPaging: true
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-remote-operations [groupPaging]="true"></dxo-remote-operations>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

Now, the **DataGrid** requires server-implemented group paging. Use the following ASP.NET and PHP server extensions to implement group paging and other data processing operations:

- [DevExtreme ASP.NET Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme PHP Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

For servers built on other technologies, implement all data processing operations by yourself and configure data access on the client side using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as shown in the [Custom Sources - Load Data](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/25%20Custom%20Sources/10%20Load%20Data.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/#Load_Data') topic. Mind that the result object described in there should also contain the **groupCount** field specifying the count of top-level groups, and the **items** field of each data object should be equal to **null**. 

    {
        data: [{
            key: "Group 1",
            count: 3,
            items: null,
            summary: [30, 20, 40]
        },
        ...
        ], 
        totalCount: 200,
        groupCount: 35, // this field added; count of top-level groups returned if requireGroupCount is true
        summary: [170, 20, 20, 1020]
    }

The **groupCount** should be returned only if the **requireGroupCount** parameter in the **loadOptions** is **true**. The following code is amended to query data from a server that supports remote group paging:

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
                groupSummary: loadOptions.groupSummary ? JSON.stringify(loadOptions.groupSummary) : "",
                requireGroupCount: loadOptions.requireGroupCount // added
            }).done(function (result) {
                    d.resolve(result.data, { 
                        totalCount: result.totalCount,
                        summary: result.summary,
                        groupCount: result.groupCount // added
                    });
                });
            return d.promise();
        }
    });

    $(function() {
        $("#datadataGridContainer").dxDataGrid({
            dataSource: gridDataSource,
            remoteOperations: {
                groupPaging: true
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule, URLSearchParams } from '@angular/http';
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
                    params.set("requireGroupCount", loadOptions.requireGroupCount); // added
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
                                        summary: json.summary,
                                        groupCount: result.groupCount // added
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
        [remoteOperations]="{groupPaging: true}">
    </dx-data-grid>

---

#####See Also#####
- [DataGrid and Web API Example](https://github.com/DevExpress/devextreme-examples/tree/17_2/datagrid-webapi)
