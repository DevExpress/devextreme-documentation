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

This article describes the structure of an item whose type is "tabbed". The following item types are also available.

- simple  
 [Simple item](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/') is an editor-label pair usually bound to a [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field used to display and modify this field.

- group  
 [Group item](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/') is a section consisting of a caption and child form items. You can customize the layout options for each group separately.

- empty  
 [Empty item](/api-reference/10%20UI%20Widgets/dxForm/8%20Empty%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Empty_Item/') is an empty span between neighboring items. You can specify the number of columns spanned by an empty item.