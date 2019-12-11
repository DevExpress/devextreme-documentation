---
type: String
---
---
##### shortDescription
The type of the row.

---
This field can have one of the following values.

- *"data"* - for rows representing data objects
- *"detail"* - for the row containing the detail section in the [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/')
- *"detailAdaptive"* - for the row containing in the detail section of the [adaptive column](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/')
- *"group"* - for group rows
- *"groupFooter"* - for the row displayed in the [group footer](/concepts/05%20Widgets/DataGrid/65%20Summaries/20%20Group%20Summary/10%20Alignment%20and%20Location.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/#Alignment_and_Location')
- *"header"* - for the [header row](/concepts/05%20Widgets/DataGrid/15%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Column_Headers/')
- *"filter"* - for the [filter row](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row')
- *"totalFooter"* - for the row containing the [total summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/')

[note]Available row properties depend on the row type. For example, the [data](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/data.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#data') and [key](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/key.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#key') properties are undefined for *header*, *filter* and *totalFooter* rows, but have values for the other row types. To get exhaustive information on the particular property, refer to its description.