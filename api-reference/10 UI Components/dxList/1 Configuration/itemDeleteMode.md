---
id: dxList.Options.itemDeleteMode
type: Enums.ItemDeleteMode
default: 'static', 'slideItem' (iOS), 'swipe' (Android)
---
---
##### shortDescription
Specifies how users delete items.

---
[note]

- If an [item context menu](/concepts/05%20UI%20Components/List/40%20Item%20Context%20Menu.md '/Documentation/Guide/UI_Components/List/Item_Context_Menu/') is configured, the List component adds a delete button to the context menu and ignores this property. To specify how users access the context menu, configure [menuMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/menuMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#menuMode').
- When **itemDeleteMode** is *"swipe"* or *"slideItem"*, the List component does not allow text selection within items.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/"
}

#####See Also#####
- [allowItemDeleting](/api-reference/10%20UI%20Components/dxList/1%20Configuration/allowItemDeleting.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemDeleting')
- [List - Item Deletion - User Interaction](/concepts/05%20UI%20Components/List/35%20Item%20Deletion/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Item_Deletion/#User_Interaction')