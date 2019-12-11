---
default: 'static', 'slideItem' (ios), 'swipe' (android), 'context' (windows)
acceptValues: 'context' | 'slideButton' | 'slideItem' | 'static' | 'swipe' | 'toggle'
type: String
---
---
##### shortDescription
Specifies the way a user can delete items from the list.

---
[note]If **List** items are [supplied with the context menu](/concepts/05%20Widgets/List/40%20Item%20Context%20Menu.md '/Documentation/Guide/Widgets/List/Item_Context_Menu/'), this option is ignored in favor of the [menuMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/menuMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuMode') option.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ListItemDeleteMode` enum. This enum accepts the following values: `Static`, `Toggle`, `SlideButton`, `SlideItem`, `Swipe` and `Context`.

#####See Also#####
- [List - Item Deletion - User Interaction](/concepts/05%20Widgets/List/35%20Item%20Deletion/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/"
}