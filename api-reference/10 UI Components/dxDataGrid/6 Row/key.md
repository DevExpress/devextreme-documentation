---
id: dxDataGridRowObject.key
type: any
---
---
##### shortDescription
The key of the data object represented by the row.

---
The contents of this object depend on the value of the [rowType](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType') property. The following list illustrates this dependency.

- **rowType** is *"data"* &rArr; **key** contains the key of the data object represented by the row
- **rowType** is *"detail"* &rArr; **key** contains the key of the data object represented by the master row in the [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/')
- **rowType** is *"group"* or *"groupFooter"* &rArr; **key** contains the grouping value         
- **rowType** is *"header"*, *"filter"*, or *"totalFooter"* &rArr; **key** is **undefined**

[note]If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.