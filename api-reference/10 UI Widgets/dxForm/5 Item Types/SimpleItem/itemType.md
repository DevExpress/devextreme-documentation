---
default: 'simple'
acceptValues: 'empty' | 'group' | 'simple' | 'tabbed'
type: String
---
---
##### shortDescription
Specifies the type of the current item.

---
The structure of the form item object depends on the value of this option.

This article describes the structure of an item whose type is "simple". The following item types are also available.

- group  
 [Group item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/') is a section consisting of a caption and child form items. You can customize the layout options for each group separately.

- tabbed  
 [Tabbed item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/') is a tabbed panel whose tabs contain child form items. You can customize the layout options for each tab separately.

- empty  
 [Empty item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/') is an empty span between neighboring items. You can specify the number of columns spanned by an empty item.