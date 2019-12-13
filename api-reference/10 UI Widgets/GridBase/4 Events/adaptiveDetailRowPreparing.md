---
id: GridBase.adaptiveDetailRowPreparing
type: eventType
---
---
##### shortDescription
Raised before an adaptive detail row is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.formOptions): Object
The options of the [Form](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/') widget.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '{basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing')

#####See Also#####
#include common-link-handleevents