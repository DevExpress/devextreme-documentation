---
id: dxList.selectAllValueChanged
type: eventType
---
---
##### shortDescription
Raised when the "Select All" check box value is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
Main article: [onSelectAllValueChanged](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onSelectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onSelectAllValueChanged')

#####See Also#####
- [List - Handle Selection-Related Events](/concepts/05%20Widgets/List/25%20Selection/10%20Events.md '/Documentation/Guide/Widgets/List/Selection/#Events')
#include common-link-handleevents