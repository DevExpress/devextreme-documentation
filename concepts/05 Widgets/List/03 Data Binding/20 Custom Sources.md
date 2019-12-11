For loading data from any other source, DevExtreme provides the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') component. It is a flexible instrument that allows you to implement all the needed data access operations manually.

For the **List** widget, you need to implement the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') operation. It is a function that accepts a bag of **loadOptions** and passes them to the server. The server must process data according to the **loadOptions** and sent processed data back. The members of the **loadOptions** depend on data processing operations ([paging](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate'), [filtering](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter'), [sorting](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort'), etc.) that you have enabled in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

[note]If some operations are not supported by the server, you can perform them on the client after data is retrieved.

If the **List** allows the user to [delete items](/concepts/05%20Widgets/List/35%20Item%20Deletion '/Documentation/Guide/Widgets/List/Item_Deletion/'), the **CustomStore** must implement the [remove](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/remove.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove') operation as well.

The following code example shows how to implement the **load** and **remove** operations. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten this example.

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                load: function(loadOptions) {
                    // Passed if "paginate" is true and "pageSize" is set
                    var skip = loadOptions.skip; // The number of records to skip 
                    var take = loadOptions.take; // The number of records to take
                    // Passed if "filter" is set
                    var filterOptions = loadOptions.filter ? JSON.stringify(loadOptions.filter) : "";
                    // Passed if "sort" is set
                    var sortOptions = loadOptions.sort ? JSON.stringify(loadOptions.sort) : "";
                    // Passed if "group" is set
                    var groupOptions = loadOptions.group ? JSON.stringify(loadOptions.group) : "";

                    var d = $.Deferred();
                    $.getJSON("http://mydomain.com/MyDataService", {
                        skip: skip,
                        take: take,
                        filter: filterOptions,
                        sort: sortOptions,
                        group: groupOptions
                    }).done(function(result) {
                        // Here, you can perform operations unsupported by the server
                        d.resolve(result.data, {
                            totalCount: result.totalCount    // The count of received records; needed if "selectAllMode" is "allPages"
                        });
                    });
                    return d.promise();
                },
                // This function is needed only if the List allows item deletion
                remove: function(key) {
                    return $.ajax({
                        url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                        method: "DELETE",
                    });
                }
            })
        });
    });

For consuming data from ASP.NET and PHP servers, DevExtreme provides the following extensions that implement the **CustomStore** and server-side data processing for you.

- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources')
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/0%20Connect%20to%20RESTful%20Service.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service')
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [List - Access the DataSource](/concepts/05%20Widgets/List/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/')
- [List - Paging](/concepts/05%20Widgets/List/08%20Paging.md '/Documentation/Guide/Widgets/List/Paging/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, data binding, provide data, custom data source, CustomStore, DataSource, load