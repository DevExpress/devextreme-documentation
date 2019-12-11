---
type: eventType
---
---
##### shortDescription
Fires when the selection changes.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.addedItems): array
Provides access to the newly added items.

##### field(e.removedItems): array
Provides access to the newly unselected items.

---
Instead, you can use the [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onSelectionChanged') option to handle the event.

#####See Also#####
#include common-link-handleevents