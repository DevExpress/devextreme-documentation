---
id: dxOverlay.Options.onShowing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the UI component is displayed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.cancel): Boolean | Promise<Boolean>
Set this field to **true** if you want to prevent the {WidgetName} from being displayed.

---
