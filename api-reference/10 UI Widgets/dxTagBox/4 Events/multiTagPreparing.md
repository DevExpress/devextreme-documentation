---
id: dxTagBox.multiTagPreparing
type: eventType
---
---
##### shortDescription
Raised before the multi-tag is rendered.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel replacing ordinary tags with the multi-tag.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only when using Knockout.

##### field(e.multiTagElement): dxElement
#include common-ref-elementparam with { element: "multi-tag" }

##### field(e.selectedItems): Array<String, Number, Object>
The currently selected items.

##### field(e.text): String
Allows you to change the multi-tag's text.

---
Main article: [onMultiTagPreparing](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onMultiTagPreparing.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onMultiTagPreparing')

#####See Also#####
#include common-link-handleevents