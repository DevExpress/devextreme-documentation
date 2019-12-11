---
default: 'toggle'
acceptValues: 'static' | 'toggle' | 'slideButton' | 'slideItem' | 'swipe' | 'context'
type: String
---
---
##### custom_default_for_ios
'slideItem'

##### custom_default_for_android
'swipe'

##### custom_default_for_windows
'context'

##### custom_default_for_generic
'static'

##### shortDescription
Specifies the way a user can delete items from the list.

---
[note]If **List** items are [supplied with the context menu](/concepts/05%20Widgets/List/40%20Item%20Context%20Menu.md '/Documentation/Guide/Widgets/List/Item_Context_Menu/'), this option is ignored in favor of the [menuMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/menuMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuMode') option.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ListItemDeleteMode` enum. This enum accepts the following values: `Static`, `Toggle`, `SlideButton`, `SlideItem`, `Swipe` and `Context`.

#####See Also#####
- [List - Item Deletion - User Interaction](/concepts/05%20Widgets/List/35%20Item%20Deletion/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction')

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>