---
EventForAction: ..\4 Events\pullRefresh.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed when the "pull to refresh" gesture is performed. Supported in mobile themes only.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
#####See Also#####
- [List - Touch-Screen Gestures](/concepts/05%20Widgets/List/45%20End-User%20Interaction/01%20Touch-Screen%20Gestures.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/')