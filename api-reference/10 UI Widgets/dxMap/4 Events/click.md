---
type: eventType
---
---
##### shortDescription
Fires when the map is clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.location): object
Returns the location of the clicked point on the map (if the 'google' or 'bing' provider is used).

##### field(e.jQueryEvent): jQueryEvent
Returns a jQuery event that caused the action execution (if a static google provider is used).

---
Instead, you can use the [onClick](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onClick') option to handle the event.

#####See Also#####
#include common-link-handleevents