---
type: eventType
---
---
##### shortDescription
Fires after the widget title is rendered.

##### param(e): object
Provides function parameters.

##### field(e.titleElement): jQuery
The HTML element of the item title.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Instead, you can use the [onTitleRendered](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/onTitleRendered.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#onTitleRendered') option to handle the event.

#####See Also#####
#include common-link-handleevents