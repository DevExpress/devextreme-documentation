---
id: dxToast.Options.onShowing
type: function(e)
---
---
##### shortDescription
A function that is executed before the UI component is displayed.

##### param(e): ui/toast:ShowingEvent
Information about the event.

##### field(e.cancel): Boolean
Set this field to **true** if you want to prevent the {WidgetName} from being displayed.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

---
<!-- Description goes here -->