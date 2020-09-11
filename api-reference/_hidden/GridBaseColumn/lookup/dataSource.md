---
id: GridBaseColumn.lookup.dataSource
type: Array<any> | DataSource_Options | Store | function(options)
default: undefined
---
---
##### shortDescription
Specifies the data source for the lookup column.

##### param(options): Object
Information on the current row.

##### field(options.data): Object
The row's data.

##### field(options.key): any
The row's key.

##### return: Array<any> | DataSource_Options | Store
An array of objects or primitives, a store instance, or a **DataSource** configuration.

---
This option accepts one of the following:

- **Array of objects or primitives**       
A JavaScript array that contains plain objects or primitives.

- [**DataSource configuration object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')       
A **DataSource** configuration object. For more information about the **DataSource** and DevExtreme Data Layer, refer to the [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/') article.

    [important] **DataSource** instances are not supported.

- **Store instance**     
An [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'), or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') instance.

- **Function**      
A function that returns one of the above.

If the lookup data source contains objects, specify the [valueExpr](/api-reference/_hidden/GridBaseColumn/lookup/valueExpr.md '{basewidgetpath}/Configuration/columns/lookup/#valueExpr') and [displayExpr](/api-reference/_hidden/GridBaseColumn/lookup/displayExpr.md '{basewidgetpath}/Configuration/columns/lookup/#displayExpr') options in addition to the **dataSource**.

[note] Collections of primitives are not supported if you use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> library API <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">directly</a> or via a server-side wrapper (<a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400704/concepts/data-binding#aspnet-mvc-and-web-api-controllers" target="_blank">as with the DevExtreme ASP.NET MVC Controls</a>) to load the collections from a remote data source. Reconfigure the data source to return collections of objects.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CascadingLookups/"
}

#####See Also#####
- [How to: Bind a Lookup Column to a Custom Data Source](/concepts/05%20Widgets/DataGrid/99%20How%20To/Bind%20a%20Lookup%20Column%20to%20a%20Custom%20Data%20Source.md '/Documentation/Guide/Widgets/{WidgetName}/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/')