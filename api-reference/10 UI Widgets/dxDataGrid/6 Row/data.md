---
id: dxDataGridRowObject.data
type: Object
---
---
##### shortDescription
The [data object](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') represented by the row.

---
The contents of this object depend on the value of the [rowType](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType') property. The following list illustrates this dependency.

- **rowType** is *"data"* &rArr; **data** contains the data object of the row
- **rowType** is *"detail"* &rArr; **data** contains the data object of the master row in the [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/')
- **rowType** is *"group"* &rArr; **data** has the following structure.     

        data: {
            key: string, // contains the grouping value
            items: array, // contains data objects that satisfy the grouping value
            isContinuation: boolean // "true" if the group starts on one of the previous pages; "false" otherwise
        }
- **rowType** is *"groupFooter"* &rArr; **data** has the following structure.    
   
        data: {
            key: string, // contains the grouping value
            items: array, // contains data objects that satisfy the grouping value
            isContinuation: boolean, // "true" if the group starts on one of the previous pages; "false" otherwise
            aggregates: array // contains values calculated for the group summary
        }
- **rowType** is *"header"*, *"filter"*, or *"totalFooter"* &rArr; **data** is **undefined**