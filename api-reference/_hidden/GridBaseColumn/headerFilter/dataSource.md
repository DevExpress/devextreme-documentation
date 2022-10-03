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

##### return: Array<any> | Store | DataSource_Options
A desired header filter data source.



---
The {WidgetName} generates a header filter's data source automatically based on column values. Use the **dataSource** property to change the generated data source or specify a custom one. If you use a function to specify a header filter's data source, override the incoming *dataSource* parameter in the body of this function. Refer to the following help topic for more information: [Customize Header Filter Data Source](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/').
