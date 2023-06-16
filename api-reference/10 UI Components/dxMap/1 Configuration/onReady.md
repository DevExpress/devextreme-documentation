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

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.originalMap): Object
The current provider's map data.

---

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-add-the-current-location-marker"
}

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-display-step-by-step-directions"
}
