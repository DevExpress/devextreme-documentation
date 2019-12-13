---
id: dxTabPanel.Options.onTitleRendered
type: function(e)
default: null
EventForAction: dxTabPanel.titleRendered
---
---
##### shortDescription
A function that is executed after a tab is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemData): Object
The data of the item whose title is rendered.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
