---
id: dxFormGroupItem.items
type: Array<dxFormSimpleItem, dxFormGroupItem, dxFormTabbedItem, dxFormEmptyItem, dxFormButtonItem>
default: undefined
---
---
##### shortDescription
Holds an array of form items displayed within the group.

---
Like the [items](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') option of the **Form** widget, the array passed to the **items** field of a group item can hold items of the following types.

- [Simple](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/')  
 A standard item consisting of a label and an editor widget used to specify a value of the associated data field.

- [Group](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/')  
 An item representing a container of other form items.

- [Tabbed](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/')  
 An item representing a tabbed container of other form items.

- [Empty](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/')  
 An empty item used to add a space between neighboring items.