---
id: dxTreeViewItem.parentId
type: Number | String
default: undefined
---
---
##### shortDescription
Holds the key of the parent item.

---
If a data source contains a single item on the highest level, omit this field in this item's object only. In case of multiple items on the highest level, set this field to 0 (default) or a custom value specified in the [rootValue](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#rootValue) property.

Specify this field regardless of the item template type (default or [custom](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#itemTemplate)).
