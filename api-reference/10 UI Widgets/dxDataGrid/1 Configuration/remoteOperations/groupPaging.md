---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether or not paging by groups must be performed on the server side.

---
Note that remote group paging has a number of restrictions:

1. Filtering, paging, grouping and (if needed) sorting, should be performed remotely. 
2. Initially, all groups should be collapsed. For this purpose, set the **grouping** | [autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') option to false.
3. The widget does not support remote group paging in case the [expandAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex') method is called.
 
[note]When **groupPaging** is enabled, all other operations (filtering, sorting, paging, grouping and summaries calculation) also become remote. 

For details, see the [Remote Group Paging](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/025%20Remote%20Group%20Paging.md '/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Remote_Group_Paging') topic.