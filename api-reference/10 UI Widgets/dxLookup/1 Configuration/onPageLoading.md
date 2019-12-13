---
id: dxLookup.Options.onPageLoading
type: function(e)
default: null
EventForAction: dxLookup.pageLoading
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
- [Enable Paging](/concepts/05%20Widgets/Lookup/15%20Enable%20Paging.md '/Documentation/Guide/Widgets/Lookup/Enable_Paging/')