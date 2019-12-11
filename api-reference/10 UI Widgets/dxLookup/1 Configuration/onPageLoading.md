---
EventForAction: ..\4 Events\pageLoading.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before the next page is loaded.

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
- [Enable Paging](/concepts/05%20Widgets/Lookup/15%20Enable%20Paging.md '/Documentation/Guide/Widgets/Lookup/Enable_Paging/')