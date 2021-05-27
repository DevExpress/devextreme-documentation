---
id: GridBaseColumn.headerFilter.dataSource
type: Array<any> | function(options) | DataSource_Options
default: undefined
---
---
##### shortDescription
Specifies the header filter's data source.

##### param(options): Object
Data source properties.

##### field(options.component): Object
The UI component's instance.

##### field(options.dataSource): DataSource_Options
A DataSource configuration.

##### return: any
<!-- Description goes here -->

---
The {WidgetName} generates a header filter's data source automatically based on column values. Use the **dataSource** property to change the generated data source or specify a custom data source. Refer to the following help topic for more information: [Customize Header Filter Data Source](/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/).
