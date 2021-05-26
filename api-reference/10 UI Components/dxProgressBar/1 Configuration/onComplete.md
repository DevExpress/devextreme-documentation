---
id: dxProgressBar.Options.onComplete
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the [value](/api-reference/10%20UI%20Components/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#value') reaches the [maximum](/api-reference/10%20UI%20Components/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#max').

##### param(e): Object
Information about the event.

##### field(e.component): dxProgressBar
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if Knockout is used.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ProgressBar/Overview/"
}