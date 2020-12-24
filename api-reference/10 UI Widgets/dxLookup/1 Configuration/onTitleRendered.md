---
id: dxLookup.Options.onTitleRendered
type: function(e)
default: null
dep: dxLookup.Options.dropDownOptions
EventForAction: dxLookup.titleRendered
---
---
##### shortDescription
A function that is executed when the drop-down list's title is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.titleElement): dxElement
#include common-ref-elementparam with { element: "title" }

---
