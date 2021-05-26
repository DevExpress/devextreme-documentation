---
id: dxActionSheetItem.onClick
type: function(e) | String
default: null
---
---
##### shortDescription
A handler for the [click](/api-reference/10%20UI%20Components/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Components/dxButton/Events/#click') event raised for the button representing the given action sheet button.

##### param(e): Object
Information about the event.

##### field(e.component): dxActionSheet
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Assign a function to perform a custom action when a button representing an action sheet item is clicked.

To navigate to a specific URL when the **click** event fires for action sheet buttons, assign that URL directly to this property.