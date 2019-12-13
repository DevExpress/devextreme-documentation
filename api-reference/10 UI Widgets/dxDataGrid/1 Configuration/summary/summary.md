---
id: dxDataGrid.Options.summary
type: Object
---
---
##### shortDescription
Specifies the options of the grid summary.

---
A summary is a grid feature that provides a synopsis of data contained in the grid. A summary consists of several items. A summary item displays a value that is a product of applying an aggregate function to the data of a specific column.

There are two types of summary in **DataGrid**: group and total. The group summary is calculated on a group of data, which is segregated during [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/'). To specify the items of the group summary, declare an array of objects and assign it to the **summary**.[groupItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') field.

The total summary is calculated on all data contained in the grid. To specify the items of the total summary, declare an array of objects and assign it to the **summary**.[totalItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/') field.
