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

This article describes the structure of an item whose type is "group". The following item types are also available.

- simple  
 [Simple item](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/') is an editor-label pair usually bound to a [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object field used to display and modify this field.

- tabbed  
 [Tabbed item](/api-reference/10%20UI%20Widgets/dxForm/7%20Tabbed%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/') is a tabbed panel whose tabs contain child form items. You can customize the layout options for each tab separately.

- empty  
 [Empty item](/api-reference/10%20UI%20Widgets/dxForm/8%20Empty%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Empty_Item/') is an empty span between neighboring items. You can specify the number of columns spanned by an empty item.