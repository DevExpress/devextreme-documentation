---
default: 'simple'
acceptValues: 'simple' | 'group' | 'tabbed' | 'empty'
type: String
---
---
##### shortDescription
Specifies the type of the current item.

---
The structure of the form item object depends on the value of this option.

This article describes the structure of an item whose type is "empty". The following item types are also available.

- simple  
 [Simple item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/') is an editor-label pair usually bound to a [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field used to display and modify this field.

- group  
 [Group item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/') is a section consisting of a caption and child form items. You can customize the layout options for each group separately.

- tabbed  
 [Tabbed item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/') is a tabbed panel whose tabs contain child form items. You can customize the layout options for each tab separately.