---
id: dxLookup.Options.onPageLoading
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the next page is loaded.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
#####See Also#####
- [Enable Paging](/concepts/05%20Widgets/Lookup/15%20Enable%20Paging.md '/Documentation/Guide/UI_Components/Lookup/Enable_Paging/')