---
type: Array<dxTreeViewItem>
---
---
##### shortDescription
Holds an array of tree view items.

---
When specifying the **items** field for an item, this item becomes a root item. The child items are displayed using the same default item template as the root items. So specify the fields that take part in the default item template when defining **items** array objects. Alternatively, you can implement a custom item template. 

[note] Each item of the array passed to the items option can include an items field, which takes on an object with the same structure as a root item. Therefore, you can create as many tree view levels as you need.

#####See Also#####
- [Use Hierarchical Data](/concepts/05%20Widgets/TreeView/05%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Hierarchical_Data/')
- [Customize Node Appearance](/concepts/05%20Widgets/TreeView/30%20Customize%20Node%20Appearance.md '/Documentation/Guide/Widgets/TreeView/Customize_Node_Appearance/')