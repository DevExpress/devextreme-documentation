[note] This technique requires the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') specified in the [store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores').

To get the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance, call the Sankey's [getDataSource()](/api-reference/10%20UI%20Components/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Components/dxSankey/Methods/#getDataSource') method:

#include data-binding-examples-update-dx-datasource

Then, access the underlying store with the [store()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/store().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store') method, and call the store's [push(changes)](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges') method to modify data. The Sankey will be updated automatically.

    <!--JavaScript-->
    getDataSource().store().push([
        { type: "update", key: "Oranges", data: { count: 10 } },
        { type: "remove", key: "Apples" }
    ]);

#####See Also#####
#include common-link-callmethods
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [Data Layer - DataSource Examples](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Binding/Data_Source_Examples/')
