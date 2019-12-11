Extend a JavaScript array's functionality by placing it into an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

    <!--JavaScript-->$(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.ArrayStore({
                data: products,
                onLoaded: function() {
                    // Event handling commands go here
                }
            }),
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

Data kept in the **ArrayStore** can be processed in a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). For example, the **DataSource** can sort data.

    <!--JavaScript-->
    var products = [
        { name: "HD Video Player", price: 100 },
        { name: "SuperHD Video Player", price: 420 },
        { name: "SuperPlasma 50", price: 1500 },
        { name: "SuperLED 50", price: 200 }
    ];
    
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: products,
                sort: { getter: "name", asc: true }
            }),
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

[note]Even if you have [passed a JavaScript array](/concepts/05%20Widgets/TagBox/02%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/TagBox/Data_Binding/Simple_Array/Array_Only/') to the **dataSource** option, the **TagBox** automatically places it into an **ArrayStore** wrapped into the **DataSource** you can get with the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Methods/#getDataSource') method.

#####See Also#####
- [Data Layer - What Are Stores](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - DataSource Examples | In-memory Data](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data')
- [Access the DataSource](/concepts/05%20Widgets/TagBox/02%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/TagBox/Data_Binding/Access_the_DataSource/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/Overview/jQuery/Light)

[tags]tagBox, data binding, provide data, ArrayStore, DataSource, process data