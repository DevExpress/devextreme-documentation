---
id: dxSelectBox.customItemCreating
type: eventType
---
---
##### shortDescription
Raised when a user adds a custom item.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.customItem): String | Object | Promise<any>
The field where to place a custom item.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.text): String
The input field's text.

---
Main article: [onCustomItemCreating](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onCustomItemCreating.md '{basewidgetpath}/Configuration/#onCustomItemCreating')

#####See Also#####
#include common-link-handleevents