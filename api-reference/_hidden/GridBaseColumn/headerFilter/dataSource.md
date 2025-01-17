---
id: GridBaseColumn.headerFilter.dataSource
type: Array<any> | Store | DataSource_Options | function(options) | null | undefined
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
The {WidgetName} generates a header filter's data source automatically based on column values. Each header filter item is an object that includes the following fields:

- `text`     
A text string that represents the item in the header filter.

- `value`        
A filter that the item applies. It can be a single value (for example, 0) or a filter expression. Refer to the [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') help topic for information on the filter expression syntax.

Use the **dataSource** property to change the generated data source or specify a custom data source. You can set the **dataSource** property to one of the following:

- **Array of objects**       
A JavaScript array that contains plain objects. For more information, refer to the [Specify a Custom Data Source](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source/10%20Specify%20a%20Custom%20Data%20Source.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Specify_a_Custom_Data_Source') article.

- [**DataSource configuration object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
A **DataSource** configuration object. For more information, refer to the [Map Data Source Fields](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source/20%20Map%20Data%20Source%20Fields.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Map_Data_Source_Fields') article.

    [important] **DataSource** instances are not supported.

- **Store instance**     
An [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'), or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') instance.

- **Function**      
A function that allows you to modify the incoming `options.dataSource` parameter or override it and set it to one of the above. For more information, refer to the [Change the Generated Data Source](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source/30%20Change%20the%20Generated%20Data%20Source.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Change_the_Generated_Data_Source') article.

