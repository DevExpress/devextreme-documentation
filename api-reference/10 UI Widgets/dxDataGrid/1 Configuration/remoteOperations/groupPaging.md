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
3. The widget does not support remote group paging in case the [expandAll(groupIndex)](/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) method is called.
 
[note]When **groupPaging** is enabled, all other operations (filtering, sorting, paging, grouping and summaries calculation) also become remote. 

For details, see the [Remote Group Paging](/concepts/05%20Widgets/DataGrid/013%20Features%20for%20Remote%20Data/010%20Remote%20Group%20Paging.md '/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Remote_Group_Paging/') topic.