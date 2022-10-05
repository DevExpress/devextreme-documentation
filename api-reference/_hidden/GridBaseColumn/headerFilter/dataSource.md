---
id: GridBaseColumn.headerFilter.dataSource
type: Array<any> | Store | DataSource_Options | function(options) | null
default: undefined
---
---
##### shortDescription
Specifies the header filter's data source.

##### param(options): Object
Data source properties.

##### field(options.component): Object
The UI component's instance.

##### field(options.dataSource): DataSource_Options | null
A DataSource configuration.

---

This property accepts one of the following:

- **Array of objects or primitives**       
A JavaScript array that contains plain objects or primitives.

- [**DataSource configuration object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
A **DataSource** configuration object. For more information about the **DataSource** and DevExtreme Data Layer, refer to the [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/') article.

    [important] **DataSource** instances are not supported.

- **Store instance**     
An [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'), or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') instance.

- **Function**      
A function that allows you to override the incoming *options.dataSource* parameter and set it to one of the above.

[note] Collections of primitives are not supported if you use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> library API <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">directly</a> or via a server-side wrapper (<a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400704/concepts/data-binding#aspnet-mvc-and-web-api-controllers" target="_blank">as with the DevExtreme ASP.NET MVC Controls</a>) to load the collections from a remote data source.

The {WidgetName} generates a header filter's data source automatically based on column values. Use the **dataSource** property to change the generated data source or specify a custom one. Refer to the following help topic for more information: [Customize Header Filter Data Source](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/').
