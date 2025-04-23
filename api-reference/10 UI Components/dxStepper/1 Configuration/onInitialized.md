---
id: dxStepper.Options.onInitialized
type: function(e)
---
---
##### shortDescription
A function that fires when the component finishes its initialization.

##### param(e): ui/stepper:InitializedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
[note] Use **onInitialized** to save the UI component instance for global use. Avoid using this function to set initial properties.

#include common-code-on-initialized

#####See Also#####

#include common-get-instance