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

- **Array of objects**       
A JavaScript array that contains plain objects. Each object configures one header filter item and should have the `text` and `value` fields. For more information, refer to the [Specify a Custom Data Source](/concepts/UI%20Components/DataGrid/How%20To/Customize%20Header%20Filter%20Data%20Source/#Specify%20a%20Custom%20Data%20Source '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Specify_a_Custom_Data_Source') article.

- [**DataSource configuration object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
A **DataSource** configuration object. For more information, refer to the [Map Data Source Fields](/concepts/UI%20Components/DataGrid/How%20To/Customize%20Header%20Filter%20Data%20Source/#Map%20Data%20Source%20Fields '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Map_Data_Source_Fields') article.

    [important] **DataSource** instances are not supported.

- **Store instance**     
An [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'), or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') instance.

- **Function**      
A function that allows you to modify the incoming `options.dataSource` parameter or override it and set it to one of the above. For more information, refer to the [Change the Generated Data Source](/concepts/UI%20Components/DataGrid/How%20To/Customize%20Header%20Filter%20Data%20Source/#Change%20the%20Generated%20Data%20Source '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Change_the_Generated_Data_Source') article.

