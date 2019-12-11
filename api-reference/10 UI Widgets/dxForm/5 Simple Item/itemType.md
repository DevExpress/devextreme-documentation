---
default: 'simple'
acceptValues: 'simple' | 'group' | 'tabbed' | 'empty'
type: string
---
---
##### shortDescription
Specifies the type of the current item.

---
The structure of the form item object depends on the value of this option.

This article describes the structure of an item whose type is "simple". The following item types are also available.

- group  
 [Group item](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/') is a section consisting of a caption and child form items. You can customize the layout options for each group separately.

- tabbed  
 [Tabbed item](/api-reference/10%20UI%20Widgets/dxForm/7%20Tabbed%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/') is a tabbed panel whose tabs contain child form items. You can customize the layout options for each tab separately.

- empty  
 [Empty item](/api-reference/10%20UI%20Widgets/dxForm/8%20Empty%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Empty_Item/') is an empty span between neighboring items. You can specify the number of columns spanned by an empty item.