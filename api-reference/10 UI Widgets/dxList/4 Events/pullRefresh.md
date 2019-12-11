---
type: eventType
---
---
##### shortDescription
Fires before the list is refreshed as a result of the "pull down to refresh" gesture.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

---
Instead, you can use the [onPullRefresh](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onPullRefresh.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onPullRefresh') option to handle the event.

[note]The "pull down to refresh" gesture is not supported by desktop browsers and Windows Phone devices. You can use it only in [mobile themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') except the Windows Phone theme.

#####See Also#####
- [List - Touch-Screen Gestures](/concepts/05%20Widgets/List/45%20End-User%20Interaction/01%20Touch-Screen%20Gestures.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/')
#include common-link-handleevents