---
type: Array
---
---
##### shortDescription
Holds an array of tree view items.

---
When specifying the **items** field for an item, this item becomes a root item. The child items are displayed using the same default item template as the root items. So specify the fields that take part in the default item template when defining **items** array objects. Alternatively, you can implement a custom item template. 

[note] Each item of the array passed to the items option can include an items field, which takes on an object with the same structure as a root item. Therefore, you can create as many tree view levels as you need.

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')