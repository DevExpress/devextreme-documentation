---
id: dxMap.Options.onReady
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the map is ready.

##### param(e): ui/map:ReadyEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.originalMap): Object
The current provider's map data.

---
You can use the `component` field to access properties that are common to all supported Map [providers](/api-reference/10%20UI%20Components/dxMap/9%20Types/MapProvider.md '/Documentation/ApiReference/UI_Components/dxMap/Types/#MapProvider'). To access provider-specific API, utilize the `originalMap` parameter.