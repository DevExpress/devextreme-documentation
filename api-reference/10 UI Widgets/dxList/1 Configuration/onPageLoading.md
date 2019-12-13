---
id: dxList.Options.onPageLoading
type: function(e)
default: null
EventForAction: dxList.pageLoading
---
---
##### shortDescription
A function that is executed before the next page is loaded.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
#####See Also#####
- [Paging](/concepts/05%20Widgets/List/08%20Paging.md '/Documentation/Guide/Widgets/List/Paging/')