---
id: dxList.Options.allowItemReordering
type: Boolean
default: false
dep: dxList.Options.itemDragging
---
---
##### shortDescription
Specifies whether a user can reorder list items. [Grouped](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#grouped') items cannot be moved from one group to another.

---
To obtain items in the same order as they are displayed in the widget, [read](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#optionoptionName') the [items](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/') option for jQuery or bind it to a component property for Angular, Vue, and React.

[note] On Android devices, this option applies only if the [useNativeScrolling](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/useNativeScrolling.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#useNativeScrolling') option is set to **false**.

#####See Also#####
- [List - Item Reordering - User Interaction](/concepts/05%20Widgets/List/30%20Item%20Reordering/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Item_Reordering/#User_Interaction')
- [itemReordered](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemReordered')