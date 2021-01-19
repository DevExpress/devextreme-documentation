---
id: dxList.Options.itemDeleteMode
acceptValues: 'context' | 'slideButton' | 'slideItem' | 'static' | 'swipe' | 'toggle'
type: String
default: 'static', 'slideItem' (iOS), 'swipe' (Android)
---
---
##### shortDescription
Specifies the way a user can delete items from the list.

---
[note]If **List** items are [supplied with the context menu](/concepts/05%20Widgets/List/40%20Item%20Context%20Menu.md '/Documentation/Guide/Widgets/List/Item_Context_Menu/'), this option is ignored in favor of the [menuMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/menuMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuMode') option.

#include common-ref-enum with {
     enum: "`ListItemDeleteMode`",
     values: "`Static`, `Toggle`, `SlideButton`, `SlideItem`, `Swipe`, and `Context`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/"
}

#####See Also#####
- [List - Item Deletion - User Interaction](/concepts/05%20Widgets/List/35%20Item%20Deletion/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction')