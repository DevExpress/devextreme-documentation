---
id: HierarchicalCollectionWidget.Options.keyExpr
type: String | function(item)
default: 'id'
---
---
##### shortDescription
Specifies which data field provides keys for **TreeView** items.

##### param(item): Object
The current item's data object.

##### return: String
The key value.

---
[note]The key value should be unique within the data array.

#####See Also#####
- [Specify data using **dataSource** option](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/dataSource/')
- [Specify data using **items** option](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/')