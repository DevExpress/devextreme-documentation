---
id: dxFilterBuilderField.lookup.dataSource
type: Array<any> | DataSource_Options | Store
default: undefined
---
---
##### shortDescription
Specifies the lookup data source.

---
This option accepts one of the following:

- **Array of objects or primitives**       
A JavaScript array that contains plain objects or primitives.

- [**DataSource configuration object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')       
A **DataSource** configuration object. For more information about the **DataSource** and DevExtreme Data Layer, refer to the [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/') article.

    [important] **DataSource** instances are not supported.

- **Store instance**     
An [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'), or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') instance.

If the lookup data source contains objects, specify the [valueExpr](/api-reference/_hidden/dxFilterBuilderField/lookup/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/lookup/#valueExpr') and [displayExpr](/api-reference/_hidden/dxFilterBuilderField/lookup/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/lookup/#displayExpr') options in addition to the **dataSource**.

[note] Collections of primitives are not supported if you use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> library API <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">directly</a> or via a server-side wrapper (<a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400704/concepts/data-binding#aspnet-mvc-and-web-api-controllers" target="_blank">as with the DevExtreme ASP.NET MVC Controls</a>) to load the collections from a remote data source. Reconfigure the data source to return collections of objects.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithList/"
}